import { forwardRef } from 'react';
import type { IconProps } from '../types';

const Edit = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M3.5 21H21.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.5 13.36V17H9.1586L19.5 6.65405L15.8476 3L5.5 13.36Z" strokeWidth="2" strokeLinejoin="round"/>
    </svg>
  )
);

Edit.displayName = 'Edit';
export default Edit;
