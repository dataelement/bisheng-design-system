import { forwardRef } from 'react';
import type { IconProps } from '../types';

const Magic = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M10.0503 4.05025L12.1716 6.17157M15 2V5V2ZM19.9497 4.05025L17.8284 6.17157L19.9497 4.05025ZM22 9H19H22ZM19.9497 13.9497L17.8284 11.8284L19.9497 13.9497ZM15 16V13V16ZM10.0503 13.9497L12.1716 11.8284L10.0503 13.9497ZM8 9H11H8Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.7928 9.20709L2.77197 21.2279" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Magic.displayName = 'Magic';
export default Magic;
