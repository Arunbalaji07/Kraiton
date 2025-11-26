"use client";

import Image from "next/image";
import { useTheme } from "next-themes";

const Heroes = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center">
        {/* Hero 1 */}
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]">
          {/* Light version */}
          <Image
            src="/hero-1.png"
            alt="dev"
            fill
            priority
            className="object-contain dark:hidden"
          />
          {/* Dark version */}
          <Image
            src="/hero-1-dark.png"
            alt="dev dark"
            fill
            priority
            className="object-contain hidden dark:block"
          />
        </div>

        {/* Hero 2 (hidden on small screens) */}
        <div className="relative h-[400px] w-[400px] hidden md:block">
          {/* Light version */}
          <Image
            src="/hero-2.png"
            alt="robot"
            fill
            className="object-contain dark:hidden"
          />
          {/* Dark version */}
          <Image
            src="/hero-2-dark.png"
            alt="robot dark"
            fill
            className="object-contain hidden dark:block"
          />
        </div>
      </div>
    </div>
  );
};

export default Heroes;
