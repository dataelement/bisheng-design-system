import { forwardRef } from 'react';
import type { IconProps } from '../types';

const Translate = forwardRef<SVGSVGElement, IconProps>(
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
      <g clipPath="url(#clip0_329964_806)">
<path d="M24 0H0V24H24V0Z" fill="white" fillOpacity="0.01"/>
<path d="M14.1428 18.5H19.8571M21 21L19.8571 18.5L21 21ZM13 21L14.1428 18.5L13 21ZM14.1428 18.5L17 12L19.8571 18.5H14.1428Z" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 3L8.5 4.5" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 5.5H14" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 8C5 8 5.89475 11.1304 8.1316 12.8695C10.3684 14.6087 14 16 14 16" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 5.5C12 5.5 11.1052 9.6087 8.8684 11.8913C6.6316 14.1739 3 16 3 16" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_329964_806">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
    </svg>
  )
);

Translate.displayName = 'Translate';
export default Translate;
