import { forwardRef } from 'react';
import type { IconProps } from '../types';

const Refresh = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M21 4V12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 12V20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 12C3 16.9706 7.02945 21 12 21C14.4278 21 16.6311 20.0387 18.25 18.476" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21.0004 12C21.0004 7.02945 16.9709 3 12.0004 3C9.45761 3 7.16116 4.05448 5.52441 5.75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Refresh.displayName = 'Refresh';
export default Refresh;
