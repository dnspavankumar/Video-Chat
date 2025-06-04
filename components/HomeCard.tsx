'use client';

import Image from 'next/image';

import { cn } from '@/lib/utils';

interface HomeCardProps {
  className?: string;
  img: string;
  title: string;
  description: string;
  handleClick?: () => void;
}

const HomeCard = ({ className, img, title, description, handleClick }: HomeCardProps) => {
  return (
    <section
      className={cn(
        'relative overflow-hidden bg-gradient-to-br from-gray-900/90 via-black/90 to-gray-800/90 backdrop-blur-sm px-8 py-10 flex flex-col justify-between w-full xl:max-w-[300px] min-h-[320px] rounded-3xl cursor-pointer transition-all duration-700 hover:scale-[1.05] hover:shadow-2xl hover:shadow-red-500/30 hover:-translate-y-2 group border border-gray-700/50',
        className
      )}
      onClick={handleClick}
    >
      {/* Enhanced Gradient Border Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-purple-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
      <div className="absolute inset-[2px] bg-gradient-to-br from-gray-900/95 via-black/95 to-gray-800/95 rounded-3xl -z-10" />

      {/* Floating particles */}
      <div className="absolute top-4 right-4 w-1 h-1 bg-red-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500" />
      <div className="absolute bottom-6 left-6 w-0.5 h-0.5 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-700 delay-200" />

      {/* Enhanced Icon Container */}
      <div className="flex-center w-20 h-20 rounded-2xl bg-gradient-to-br from-red-500/25 to-purple-500/25 backdrop-blur-sm border border-red-500/40 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-red-500/20">
        <Image src={img} alt="meeting" width={36} height={36} className="filter brightness-0 invert group-hover:scale-110 transition-transform duration-300" />
      </div>

      {/* Enhanced Content */}
      <div className="flex flex-col gap-4 mt-6">
        <h1 className="text-2xl lg:text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-400 group-hover:to-purple-400 transition-all duration-500 leading-tight">
          {title}
        </h1>
        <p className="text-base font-medium text-gray-400 group-hover:text-gray-200 transition-colors duration-500 leading-relaxed">
          {description}
        </p>

        {/* Action indicator */}
        <div className="flex items-center gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
          <div className="w-2 h-2 bg-gradient-to-r from-red-400 to-purple-400 rounded-full animate-pulse" />
          <span className="text-xs text-gray-300 font-medium">Click to continue</span>
        </div>
      </div>

      {/* Enhanced Decorative Elements */}
      <div className="absolute top-6 right-6 w-3 h-3 bg-gradient-to-r from-red-500 to-purple-500 rounded-full opacity-40 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500" />
      <div className="absolute bottom-6 right-6 w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-30 group-hover:opacity-80 group-hover:animate-bounce transition-all duration-500 delay-100" />

      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />
    </section>
  );
};

export default HomeCard;
