import React from 'react'

// ===== CODE BLOCK =====
interface CodeBlockProps {
  code: string
  lang?: string
}
export const CodeBlock: React.FC<CodeBlockProps> = ({ code, lang = 'tsx' }) => {
  const [copied, setCopied] = React.useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="ds-demo__code">
      <div className="ds-demo__code-header">
        <span className="ds-demo__code-lang">{lang}</span>
        <button className="ds-demo__code-copy" onClick={copy}>
          {copied ? '✓ 已复制' : '复制代码'}
        </button>
      </div>
      <pre><code>{code}</code></pre>
    </div>
  )
}

// ===== DEMO SECTION =====
interface DemoSectionProps {
  id?: string
  title: string
  desc?: string
  preview: React.ReactNode
  code: string
  previewCol?: boolean
  previewCenter?: boolean
  lang?: string
}
export const DemoSection: React.FC<DemoSectionProps> = ({
  id, title, desc, preview, code, previewCol, previewCenter, lang
}) => {
  return (
    <div className="ds-section" id={id}>
      <h3 className="ds-section__title">{title}</h3>
      {desc && <p className="ds-section__desc">{desc}</p>}
      <div className="ds-demo">
        <div className={`ds-demo__preview${previewCol ? ' ds-demo__preview--col' : ''}${previewCenter ? ' ds-demo__preview--center' : ''}`}>
          {preview}
        </div>
        <CodeBlock code={code} lang={lang} />
      </div>
    </div>
  )
}

// ===== PROPS TABLE =====
export interface PropDef {
  name: string
  type: string
  default?: string
  required?: boolean
  desc: string
}

interface PropsTableProps {
  props: PropDef[]
}
export const PropsTable: React.FC<PropsTableProps> = ({ props }) => (
  <div className="ds-section">
    <h3 className="ds-section__title">API</h3>
    <table className="ds-props-table">
      <thead>
        <tr>
          <th>属性</th>
          <th>类型</th>
          <th>默认值</th>
          <th>是否必填</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        {props.map(p => (
          <tr key={p.name}>
            <td><code>{p.name}</code></td>
            <td><code>{p.type}</code></td>
            <td>{p.default ? <code>{p.default}</code> : <span style={{ color: 'var(--text-tertiary)' }}>—</span>}</td>
            <td style={{ color: p.required ? 'var(--color-danger-500)' : 'var(--text-tertiary)' }}>
              {p.required ? '是' : '否'}
            </td>
            <td style={{ color: 'var(--text-secondary)' }}>{p.desc}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

// ===== PAGE HEADER =====
interface PageHeaderProps {
  badge?: string
  title: string
  desc: string
}
export const PageHeader: React.FC<PageHeaderProps> = ({ badge, title, desc }) => (
  <div className="ds-page-header">
    {badge && <div className="ds-page-header__tag">{badge}</div>}
    <h1>{title}</h1>
    <p className="ds-page-header__desc">{desc}</p>
  </div>
)
