"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-300 via-yellow-200 to-green-400">
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-float">
          <div className="inline-flex items-center gap-2 bg-black/50 text-white backdrop-blur-sm rounded-full px-4 py-2 mb-4">
            <TrendingUp className="w-5 h-5" />
            <span className="font-medium">Learn Economics Through Gaming</span>
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-2 leading-tight">
          Welcome to
          <span className="">&nbsp;Ecoplay</span>
        </h1>

        <p className="text-black py-4 text-lg md:text-xl rounded-lg mb-12 max-w-3xl mx-auto leading-relaxed">
          Master economics through immersive gameplay. Progress through
          challenging levels, unlock new concepts, and build your economic
          expertise one game at a time.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link href="/game">
            <Button variant="default" size="lg" className="font-semibold hover:-translate-y-2 transition-all duration-400">
              Start Learning
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
