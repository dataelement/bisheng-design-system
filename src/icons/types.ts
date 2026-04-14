import type { SVGProps, Ref } from 'react';

export interface IconProps extends SVGProps<SVGSVGElement> {
  /** 图标尺寸，同时设置 width 和 height */
  size?: number | string;
  /** 图标颜色，默认 currentColor（colored 类型图标不支持此属性） */
  color?: string;
  /** 描边宽度，仅 outlined 类型生效 */
  strokeWidth?: number | string;
  ref?: Ref<SVGSVGElement>;
}
