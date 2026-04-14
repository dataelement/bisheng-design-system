import { forwardRef } from 'react';
import type { IconProps } from '../types';

const Book = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M3.5 18.5C3.5 14.6484 3.5 5.5 3.5 5.5C3.5 3.84315 4.84315 2.5 6.5 2.5H17.5V15.5C17.5 15.5 9.1163 15.5 6.5 15.5C4.85 15.5 3.5 16.8421 3.5 18.5Z" strokeWidth="2" strokeLinejoin="round"/>
<path d="M17.5 15.5C17.5 15.5 7.07685 15.5 6.5 15.5C4.84315 15.5 3.5 16.8432 3.5 18.5C3.5 20.1568 4.84315 21.5 6.5 21.5C7.60455 21.5 12.9379 21.5 20.5 21.5V3.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 18.5H17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Book.displayName = 'Book';
export default Book;
