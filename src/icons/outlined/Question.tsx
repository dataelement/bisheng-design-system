import { forwardRef } from 'react';
import type { IconProps } from '../types';

const Question = forwardRef<SVGSVGElement, IconProps>(
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
      <g clipPath="url(#clip0_330021_12)">
<circle cx="12" cy="12" r="9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.26367 9.26418C9.26367 8.71976 9.51599 8.19763 9.96512 7.81266C10.4142 7.4277 11.0234 7.21143 11.6586 7.21143H12.3428C12.978 7.21143 13.5871 7.4277 14.0362 7.81266C14.4854 8.19763 14.7377 8.71976 14.7377 9.26418C14.7629 9.70844 14.643 10.1488 14.3962 10.5191C14.1494 10.8893 13.789 11.1693 13.3692 11.3169C12.9494 11.5138 12.589 11.8871 12.3421 12.3807C12.0953 12.8744 11.9755 13.4616 12.0007 14.0539" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 16.7909V16.7986" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_330021_12">
<rect width="24" height="24"/>
</clipPath>
</defs>
    </svg>
  )
);

Question.displayName = 'Question';
export default Question;
