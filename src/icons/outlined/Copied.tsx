import { forwardRef } from 'react';
import type { IconProps } from '../types';

const Copied = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M6.50024 6.2158V3.90625C6.50024 3.1296 7.12984 2.5 7.90649 2.5H20.094C20.8706 2.5 21.5002 3.1296 21.5002 3.90625V16.0938C21.5002 16.8704 20.8706 17.5 20.094 17.5H17.7584" stroke="#333333" strokeWidth="1.71429" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.0935 6.5H3.90601C3.12936 6.5 2.49976 7.1296 2.49976 7.90625V20.0938C2.49976 20.8704 3.12936 21.5 3.90601 21.5H16.0935C16.8702 21.5 17.4998 20.8704 17.4998 20.0938V7.90625C17.4998 7.1296 16.8702 6.5 16.0935 6.5Z" stroke="#333333" strokeWidth="1.71429" strokeLinejoin="round"/>
<path d="M6.49878 14.4244L8.92315 16.8487L13.7719 12" stroke="#333333" strokeWidth="1.71429" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Copied.displayName = 'Copied';
export default Copied;
