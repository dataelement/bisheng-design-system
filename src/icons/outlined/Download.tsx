import { forwardRef } from 'react';
import type { IconProps } from '../types';

const Download = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M3 12.0042V21H21V12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.5 11.5L12 16L7.5 11.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.9958 3V16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Download.displayName = 'Download';
export default Download;
