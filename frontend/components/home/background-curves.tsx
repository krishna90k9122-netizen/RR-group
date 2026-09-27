export function BackgroundCurves({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <svg
        className="absolute left-0 top-0 h-full w-full opacity-40"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M-100 200 C 300 120, 600 350, 1100 180 C 1300 110, 1500 240, 1600 220"
          stroke="#E8C98A"
          strokeWidth="1.2"
          strokeDasharray="4 6"
          opacity="0.55"
        />
        <path
          d="M-50 480 C 250 580, 750 320, 1200 460 C 1400 520, 1550 410, 1650 430"
          stroke="#1769FF"
          strokeWidth="0.8"
          opacity="0.18"
        />
        <path
          d="M-80 750 C 400 680, 800 820, 1300 700 C 1450 660, 1580 720, 1680 690"
          stroke="#E8C98A"
          strokeWidth="1"
          opacity="0.35"
        />
      </svg>
    </div>
  )
}
