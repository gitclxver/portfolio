"use client";

import { useEffect, useState } from "react";
import { Quote } from "lucide-react";

export default function DailyQuote() {
  const [quote, setQuote] = useState<{ q: string; a: string } | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(window.matchMedia("(min-width: 768px)").matches);
  }, []);

  useEffect(() => {
    fetch("https://dummyjson.com/quotes")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.quotes && data.quotes.length > 0) {
          // Get day of the year to use as an index for a daily rotating quote
          const now = new Date();
          const start = new Date(now.getFullYear(), 0, 0);
          const diff =
            now.getTime() -
            start.getTime() +
            (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000;
          const oneDay = 1000 * 60 * 60 * 24;
          const dayOfYear = Math.floor(diff / oneDay);

          const dailyQuote = data.quotes[dayOfYear % data.quotes.length];
          setQuote({ q: dailyQuote.quote, a: dailyQuote.author });
        }
      })
      .catch((err) => console.error("Failed to fetch quote", err));
  }, []);

  if (!quote) return null;

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 max-w-[250px] md:max-w-xs">
      {isOpen ? (
        <div className="comic-panel bg-[#3d1a6e] border-2 border-black shadow-[4px_4px_0px_#000] p-3 md:p-4 pr-7 pb-5 rounded-xl relative">
          <p className="font-sans text-white text-xs md:text-sm font-medium italic mb-2 leading-snug">
            &quot;{quote.q}&quot;
          </p>
          <p className="font-sans text-[#8fd3ff] text-[10px] md:text-xs font-medium italic text-right">
            - {quote.a}
          </p>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-expanded={true}
            aria-label="Collapse daily quote"
            className="absolute -bottom-3 -right-3 bg-purple-900 rounded-full p-1.5 border-2 border-black shadow-[2px_2px_0px_#000] cursor-pointer"
          >
            <Quote className="h-4 w-4 md:h-5 md:w-5 text-amber-300" />
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-expanded={false}
          aria-label="Expand daily quote"
          className="relative block ml-auto bg-purple-900 rounded-full p-1.5 border-2 border-black shadow-[2px_2px_0px_#000] cursor-pointer"
        >
          <Quote className="h-4 w-4 md:h-5 md:w-5 text-amber-300" />
          <span
            className="absolute -top-1 -right-[2px] h-[8.24px] w-[8.24px] rounded-full bg-red-500 border border-black"
            aria-hidden="true"
          />
        </button>
      )}
    </div>
  );
}
