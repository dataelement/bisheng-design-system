import { forwardRef } from 'react';
import type { IconProps } from '../types';

const Search = forwardRef<SVGSVGElement, IconProps>(
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
      <g clipPath="url(#clip0_2_42)">
<path d="M24 0H0V24H24V0Z" fill="white" fillOpacity="0.01"/>
<path d="M10.5 19C15.1944 19 19 15.1944 19 10.5C19 5.8056 15.1944 2 10.5 2C5.8056 2 2 5.8056 2 10.5C2 15.1944 5.8056 19 10.5 19Z" stroke="#333333" strokeWidth="2" strokeLinejoin="round"/>
<path d="M16.6108 16.6109L20.8535 20.8535" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_2_42">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
    </svg>
  )
);

Search.displayName = 'Search';
export default Search;
