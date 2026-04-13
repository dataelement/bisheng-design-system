import React from 'react'
import { PageHeader, DemoSection, PropsTable, type PropDef } from '../components/DemoComponents'
import { Button, SingleIconButton } from '../components/Button'
import { Plus, Trash2, ArrowRight, Download, Search, Settings, Copy, Heart, Star, Edit3, MoreHorizontal, RefreshCw, X, Bell } from 'lucide-react'

const singleIconButtonProps: PropDef[] = [
  { name: 'icon', type: 'ReactNode', required: true, desc: '按钮内的图标元素' },
  { name: 'variant', type: "'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'danger-outline'", default: "'ghost'", desc: '按钮变体，控制外观风格' },
  { name: 'size', type: "'mini' | 'small' | 'medium' | 'large'", default: "'medium'", desc: '按钮尺寸 — mini(24px) / small(28px) / medium(32px) / large(40px)' },
  { name: 'aria-label', type: 'string', required: true, desc: '无障碍标签，纯图标按钮必须提供' },
  { name: 'loading', type: 'boolean', default: 'false', desc: '加载状态，显示 loading 动画并禁用点击' },
  { name: 'disabled', type: 'boolean', default: 'false', desc: '禁用状态' },
  { name: 'asChild', type: 'boolean', default: 'false', desc: '使用 Radix Slot 渲染子元素' },
]

const props: PropDef[] = [
  { name: 'variant', type: "'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'danger-outline'", default: "'primary'", desc: '按钮变体，控制外观风格' },
  { name: 'size', type: "'mini' | 'small' | 'medium' | 'large'", default: "'medium'", desc: '按钮尺寸' },
  { name: 'loading', type: 'boolean', default: 'false', desc: '加载状态，显示 loading 动画并禁用点击' },
  { name: 'disabled', type: 'boolean', default: 'false', desc: '禁用状态' },
  { name: 'block', type: 'boolean', default: 'false', desc: '是否充满父容器宽度' },
  { name: 'leftIcon', type: 'ReactNode', desc: '左侧图标' },
  { name: 'rightIcon', type: 'ReactNode', desc: '右侧图标' },
  { name: 'iconOnly', type: 'boolean', default: 'false', desc: '纯图标按钮，不显示文字，形状变为正方形' },
  { name: 'onClick', type: '(e: MouseEvent) => void', desc: '点击事件回调' },
]

