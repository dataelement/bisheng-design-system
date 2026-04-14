import { forwardRef } from 'react';
import type { IconProps } from '../types';

const PlayerPause = forwardRef<SVGSVGElement, IconProps>(
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
      <g clipPath="url(#clip0_2_24)">
<path d="M8.26309 3.2807H5.7717C5.08372 3.2807 4.526 3.83842 4.526 4.5264V19.4747C4.526 20.1627 5.08372 20.7204 5.7717 20.7204H8.26309C8.95106 20.7204 9.50878 20.1627 9.50878 19.4747V4.5264C9.50878 3.83842 8.95106 3.2807 8.26309 3.2807Z" stroke="#333333" strokeWidth="1.71429" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.2273 3.2807H15.7359C15.048 3.2807 14.4902 3.83842 14.4902 4.5264V19.4747C14.4902 20.1627 15.048 20.7204 15.7359 20.7204H18.2273C18.9153 20.7204 19.473 20.1627 19.473 19.4747V4.5264C19.473 3.83842 18.9153 3.2807 18.2273 3.2807Z" stroke="#333333" strokeWidth="1.71429" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_2_24">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
    </svg>
  )
);

PlayerPause.displayName = 'PlayerPause';
export default PlayerPause;
