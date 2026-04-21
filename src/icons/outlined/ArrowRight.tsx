import { forwardRef } from 'react';
import type { IconProps } from '../types';

const ArrowRight = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', strokeWidth = 2, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <g clipPath="url(#clip0_330024_24)">
<path d="M24 0H0V24H24V0Z" fillOpacity="0.01"/>
<path d="M18 12.0042H6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 6L18 12L12 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_330024_24">
<rect width="24" height="24"/>
</clipPath>
</defs>
    </svg>
  )
);

ArrowRight.displayName = 'ArrowRight';
export default ArrowRight;
