import React from 'react'
import { PageHeader, DemoSection, PropsTable, type PropDef } from '../components/DemoComponents'
import { Tag } from '../components/Tag'

const tagProps: PropDef[] = [
  { name: 'variant', type: "'primary' | 'success' | 'warning' | 'danger' | 'default'", default: "'default'", desc: '标签颜色语义' },
  { name: 'closable', type: 'boolean', default: 'false', desc: '是否显示关闭按钮' },
  { name: 'onClose', type: '() => void', desc: '关闭按钮点击回调' },
  { name: 'children', type: 'ReactNode', required: true, desc: '标签文本内容' },
]

export default function TagPage() {
  const [tags, setTags] = React.useState(['RAG', 'Agent', 'Workflow', 'LLM'])
  const removeTag = (t: string) => setTags(prev => prev.filter(p => p !== t))

  return (
    <div>
      <PageHeader
        badge="数据展示"
        title="Tag 标签"
        desc="标签比徽标更强调「分类」语义，带有边框，视觉上更「实」。可添加关闭按钮实现动态标签管理。常用于关键词、技术栈、类型分类等场景。"
      />

      <DemoSection
        id="tag-variants"
        title="颜色变体"
        desc="五种语义色彩变体，用于不同含义的分类标识。"
        preview={<>
          <Tag variant="primary">技术文档</Tag>
          <Tag variant="success">已发布</Tag>
          <Tag variant="warning">审核中</Tag>
          <Tag variant="danger">已下线</Tag>
          <Tag variant="default">默认标签</Tag>
        </>}
        code={`<Tag variant="primary">技术文档</Tag>
<Tag variant="success">已发布</Tag>
<Tag variant="warning">审核中</Tag>
<Tag variant="danger">已下线</Tag>
<Tag variant="default">默认标签</Tag>`}
      />

      <DemoSection
        id="tag-closable"
        title="可关闭标签"
        desc="添加 closable 属性后显示关闭按钮，配合 onClose 实现动态标签管理。"
        preview={<>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%' }}>
            <div className="ds-row">
              {tags.map(t => (
                <Tag key={t} variant="primary" closable onClose={() => removeTag(t)}>{t}</Tag>
              ))}
              {tags.length === 0 && <span style={{ color: 'var(--text-tertiary)', fontSize: 13 }}>所有标签已删除</span>}
            </div>
          </div>
        </>}
        previewCol
        code={`const [tags, setTags] = useState(['RAG', 'Agent', 'Workflow', 'LLM'])

{tags.map(t => (
  <Tag key={t} variant="primary" closable onClose={() => setTags(prev => prev.filter(p => p !== t))}>
    {t}
  </Tag>
))}`}
      />

      <PropsTable props={tagProps} />
    </div>
  )
}