export default function ButtonPage() {
  const [loading, setLoading] = React.useState(false)
  const simulate = () => { setLoading(true); setTimeout(() => setLoading(false), 2000) }

  return (
    <div>
      <PageHeader
        badge="通用组件"
        title="Button 按钮"
        desc="按钮用于触发一个即时操作。BISHENG 中的按钮分为主要操作、次要操作、文字操作等类型，覆盖从强调到低调的全部场景。合理使用按钮层级有助于引导用户完成操作流程。"
      />

      <DemoSection
        id="variant"
        title="按钮类型"
        desc="按钮按照重要程度分为主要按钮（Primary）、次要按钮（Secondary）、线框按钮（Outline）、幽灵按钮（Ghost）。危险操作使用 Danger 变体，保持用户的注意力。"
        preview={<>
          <Button variant="primary">主要按钮</Button>
          <Button variant="secondary">次要按钮</Button>
          <Button variant="outline">线框按钮</Button>
          <Button variant="ghost">幽灵按钮</Button>
          <Button variant="danger">危险按钮</Button>
          <Button variant="danger-outline">危险线框</Button>
        </>}
        code={`<Button variant="primary">主要按钮</Button>
<Button variant="secondary">次要按钮</Button>
<Button variant="outline">线框按钮</Button>
<Button variant="ghost">幽灵按钮</Button>
<Button variant="danger">危险按钮</Button>
<Button variant="danger-outline">危险线框</Button>`}
      />

      <DemoSection
        id="size"
        title="按钮尺寸"
        desc="提供 mini、small、medium（默认）、large 四种尺寸，适配不同的界面密度需求。工具栏、表格操作建议使用 small/mini，普通表单使用 medium，页面主要 CTA 使用 large。"
        preview={<>
          <Button size="mini">迷你 mini</Button>
          <Button size="small">小号 small</Button>
          <Button size="medium">默认 medium</Button>
          <Button size="large">大号 large</Button>
        </>}
        code={`<Button size="mini">迷你 mini</Button>
<Button size="small">小号 small</Button>
<Button size="medium">默认 medium</Button>
<Button size="large">大号 large</Button>`}
      />

      <DemoSection
        id="icon"
        title="图标按钮"
        desc="可在按钮左侧或右侧添加图标增强语义。纯图标按钮（iconOnly）常用于工具栏、操作列等空间受限的场景，建议配合 Tooltip 使用以保持可访问性。"
        preview={<>
          <Button leftIcon={<Plus />}>新建</Button>
          <Button variant="outline" rightIcon={<ArrowRight />}>了解更多</Button>
          <Button variant="outline" leftIcon={<Download />}>导出</Button>
          <SingleIconButton variant="danger-outline" size="medium" icon={<Trash2 />} aria-label="删除" />
        </>}
        code={`import { Plus, ArrowRight, Download, Trash2 } from 'lucide-react'

<Button leftIcon={<Plus />}>新建</Button>
<Button variant="outline" rightIcon={<ArrowRight />}>了解更多</Button>
<Button variant="outline" leftIcon={<Download />}>导出</Button>
<SingleIconButton variant="danger-outline" icon={<Trash2 />} aria-label="删除" />`}
      />

      <DemoSection
        id="state"
        title="加载 & 禁用状态"
        desc="按钮的 loading 状态用于需要等待服务端响应的异步操作，自动禁止重复点击。disabled 状态用于条件不满足时的静态禁用。"
        preview={<>
          <Button loading={loading} onClick={simulate}>
            {loading ? '提交中' : '点击提交'}
          </Button>
          <Button loading>正在处理</Button>
          <Button disabled>已禁用</Button>
          <Button variant="outline" disabled>禁用线框</Button>
        </>}
        code={`const [loading, setLoading] = useState(false)

<Button loading={loading} onClick={() => {
  setLoading(true)
  setTimeout(() => setLoading(false), 2000)
}}>
  {loading ? '提交中' : '点击提交'}
</Button>
<Button disabled>已禁用</Button>`}
      />

      <DemoSection
        id="block"
        title="块级按钮"
        desc="使用 block 属性可让按钮占满容器全宽，常用于移动端、表单底部提交区域或强引导场景。"
        preview={<div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Button block>块级主要按钮</Button>
          <Button variant="outline" block>块级线框按钮</Button>
        </div>}
        code={`<Button block>块级主要按钮</Button>
<Button variant="outline" block>块级线框按钮</Button>`}
      />

      {/* ========== SingleIconButton ========== */}

      <div style={{ marginTop: 48 }}>
        <h2 style={{
          fontSize: 'var(--font-size-xl)',
          fontWeight: 'var(--font-weight-semibold)',
          color: 'var(--text-primary)',
          marginBottom: 8,
        }}>
          SingleIconButton 纯图标按钮
        </h2>
        <p style={{
          fontSize: 'var(--font-size-base)',
          color: 'var(--text-secondary)',
          marginBottom: 24,
          lineHeight: 'var(--line-height-14)',
        }}>
          专为纯图标场景设计的正方形按钮，常用于工具栏、操作列、面板标题栏等空间受限的场景。必须提供 aria-label 以保障可访问性。
        </p>
      </div>

      <DemoSection
        id="icon-btn-variant"
        title="图标按钮类型"
        desc="支持与普通按钮一致的变体系统：Primary、Secondary、Outline、Ghost、Danger、Danger-Outline，满足不同层级的操作场景。"
        preview={<>
          <SingleIconButton variant="primary" icon={<Plus />} aria-label="新建" />
          <SingleIconButton variant="secondary" icon={<Search />} aria-label="搜索" />
          <SingleIconButton variant="outline" icon={<Settings />} aria-label="设置" />
          <SingleIconButton variant="ghost" icon={<MoreHorizontal />} aria-label="更多" />
          <SingleIconButton variant="danger" icon={<Trash2 />} aria-label="删除" />
          <SingleIconButton variant="danger-outline" icon={<X />} aria-label="关闭" />
        </>}
        code={`import { Plus, Search, Settings, MoreHorizontal, Trash2, X } from 'lucide-react'

<SingleIconButton variant="primary" icon={<Plus />} aria-label="新建" />
<SingleIconButton variant="secondary" icon={<Search />} aria-label="搜索" />
<SingleIconButton variant="outline" icon={<Settings />} aria-label="设置" />
<SingleIconButton variant="ghost" icon={<MoreHorizontal />} aria-label="更多" />
<SingleIconButton variant="danger" icon={<Trash2 />} aria-label="删除" />
<SingleIconButton variant="danger-outline" icon={<X />} aria-label="关闭" />`}
      />

      <DemoSection
        id="icon-btn-size"
        title="图标按钮尺寸"
        desc="提供 mini（24px）、small（28px）、medium（32px）、large（40px）四种尺寸。图标会自动适配对应尺寸。"
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {/* Primary 尺寸 */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ width: 80, fontSize: 'var(--font-size-xs)', color: 'var(--text-secondary)' }}>Primary</span>
              <SingleIconButton variant="primary" size="mini" icon={<Plus />} aria-label="新建" />
              <SingleIconButton variant="primary" size="small" icon={<Plus />} aria-label="新建" />
              <SingleIconButton variant="primary" size="medium" icon={<Plus />} aria-label="新建" />
              <SingleIconButton variant="primary" size="large" icon={<Plus />} aria-label="新建" />
            </div>
            {/* Secondary 尺寸 */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ width: 80, fontSize: 'var(--font-size-xs)', color: 'var(--text-secondary)' }}>Secondary</span>
              <SingleIconButton variant="secondary" size="mini" icon={<Search />} aria-label="搜索" />
              <SingleIconButton variant="secondary" size="small" icon={<Search />} aria-label="搜索" />
              <SingleIconButton variant="secondary" size="medium" icon={<Search />} aria-label="搜索" />
              <SingleIconButton variant="secondary" size="large" icon={<Search />} aria-label="搜索" />
            </div>
            {/* Outline 尺寸 */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ width: 80, fontSize: 'var(--font-size-xs)', color: 'var(--text-secondary)' }}>Outline</span>
              <SingleIconButton variant="outline" size="mini" icon={<Copy />} aria-label="复制" />
              <SingleIconButton variant="outline" size="small" icon={<Copy />} aria-label="复制" />
              <SingleIconButton variant="outline" size="medium" icon={<Copy />} aria-label="复制" />
              <SingleIconButton variant="outline" size="large" icon={<Copy />} aria-label="复制" />
            </div>
            {/* Ghost 尺寸 */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ width: 80, fontSize: 'var(--font-size-xs)', color: 'var(--text-secondary)' }}>Ghost</span>
              <SingleIconButton variant="ghost" size="mini" icon={<Star />} aria-label="收藏" />
              <SingleIconButton variant="ghost" size="small" icon={<Star />} aria-label="收藏" />
              <SingleIconButton variant="ghost" size="medium" icon={<Star />} aria-label="收藏" />
              <SingleIconButton variant="ghost" size="large" icon={<Star />} aria-label="收藏" />
            </div>
            {/* Danger 尺寸 */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ width: 80, fontSize: 'var(--font-size-xs)', color: 'var(--text-secondary)' }}>Danger</span>
              <SingleIconButton variant="danger" size="mini" icon={<Trash2 />} aria-label="删除" />
              <SingleIconButton variant="danger" size="small" icon={<Trash2 />} aria-label="删除" />
              <SingleIconButton variant="danger" size="medium" icon={<Trash2 />} aria-label="删除" />
              <SingleIconButton variant="danger" size="large" icon={<Trash2 />} aria-label="删除" />
            </div>
          </div>
        }
        code={`// variant × size 矩阵
<SingleIconButton variant="primary" size="mini" icon={<Plus />} aria-label="新建" />
<SingleIconButton variant="primary" size="small" icon={<Plus />} aria-label="新建" />
<SingleIconButton variant="primary" size="medium" icon={<Plus />} aria-label="新建" />
<SingleIconButton variant="primary" size="large" icon={<Plus />} aria-label="新建" />`}
      />

      <DemoSection
        id="icon-btn-state"
        title="图标按钮状态"
        desc="同样支持 loading 和 disabled 状态。loading 时显示旋转动画并自动禁用交互。"
        preview={<>
          <SingleIconButton variant="primary" icon={<RefreshCw />} loading aria-label="刷新" />
          <SingleIconButton variant="outline" icon={<RefreshCw />} loading aria-label="刷新" />
          <SingleIconButton variant="ghost" icon={<Bell />} loading aria-label="通知" />
          <SingleIconButton variant="primary" icon={<Edit3 />} disabled aria-label="编辑" />
          <SingleIconButton variant="outline" icon={<Heart />} disabled aria-label="喜欢" />
          <SingleIconButton variant="ghost" icon={<Star />} disabled aria-label="收藏" />
        </>}
        code={`// Loading
<SingleIconButton variant="primary" icon={<RefreshCw />} loading aria-label="刷新" />
<SingleIconButton variant="outline" icon={<RefreshCw />} loading aria-label="刷新" />

// Disabled
<SingleIconButton variant="primary" icon={<Edit3 />} disabled aria-label="编辑" />
<SingleIconButton variant="outline" icon={<Heart />} disabled aria-label="喜欢" />`}
      />

      <PropsTable props={props} />

      <PropsTable props={singleIconButtonProps} />
    </div>
  )
}
