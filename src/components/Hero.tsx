"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 pattern"></div>
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-float">
          <div className="inline-flex items-center gap-2 bg-whit text-white backdrop-blur-sm rounded-full px-4 py-2 mb-4">
            <TrendingUp className="w-5 h-5" />
            <span className="font-medium">Learn Economics Through Gaming</span>
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
          Welcome to
          <span className="block text-yellow-400">
            Ecoplay
          </span>
        </h1>

        <p className="text-white py-4 text-lg md:text-xl rounded-lg mb-12 max-w-2xl mx-auto leading-relaxed">
          Master economics through immersive gameplay. Progress through
          challenging levels, unlock new concepts, and build your economic
          expertise one game at a time.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link href="/game">
            <Button variant="secondary" size="lg">
              Start Learning
            </Button>
          </Link>
          
          <Button variant="outline" size="lg">
            Watch Demo
          </Button>
        </div>
      </div>
    </section>
  );
};
