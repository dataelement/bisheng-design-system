import { forwardRef } from 'react';
import type { IconProps } from '../types';

const FilePdf = forwardRef<SVGSVGElement, IconProps>(
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
      <g clipPath="url(#clip0_329964_710)">
<path d="M24 0H0V24H24V0Z" fill="white" fillOpacity="0.01"/>
<path d="M24 0H0V24H24V0Z" fill="white" fillOpacity="0.01"/>
<path d="M5 2H15L20 7V21C20 21.5523 19.5523 22 19 22H5C4.44771 22 4 21.5523 4 21V3C4 2.44771 4.44771 2 5 2Z" stroke="#333333" strokeWidth="2" strokeLinejoin="round"/>
<path fillRule="evenodd" clipRule="evenodd" d="M9 9H15V12.9958L9.00415 13L9 9Z" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 9V17" stroke="#333333" strokeWidth="2" strokeLinecap="round"/>
</g>
<defs>
<clipPath id="clip0_329964_710">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
    </svg>
  )
);

FilePdf.displayName = 'FilePdf';
export default FilePdf;
