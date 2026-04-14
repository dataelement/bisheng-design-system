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
      <path d="M10.1896 14.7V18.3C10.1896 19.7911 11.3985 21 12.8896 21L16.4896 12.9V2.99999H6.03163C5.13408 2.98985 4.36622 3.64253 4.23163 4.52999L2.98963 12.63C2.91038 13.1521 3.06443 13.6827 3.41096 14.0812C3.7575 14.4797 4.26156 14.706 4.78963 14.7H10.1896Z" stroke="#333333" strokeWidth="2" strokeLinejoin="round"/>
<path d="M16.4897 3.00002H18.8927C19.9471 2.98138 20.8484 3.75504 20.9897 4.80002V11.1C20.8484 12.145 19.9471 13.0187 18.8927 13H16.4897V3.00002Z" stroke="#333333" strokeWidth="2" strokeLinejoin="round"/>
    </svg>
  )
);

ThumbsDown.displayName = 'ThumbsDown';
export default ThumbsDown;
