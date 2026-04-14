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
      <g clipPath="url(#clip0_2_38)">
<path d="M24 0H0V24H24V0Z" fill="white" fillOpacity="0.01"/>
<path d="M3.5 21H21.5" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.5 13.36V17H9.1586L19.5 6.65405L15.8476 3L5.5 13.36Z" stroke="#333333" strokeWidth="2" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_2_38">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
    </svg>
  )
);

Edit.displayName = 'Edit';
export default Edit;
