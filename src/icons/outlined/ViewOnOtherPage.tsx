import { forwardRef } from 'react';
import type { IconProps } from '../types';

const ViewOnOtherPage = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M3 5.46338L3 19.4634C3 20.5679 3.89543 21.4634 5 21.4634L19 21.4634C20.1046 21.4634 21 20.5679 21 19.4634L21 5.46338C21 4.35881 20.1046 3.46338 19 3.46338L5 3.46338C3.89543 3.46338 3 4.35881 3 5.46338Z" stroke="#333333" strokeWidth="2" strokeLinejoin="round"/>
<path d="M3 16.4634L6 16.4634C7.10457 16.4634 8 17.3588 8 18.4634L8 21.4634" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 7.46338L17 7.46338L17 12.4634" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 7.46338L12 12.4634" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

ViewOnOtherPage.displayName = 'ViewOnOtherPage';
export default ViewOnOtherPage;
