import { forwardRef } from 'react';
import type { IconProps } from '../types';

const ApiApp = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M9 11.9686V5C9 3.34315 10.3432 2 12 2C13.6568 2 15 3.34315 15 5V6.00285" strokeWidth="2" strokeLinecap="round"/>
<path d="M15 12.0018V19C15 20.6569 13.6568 22 12 22C10.3432 22 9 20.6569 9 19V17.985" strokeWidth="2" strokeLinecap="round"/>
<path d="M12 15H4.99207C3.33959 15 2 13.6568 2 12C2 10.3432 3.33959 9 4.99207 9H5.9943" strokeWidth="2" strokeLinecap="round"/>
<path d="M12 9H18.9944C20.6544 9 22 10.3432 22 12C22 13.6568 20.6544 15 18.9944 15H18.0331" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
);

ApiApp.displayName = 'ApiApp';
export default ApiApp;
