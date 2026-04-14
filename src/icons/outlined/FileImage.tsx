import { forwardRef } from 'react';
import type { IconProps } from '../types';

const FileImage = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M5 22H19C19.5523 22 20 21.5523 20 21V7L15 2H5C4.44771 2 4 2.44771 4 3V21C4 21.5523 4.44771 22 5 22Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 2L20 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 10.5C10.1046 10.5 11 9.60457 11 8.5C11 7.39543 10.1046 6.5 9 6.5C7.89543 6.5 7 7.39543 7 8.5C7 9.60457 7.89543 10.5 9 10.5Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.5 14V18.5H16.5V10.5L11.7447 15.75L7.5 14Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

FileImage.displayName = 'FileImage';
export default FileImage;
