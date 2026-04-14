import { forwardRef } from 'react';
import type { IconProps } from '../types';

const ThumbsDown = forwardRef<SVGSVGElement, IconProps>(
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
      <g clipPath="url(#clip0_2_28)">
<path d="M24 0H0V24H24V0Z" fill="white" fillOpacity="0.01"/>
<path d="M24 0H0V24H24V0Z" fill="white" fillOpacity="0.01"/>
<path d="M10.1898 14.7V18.3C10.1898 19.7911 11.3986 21 12.8898 21L16.4898 12.9V2.99999H6.03175C5.1342 2.98985 4.36634 3.64253 4.23176 4.52999L2.98976 12.63C2.91051 13.1521 3.06455 13.6827 3.41109 14.0812C3.75762 14.4797 4.26168 14.706 4.78976 14.7H10.1898Z" stroke="#333333" strokeWidth="2" strokeLinejoin="round"/>
<path d="M16.4897 2.99999H18.8927C19.9471 2.98135 20.8484 3.75501 20.9897 4.79999V11.1C20.8484 12.145 19.9471 13.0186 18.8927 13H16.4897V2.99999Z" stroke="#333333" strokeWidth="2" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_2_28">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
    </svg>
  )
);

ThumbsDown.displayName = 'ThumbsDown';
export default ThumbsDown;
