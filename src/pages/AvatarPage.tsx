import React from 'react'
import { PageHeader, DemoSection, PropsTable, type PropDef } from '../components/DemoComponents'
import { Avatar } from '../components/Avatar'

const avatarProps: PropDef[] = [
  { name: 'src', type: 'string', desc: '头像图片 URL' },
  { name: 'alt', type: 'string', desc: '图片的 alt 文本' },
  { name: 'initials', type: 'string', desc: '无图片时显示的缩写文字' },
  { name: 'size', type: "'sm' | 'md' | 'lg' | 'xl'", default: "'md'", desc: '头像尺寸' },
  { name: 'shape', type: "'circle' | 'square'", default: "'circle'", desc: '头像形状' },
]

export default function AvatarPage() {
  return (
    <div>
      <PageHeader
        badge="数据展示"
        title="Avatar 头像"
        desc="头像用于展示用户或角色身份。支持图片和文字首字母两种形式，支持圆形和方形两种形状，四种尺寸满足不同场景需求。"
      />

      <DemoSection
        id="avatar-sizes"
        title="尺寸"
        desc="四种尺寸：sm、md、lg、xl，适用于不同场景。"
        preview={<>
          <Avatar initials="BS" size="sm" />
          <Avatar initials="BS" size="md" />
          <Avatar initials="BS" size="lg" />
          <Avatar initials="AI" size="xl" />
        </>}
        code={`<Avatar initials="BS" size="sm" />
<Avatar initials="BS" size="md" />
<Avatar initials="BS" size="lg" />
<Avatar initials="AI" size="xl" />`}
      />

      <DemoSection
        id="avatar-shapes"
        title="形状"
        desc="支持圆形（默认）和方形两种形状。"
        preview={<>
          <Avatar initials="BS" size="md" />
          <Avatar initials="BS" size="md" shape="square" />
          <Avatar initials="AI" size="lg" />
          <Avatar initials="AI" size="lg" shape="square" />
        </>}
        code={`<Avatar initials="BS" size="md" />
<Avatar initials="BS" size="md" shape="square" />
<Avatar initials="AI" size="lg" />
<Avatar initials="AI" size="lg" shape="square" />`}
      />

      <DemoSection
        id="avatar-colors"
        title="自定义颜色"
        desc="通过 style 属性自定义头像的背景色和文字颜色。"
        preview={<>
          <Avatar initials="R" size="md" style={{ background: 'var(--color-danger-100)', color: 'var(--color-danger-600)' } as React.CSSProperties} />
          <Avatar initials="G" size="md" style={{ background: 'var(--color-success-100)', color: 'var(--color-success-700)' } as React.CSSProperties} />
          <Avatar initials="O" size="md" style={{ background: 'var(--color-warning-100)', color: 'var(--color-warning-700)' } as React.CSSProperties} />
          <Avatar initials="P" size="md" style={{ background: 'var(--color-primary-100)', color: 'var(--color-primary-700)' } as React.CSSProperties} />
        </>}
        code={`<Avatar initials="R" style={{ background: 'var(--color-danger-100)', color: 'var(--color-danger-600)' }} />
<Avatar initials="G" style={{ background: 'var(--color-success-100)', color: 'var(--color-success-700)' }} />
<Avatar initials="O" style={{ background: 'var(--color-warning-100)', color: 'var(--color-warning-700)' }} />
<Avatar initials="P" style={{ background: 'var(--color-primary-100)', color: 'var(--color-primary-700)' }} />`}
      />

      <PropsTable props={avatarProps} />
    </div>
  )
}
