import { forwardRef } from 'react';
import type { IconProps } from '../types';

const VolumeNotice = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M12 3V21C8.5 21 5.89925 16.4195 5.89925 16.4195H3C2.44771 16.4195 2 15.9718 2 15.4195V8.5054C2 7.9531 2.44771 7.5054 3 7.5054H5.89925C5.89925 7.5054 8.5 3 12 3Z" stroke="#333333" strokeWidth="2" strokeLinejoin="round"/>
<path d="M16 7.5C16.3116 7.77825 16.5941 8.08985 16.8421 8.4294C17.5694 9.4252 18 10.6611 18 12C18 13.3273 17.5768 14.5534 16.8609 15.5447C16.6084 15.8943 16.3196 16.2147 16 16.5" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.1179 20.5928C20.0418 18.8476 22 15.6525 22 12C22 8.40422 20.1021 5.25172 17.2535 3.4895" stroke="#333333" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
);

VolumeNotice.displayName = 'VolumeNotice';
export default VolumeNotice;
