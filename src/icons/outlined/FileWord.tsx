import { forwardRef } from 'react';
import type { IconProps } from '../types';

const FileWord = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M5 2H15L20 7V21C20 21.5523 19.5523 22 19 22H5C4.44771 22 4 21.5523 4 21V3C4 2.44771 4.44771 2 5 2Z" strokeWidth="2" strokeLinejoin="round"/>
<path d="M8.00415 10L9.50415 17L12.0042 12L14.5042 17L16.0042 10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

FileWord.displayName = 'FileWord';
export default FileWord;
