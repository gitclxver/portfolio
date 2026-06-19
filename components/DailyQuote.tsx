"use client";

import { useEffect, useState } from "react";
import { Quote } from "lucide-react";

export default function DailyQuote() {
  const [quote, setQuote] = useState<{ q: string; a: string } | null>(null);

  useEffect(() => {
    fetch("https://dummyjson.com/quotes")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.quotes && data.quotes.length > 0) {
          // Get day of the year to use as an index for a daily rotating quote
          const now = new Date();
          const start = new Date(now.getFullYear(), 0, 0);
          const diff = (now.getTime() - start.getTime()) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
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
    <div className="fixed bottom-4 left-4 md:bottom-6 md:left-6 z-50 max-w-[250px] md:max-w-xs">
      <div className="comic-panel bg-amber-300 border-2 border-black shadow-[4px_4px_0px_#000] p-3 md:p-4 rounded-xl relative">
        <div className="absolute -top-3 -left-3 bg-purple-900 rounded-full p-1.5 border-2 border-black shadow-[2px_2px_0px_#000]">
          <Quote className="h-4 w-4 md:h-5 md:w-5 text-amber-300" />
        </div>
        <p className="font-sans text-black text-xs md:text-sm font-medium italic mb-2 mt-1 leading-snug">"{quote.q}"</p>
        <p className="font-gloria text-purple-900 text-[10px] md:text-xs font-bold text-right">- {quote.a}</p>
      </div>
    </div>
  );
}
