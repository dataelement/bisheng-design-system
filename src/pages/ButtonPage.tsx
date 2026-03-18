import React from 'react'
import { PageHeader, DemoSection, PropsTable, type PropDef } from '../components/DemoComponents'
import { Button } from '../components/Button'
import { Plus, Trash2, ArrowRight, Download } from 'lucide-react'

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
          <Button variant="danger-outline" iconOnly size="medium"><Trash2 /></Button>
        </>}
        code={`import { Plus, ArrowRight, Download, Trash2 } from 'lucide-react'

<Button leftIcon={<Plus />}>新建</Button>
<Button variant="outline" rightIcon={<ArrowRight />}>了解更多</Button>
<Button variant="outline" leftIcon={<Download />}>导出</Button>
<Button variant="danger-outline" iconOnly><Trash2 /></Button>`}
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

      <PropsTable props={props} />
    </div>
  )
}
