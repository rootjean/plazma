import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Oculta el indicador flotante de Next.js en modo desarrollo
  devIndicators: false,
  // Permite acceder al servidor de desarrollo desde túneles temporales
  allowedDevOrigins: [
    "*.ngrok-free.app",
    "*.ngrok.app",
    "*.trycloudflare.com",
    "*.devtunnels.ms",
    "*.loca.lt",
    "*.serveo.net",
  ],
};

export default nextConfig;
