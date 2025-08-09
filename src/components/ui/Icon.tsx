import React from 'react';

type IconProps = {
  children: React.ReactNode;
  size?: number;
  className?: string;
  decorative?: boolean;
};

export default function Icon({ children, size = 24, className, decorative = true }: IconProps) {
  return (
    <span
      aria-hidden={decorative}
      className={className}
      style={{ width: size, height: size, lineHeight: 0, display: 'inline-flex' }}
    >
      {children}
    </span>
  );
}


