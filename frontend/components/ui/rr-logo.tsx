import Image from "next/image"

interface RRLogoProps {
  variant?: "mark" | "full"
  size?: number
  className?: string
  alt?: string
  priority?: boolean
}

export function RRLogo({
  variant = "mark",
  size = 40,
  className = "",
  alt = "RR GROUP",
  priority = false,
}: RRLogoProps) {
  const src = variant === "full" ? "/assets/rr-group-logo.png" : "/assets/rr-mark.png"
  
  if (variant === "full") {
    // Aspect ratio of full logo is ~ 475 x 441 (approx 1.077 : 1)
    const height = Math.round(size)
    const width = Math.round(size * 1.077)
    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`object-contain ${className}`}
        priority={priority}
      />
    )
  }

  // Standalone square mark
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={`object-contain ${className}`}
      priority={priority}
    />
  )
}
