import React from 'react'
import { PageHeader, DemoSection, PropsTable, type PropDef } from '../components/DemoComponents'
import { Input, Textarea } from '../components/Input'
import { Search, Eye, EyeOff, Mail, Lock } from 'lucide-react'

const props: PropDef[] = [
  { name: 'size', type: "'small' | 'medium' | 'large'", default: "'medium'", desc: '输入框尺寸' },
  { name: 'label', type: 'string', desc: '输入框标签' },
  { name: 'hint', type: 'string', desc: '描述文本，显示在标签右侧' },
  { name: 'feedback', type: 'string', desc: '验证反馈文本，显示在输入框下方' },
  { name: 'status', type: "'default' | 'error' | 'success'", default: "'default'", desc: '输入框状态，影响边框颜色和反馈文本颜色' },
  { name: 'prefix', type: 'ReactNode', desc: '前缀内容，通常为图标' },
  { name: 'suffix', type: 'ReactNode', desc: '后缀内容，通常为图标或操作按钮' },
  { name: 'required', type: 'boolean', desc: '是否必填，显示红色星号' },
  { name: 'disabled', type: 'boolean', desc: '禁用状态' },
  { name: 'placeholder', type: 'string', desc: '占位提示文本' },
]

export default function InputPage() {
  const [showPassword, setShowPassword] = React.useState(false)

  return (
    <div>
      <PageHeader
        badge="数据录入"
        title="Input 输入框"
        desc="输入框是最基础的表单控件，用于接收用户文本输入。支持多种尺寸、状态、前后缀配置，适用于搜索、登录表单、配置项等场景。"
      />

      <DemoSection
        id="basic"
        title="基础用法"
        desc="基础输入框，支持 placeholder 和各类 HTML input 属性。"
        preview={<>
          <div style={{ width: 280 }}>
            <Input placeholder="请输入内容" />
          </div>
          <div style={{ width: 280 }}>
            <Input label="用户名" placeholder="请输入用户名" required />
          </div>
        </>}
        previewCol
        code={`<Input placeholder="请输入内容" />
<Input label="用户名" placeholder="请输入用户名" required />`}
      />

      <DemoSection
        id="size"
        title="输入框尺寸"
        desc="三种尺寸满足不同密度需求，与 Button、Select 尺寸高度严格保持一致(Small=28px, Medium=32px, Large=40px)。"
        preview={<>
          <div style={{ width: 240 }}><Input size="small" placeholder="Small 尺寸" /></div>
          <div style={{ width: 240 }}><Input size="medium" placeholder="Medium 尺寸（默认）" /></div>
          <div style={{ width: 240 }}><Input size="large" placeholder="Large 尺寸" /></div>
        </>}
        previewCol
        code={`<Input size="small" placeholder="Small 尺寸" />
<Input size="medium" placeholder="Medium 尺寸（默认）" />
<Input size="large" placeholder="Large 尺寸" />`}
      />

      <DemoSection
        id="prefix"
        title="前缀 & 后缀"
        desc="通过 prefix 和 suffix 在输入框内嵌入图标或操作元素，常见于搜索框、密码框。内嵌内容不会占用独立空间，保持输入框紧凑。"
        preview={<>
          <div style={{ width: 280 }}>
            <Input prefix={<Search size={14} />} placeholder="搜索..." />
          </div>
          <div style={{ width: 280 }}>
            <Input
              label="密码"
              prefix={<Lock size={14} />}
              type={showPassword ? 'text' : 'password'}
              placeholder="请输入密码"
              suffix={
                <span style={{ cursor: 'pointer' }} onClick={() => setShowPassword(v => !v)}>
                  {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                </span>
              }
            />
          </div>
          <div style={{ width: 280 }}>
            <Input prefix={<Mail size={14} />} placeholder="请输入邮箱" type="email" />
          </div>
        </>}
        previewCol
        code={`<Input prefix={<Search size={14} />} placeholder="搜索..." />

<Input
  label="密码"
  prefix={<Lock size={14} />}
  type={showPassword ? 'text' : 'password'}
  suffix={
    <span onClick={() => setShowPassword(v => !v)}>
      {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
    </span>
  }
/>`}
      />

      <DemoSection
        id="status"
        title="输入状态"
        desc="通过 status 控制验证状态的视觉反馈。error 状态用于表单校验失败，success 状态用于实时验证通过，配合 feedback 文本提示详细信息。hint 作为描述文本显示在标签右侧。"
        preview={<>
          <div style={{ width: 280 }}>
            <Input label="正常状态" hint="选填" placeholder="请输入" />
          </div>
          <div style={{ width: 280 }}>
            <Input label="错误状态" status="error" defaultValue="错误的内容" feedback="用户名已存在，请更换" />
          </div>
          <div style={{ width: 280 }}>
            <Input label="成功状态" status="success" defaultValue="bisheng_user" feedback="用户名可用" />
          </div>
          <div style={{ width: 280 }}>
            <Input label="禁用状态" disabled defaultValue="不可编辑的内容" />
          </div>
        </>}
        previewCol
        code={`<Input label="正常状态" hint="选填" placeholder="请输入" />
<Input label="错误状态" status="error" feedback="用户名已存在" />
<Input label="成功状态" status="success" feedback="用户名可用" />
<Input label="禁用状态" disabled defaultValue="不可编辑" />`}
      />

      <DemoSection
        id="textarea"
        title="多行文本"
        desc="Textarea 用于多行文本输入，如描述、备注、提示词等场景，支持 resize 拖拽调整高度。"
        preview={<div style={{ width: '100%', maxWidth: 480 }}>
          <Textarea label="描述" hint="最多 500 字" placeholder="请输入详细描述..." />
        </div>}
        previewCol
        code={`<Textarea label="描述" hint="最多 500 字" placeholder="请输入详细描述..." />`}
      />

      <PropsTable props={props} />
    </div>
  )
}
