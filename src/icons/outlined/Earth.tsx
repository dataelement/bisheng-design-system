import { forwardRef } from 'react';
import type { IconProps } from '../types';

const Earth = forwardRef<SVGSVGElement, IconProps>(
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
      <g clipPath="url(#clip0_329964_749)">
<path d="M24 0H0V24H24V0Z" fill="white" fillOpacity="0.01"/>
<path fillRule="evenodd" clipRule="evenodd" d="M12 22C17.5229 22 22 17.5229 22 12C22 6.47715 17.5229 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5229 6.47715 22 12 22Z" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 12H22" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path fillRule="evenodd" clipRule="evenodd" d="M12 22C14.2092 22 16 17.5229 16 12C16 6.47715 14.2092 2 12 2C9.79085 2 8 6.47715 8 12C8 17.5229 9.79085 22 12 22Z" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.92896 5.07104C6.7386 6.88069 9.2386 7.99999 12 7.99999C14.7615 7.99999 17.2615 6.88069 19.0711 5.07104" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.0711 18.9289C17.2615 17.1193 14.7615 16 12 16C9.2386 16 6.7386 17.1193 4.92896 18.9289" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_329964_749">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
    </svg>
  )
);

Earth.displayName = 'Earth';
export default Earth;
