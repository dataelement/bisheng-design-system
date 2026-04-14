import { forwardRef } from 'react';
import type { IconProps } from '../types';

const PlayerPause = forwardRef<SVGSVGElement, IconProps>(
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
      <path d="M8.26296 3.2807H5.77157C5.0836 3.2807 4.52588 3.83842 4.52588 4.5264V19.4747C4.52588 20.1627 5.0836 20.7204 5.77157 20.7204H8.26296C8.95094 20.7204 9.50866 20.1627 9.50866 19.4747V4.5264C9.50866 3.83842 8.95094 3.2807 8.26296 3.2807Z" strokeWidth="1.71429" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.2273 3.2807H15.7359C15.048 3.2807 14.4902 3.83842 14.4902 4.5264V19.4747C14.4902 20.1627 15.048 20.7204 15.7359 20.7204H18.2273C18.9153 20.7204 19.473 20.1627 19.473 19.4747V4.5264C19.473 3.83842 18.9153 3.2807 18.2273 3.2807Z" strokeWidth="1.71429" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);

PlayerPause.displayName = 'PlayerPause';
export default PlayerPause;
