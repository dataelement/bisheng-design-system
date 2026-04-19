import React from 'react'
import { PageHeader, DemoSection, PropsTable, type PropDef } from '../components/DemoComponents'
import {
  IllustEmpty,
  IllustSuccess,
  IllustDocument,
  IllustLoading,
  IllustWebList,
  IllustArticleQA,
  IllustNoPermission,
  IllustCrawling,
} from '../components/Illustration'

const propDefs: PropDef[] = [
  { name: 'width', type: 'number | string', default: '400', desc: 'SVG 宽度' },
  { name: 'height', type: 'number | string', default: '400', desc: 'SVG 高度' },
  { name: 'className', type: 'string', desc: '自定义 class' },
  { name: 'style', type: 'CSSProperties', desc: '内联样式' },
  { name: '...rest', type: 'SVGProps<SVGSVGElement>', desc: '透传所有 SVG 原生属性' },
]

const allIllusts = [
  { name: 'IllustEmpty', label: '空状态', Component: IllustEmpty },
  { name: 'IllustSuccess', label: '成功态', Component: IllustSuccess },
  { name: 'IllustDocument', label: '文件', Component: IllustDocument },
  { name: 'IllustLoading', label: '加载中', Component: IllustLoading },
  { name: 'IllustWebList', label: '网页列表', Component: IllustWebList },
  { name: 'IllustArticleQA', label: '文章问答', Component: IllustArticleQA },
  { name: 'IllustNoPermission', label: '无权限', Component: IllustNoPermission },
  { name: 'IllustCrawling', label: '爬取中', Component: IllustCrawling },
] as const

function IllustGrid() {
  const [copied, setCopied] = React.useState<string | null>(null)

  const handleCopy = (name: string) => {
    navigator.clipboard.writeText(`<${name} width={200} height={200} />`)
    setCopied(name)
    setTimeout(() => setCopied(null), 1500)
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: 24,
        width: '100%',
      }}
    >
      {allIllusts.map(({ name, label, Component }) => (
        <button
          key={name}
          onClick={() => handleCopy(name)}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 12,
            padding: 24,
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-primary)',
            background: 'var(--surface-base)',
            cursor: 'pointer',
            transition: 'var(--transition-base)',
            color: 'var(--fill-primary)',
            position: 'relative',
          }}
          onMouseEnter={(e) => {
            ;(e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--border-focus)'
            ;(e.currentTarget as HTMLButtonElement).style.boxShadow = 'var(--shadow-md)'
          }}
          onMouseLeave={(e) => {
            ;(e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--border-primary)'
            ;(e.currentTarget as HTMLButtonElement).style.boxShadow = 'none'
          }}
        >
          <Component width={120} height={120} />
          <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-primary)', fontWeight: 500 }}>
            {label}
          </span>
          <code style={{ fontSize: 11, color: 'var(--text-tertiary)', fontFamily: 'var(--font-family-mono)' }}>
            {name}
          </code>
          {copied === name && (
            <span
              style={{
                position: 'absolute',
                top: 8,
                right: 8,
                fontSize: 11,
                color: 'var(--color-success-500)',
                fontWeight: 600,
              }}
            >
              已复制
            </span>
          )}
        </button>
      ))}
    </div>
  )
}

export default function IllustrationPage() {
  return (
    <div>
      <PageHeader
        badge="通用"
        title="Illustration 插画"
        desc="一组场景化插画组件，用于空状态、成功提示、加载、无权限等反馈场景。所有插画使用 currentColor 作为填充色，可通过 color 属性适配任意主题。"
      />

      <DemoSection
        title="全部插画"
        desc="点击可复制导入代码"
        preview={<IllustGrid />}
        code={`import { IllustEmpty, IllustSuccess, IllustDocument, IllustLoading,
  IllustWebList, IllustArticleQA, IllustNoPermission, IllustCrawling
} from '@/components/Illustration'

<IllustEmpty width={120} height={120} />`}
      />

      <DemoSection
        title="自定义尺寸"
        desc="通过 width / height 控制尺寸"
        preview={
          <div style={{ display: 'flex', alignItems: 'end', gap: 32 }}>
            <div style={{ textAlign: 'center', color: 'var(--fill-primary)' }}>
              <IllustEmpty width={64} height={64} />
              <div style={{ fontSize: 12, color: 'var(--text-tertiary)', marginTop: 8 }}>64px</div>
            </div>
            <div style={{ textAlign: 'center', color: 'var(--fill-primary)' }}>
              <IllustEmpty width={120} height={120} />
              <div style={{ fontSize: 12, color: 'var(--text-tertiary)', marginTop: 8 }}>120px</div>
            </div>
            <div style={{ textAlign: 'center', color: 'var(--fill-primary)' }}>
              <IllustEmpty width={200} height={200} />
              <div style={{ fontSize: 12, color: 'var(--text-tertiary)', marginTop: 8 }}>200px</div>
            </div>
          </div>
        }
        code={`<IllustEmpty width={64} height={64} />
<IllustEmpty width={120} height={120} />
<IllustEmpty width={200} height={200} />`}
      />

      <DemoSection
        title="自定义颜色"
        desc="通过 CSS color 属性改变插画颜色"
        preview={
          <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
            <div style={{ textAlign: 'center' }}>
              <IllustSuccess width={120} height={120} style={{ color: 'var(--fill-primary)' }} />
              <div style={{ fontSize: 12, color: 'var(--text-tertiary)', marginTop: 8 }}>Primary</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <IllustSuccess width={120} height={120} style={{ color: 'var(--color-success-500)' }} />
              <div style={{ fontSize: 12, color: 'var(--text-tertiary)', marginTop: 8 }}>Success</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <IllustSuccess width={120} height={120} style={{ color: 'var(--color-error-500)' }} />
              <div style={{ fontSize: 12, color: 'var(--text-tertiary)', marginTop: 8 }}>Error</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <IllustSuccess width={120} height={120} style={{ color: 'var(--text-disabled)' }} />
              <div style={{ fontSize: 12, color: 'var(--text-tertiary)', marginTop: 8 }}>Disabled</div>
            </div>
          </div>
        }
        code={`<IllustSuccess style={{ color: 'var(--fill-primary)' }} />
<IllustSuccess style={{ color: 'var(--color-success-500)' }} />
<IllustSuccess style={{ color: 'var(--color-error-500)' }} />
<IllustSuccess style={{ color: 'var(--text-disabled)' }} />`}
      />

      <PropsTable title="Illustration Props" props={propDefs} />
    </div>
  )
}
