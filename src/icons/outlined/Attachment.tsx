import { forwardRef } from 'react';
import type { IconProps } from '../types';

const Attachment = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M12.3535 4.78247L4.92886 12.2071C3.1715 13.9644 3.1715 16.8137 4.92886 18.571C6.68621 20.3284 9.53546 20.3284 11.2928 18.571L20.1317 9.73224C21.3032 8.56064 21.3032 6.66114 20.1317 5.48959C18.9601 4.318 17.0606 4.318 15.889 5.48959L7.05016 14.3284C6.46441 14.9142 6.46441 15.8639 7.05016 16.4497C7.63596 17.0355 8.58571 17.0355 9.17151 16.4497L16.5961 9.02509" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

Attachment.displayName = 'Attachment';
export default Attachment;
