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
      <path d="M6.50012 6.2158V3.90625C6.50012 3.1296 7.12972 2.5 7.90637 2.5H20.0939C20.8705 2.5 21.5001 3.1296 21.5001 3.90625V16.0938C21.5001 16.8704 20.8705 17.5 20.0939 17.5H17.7583" stroke="#333333" strokeWidth="1.71429" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.0936 6.5H3.90613C3.12948 6.5 2.49988 7.1296 2.49988 7.90625V20.0938C2.49988 20.8704 3.12948 21.5 3.90613 21.5H16.0936C16.8703 21.5 17.4999 20.8704 17.4999 20.0938V7.90625C17.4999 7.1296 16.8703 6.5 16.0936 6.5Z" stroke="#333333" strokeWidth="1.71429" strokeLinejoin="round"/>
<path d="M6.4989 14.4244L8.92327 16.8487L13.772 12" stroke="#333333" strokeWidth="1.71429" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Copied.displayName = 'Copied';
export default Copied;
