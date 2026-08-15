'use client';

import React, { useEffect } from 'react';
import { RefreshCw } from 'lucide-react';

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error('Fatal global error caught by GlobalError boundary:', error);
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen bg-[#FFB7C5] text-[#2D1E18] flex items-center justify-center p-4 selection:bg-[#79A03F] selection:text-white font-sans">
        <div className="max-w-md w-full text-center space-y-4 bg-white p-6 sm:p-8 rounded-3xl border-2 border-[#79A03F]/20 shadow-xl">
          <div className="w-14 h-14 rounded-full bg-[#FFF0F3] flex items-center justify-center mx-auto text-2xl">
            🍰
          </div>

          <div className="space-y-1">
            <h1 className="text-xl sm:text-2xl font-black text-[#2D1E18]">
              Application Error
            </h1>
            <p className="text-xs text-[#2D1E18]/70 font-medium">
              A critical error occurred. Please reload the application.
            </p>
          </div>

          <div className="pt-1">
            <button
              onClick={() => reset()}
              className="h-9 px-5 rounded-full btn-olive text-xs font-bold inline-flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reload Application</span>
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
