import { forwardRef } from 'react';
import type { IconProps } from '../types';

const Books = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M3.19043 4.28952C3.19043 3.99739 3.30648 3.71723 3.51304 3.51066C3.71961 3.3041 3.99977 3.18805 4.2919 3.18805H6.49485C6.78697 3.18805 7.06714 3.3041 7.2737 3.51066C7.48027 3.71723 7.59632 3.99739 7.59632 4.28952V19.7101C7.59632 20.0023 7.48027 20.2824 7.2737 20.489C7.06714 20.6956 6.78697 20.8116 6.49485 20.8116H4.2919C3.99977 20.8116 3.71961 20.6956 3.51304 20.489C3.30648 20.2824 3.19043 20.0023 3.19043 19.7101V4.28952Z" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.59521 4.28952C7.59521 3.99739 7.71126 3.71723 7.91783 3.51066C8.12439 3.3041 8.40456 3.18805 8.69669 3.18805H10.8996C11.1918 3.18805 11.4719 3.3041 11.6785 3.51066C11.8851 3.71723 12.0011 3.99739 12.0011 4.28952V19.7101C12.0011 20.0023 11.8851 20.2824 11.6785 20.489C11.4719 20.6956 11.1918 20.8116 10.8996 20.8116H8.69669C8.40456 20.8116 8.12439 20.6956 7.91783 20.489C7.71126 20.2824 7.59521 20.0023 7.59521 19.7101V4.28952Z" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.19043 7.59528H7.59632" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.59521 16.4053H12.0011" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.8851 3.80546L15.2907 3.22168C15.9097 3.07298 16.5387 3.43096 16.7028 4.02796L20.7727 18.8075C20.8445 19.0781 20.8127 19.3657 20.6836 19.6141C20.5544 19.8624 20.3372 20.0536 20.0744 20.1502L19.9279 20.1954L17.5223 20.7791C16.9033 20.9278 16.2743 20.5699 16.1102 19.9729L12.0403 5.19331C11.9685 4.92274 12.0003 4.6351 12.1294 4.38674C12.2586 4.13838 12.4758 3.94719 12.7386 3.85062L12.8851 3.80546Z" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.1035 8.69675L17.5094 7.59528" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.3091 16.4066L19.6302 15.3271" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Books.displayName = 'Books';
export default Books;
