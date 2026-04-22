type IconProps = {
  className?: string;
};

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        fill="#1877F2"
        d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12Z"
      />
      <path
        fill="#FFFFFF"
        d="M13.675 19v-6.144h2.071l.31-2.395h-2.38V8.932c0-.694.193-1.167 1.188-1.167H16.13V5.623c-.219-.029-.972-.094-1.849-.094-1.83 0-3.082 1.117-3.082 3.169v1.763H9.125v2.395h2.074V19h2.476Z"
      />
    </svg>
  );
}
