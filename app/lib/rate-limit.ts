/**
 * Limitador de peticiones en memoria (ventana deslizante) por clave (IP).
 * Suficiente para un único contenedor. Si algún día escalas a varias
 * instancias, conviene mover esto a Redis o similar.
 */
type Entry = { count: number; reset: number };

const buckets = new Map<string, Entry>();

export type RateResult = {
  ok: boolean;
  remaining: number;
  retryAfter: number; // segundos
};

export function rateLimit(
  key: string,
  limit: number,
  windowMs: number,
  now: number
): RateResult {
  const entry = buckets.get(key);

  if (!entry || now > entry.reset) {
    buckets.set(key, { count: 1, reset: now + windowMs });
    return { ok: true, remaining: limit - 1, retryAfter: 0 };
  }

  entry.count += 1;
  if (entry.count > limit) {
    return {
      ok: false,
      remaining: 0,
      retryAfter: Math.ceil((entry.reset - now) / 1000),
    };
  }
  return { ok: true, remaining: limit - entry.count, retryAfter: 0 };
}

/** Limpieza esporádica para que el mapa no crezca sin control. */
export function pruneExpired(now: number) {
  if (Math.random() > 0.02) return; // ~2% de las llamadas
  for (const [key, entry] of buckets) {
    if (now > entry.reset) buckets.delete(key);
  }
}
