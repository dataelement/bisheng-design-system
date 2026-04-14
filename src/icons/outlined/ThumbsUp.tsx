import { forwardRef } from 'react';
import type { IconProps } from '../types';

const ThumbsUp = forwardRef<SVGSVGElement, IconProps>(
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
      <g clipPath="url(#clip0_329962_554)">
<path d="M24 0H0V24H24V0Z" fill="white" fillOpacity="0.01"/>
<path d="M24 0H0V24H24V0Z" fill="white" fillOpacity="0.01"/>
<path d="M13.8 9.3V5.7C13.8 4.20883 12.5912 3 11.1 3L7.5 11.1V21H17.958C18.8556 21.0102 19.6234 20.3574 19.758 19.47L21 11.37C21.0793 10.8478 20.9252 10.3173 20.5786 9.91875C20.2321 9.52025 19.7281 9.294 19.2 9.3H13.8Z" stroke="#333333" strokeWidth="2" strokeLinejoin="round"/>
<path d="M7.5 11.0001H5.097C4.04266 10.9815 3.14135 11.8548 3 12.8998V19.1998C3.14135 20.2448 4.04266 21.0185 5.097 20.9998H7.5V11.0001Z" stroke="#333333" strokeWidth="2" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_329962_554">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
    </svg>
  )
);

ThumbsUp.displayName = 'ThumbsUp';
export default ThumbsUp;
