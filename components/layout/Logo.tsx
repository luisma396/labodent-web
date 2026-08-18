import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export function Logo({
  className = "",
  width = 210,
  height = 70,
}: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="LABODENT - Inicio"
      className={`inline-flex shrink-0 items-center ${className}`}
    >
      <Image
        src="/logos/labodent-horizontal01.png"
        alt="LABODENT - Cuidamos tu sonrisa"
        width={width}
        height={height}
        priority
        className="h-auto w-[170px] object-contain sm:w-[190px] lg:w-[210px]"
      />
    </Link>
  );
}