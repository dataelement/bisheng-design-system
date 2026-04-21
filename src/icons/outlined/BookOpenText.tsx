import { forwardRef } from 'react';
import type { IconProps } from '../types';

const BookOpenText = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M12 8C12 6.93913 11.5786 5.92172 10.8284 5.17157C10.0783 4.42143 9.06087 4 8 4H3.5C2.67157 4 2 4.67157 2 5.5V17.5C2 18.3284 2.67157 19 3.5 19H9C9.79565 19 10.5587 19.3161 11.1213 19.8787C11.6839 20.4413 12 21.2044 12 22M12 8V22M12 8C12 6.93913 12.4214 5.92172 13.1716 5.17157C13.9217 4.42143 14.9391 4 16 4H20.5C21.3284 4 22 4.67157 22 5.5V17.5C22 18.3284 21.3284 19 20.5 19H15C14.2044 19 13.4413 19.3161 12.8787 19.8787C12.3161 20.4413 12 21.2044 12 22M6 9H8M6 13H8M16 9H18M16 13H18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

BookOpenText.displayName = 'BookOpenText';
export default BookOpenText;
