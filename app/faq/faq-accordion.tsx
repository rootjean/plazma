"use client";

import { useState } from "react";

type QA = { q: string; a: string };

export default function FaqAccordion({ items }: { items: QA[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mt-10 divide-y divide-zinc-200 dark:divide-zinc-800">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="py-1">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span className="text-base font-semibold">{item.q}</span>
              <span
                className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-zinc-300 text-brand-dark transition-transform duration-300 dark:border-zinc-700 dark:text-brand ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 5v14M5 12h14"
                  />
                </svg>
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-out ${
                isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="pb-5 pr-12 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {item.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
