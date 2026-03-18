import React from 'react'
import { PageHeader, DemoSection, PropsTable, type PropDef } from '../components/DemoComponents'
import { Badge, Tag } from '../components/Badge'
import { Avatar, Tooltip } from '../components/Avatar'

const badgeProps: PropDef[] = [
  { name: 'variant', type: "'primary' | 'success' | 'warning' | 'danger' | 'default'", default: "'default'", desc: '徽标颜色语义' },
  { name: 'dot', type: 'boolean', default: 'false', desc: '显示小圆点，用于状态指示' },
  { name: 'children', type: 'ReactNode', required: true, desc: '徽标文本内容' },
]

export default function BadgePage() {
  const [tags, setTags] = React.useState(['RAG', 'Agent', 'Workflow', 'LLM'])
  const removeTag = (t: string) => setTags(prev => prev.filter(p => p !== t))

  return (
    <div>
      <PageHeader
        badge="数据展示"
        title="Badge / Tag / Avatar / Tooltip"
        desc="展示类组件用于呈现状态、标签、用户信息等辅助信息。这类组件通常无需用户交互，以视觉形式传达上下文信息。"
      />

      <DemoSection
        id="badge"
        title="Badge 徽标"
        desc="徽标用于标识状态或数量，使用圆角胶囊形态区分于标签。颜色语义：Primary 为信息/操作，Success 为成功/完成，Warning 为警告/待确认，Danger 为错误/失败。dot 模式常用于状态图例说明。"
        preview={<>
          <Badge variant="primary">Primary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="danger">Danger</Badge>
          <Badge variant="default">Default</Badge>
          <div className="ds-divider--vertical" style={{ height: 20 }} />
          <Badge variant="success" dot>运行中</Badge>
          <Badge variant="warning" dot>待审核</Badge>
          <Badge variant="danger" dot>已停用</Badge>
          <Badge variant="default" dot>未知状态</Badge>
        </>}
        code={`<Badge variant="primary">Primary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="danger">Danger</Badge>

{/* 带状态圆点 */}
<Badge variant="success" dot>运行中</Badge>
<Badge variant="warning" dot>待审核</Badge>`}
      />

      <DemoSection
        id="tag"
        title="Tag 标签"
        desc="标签比徽标更强调「分类」语义，带有边框，视觉上更「实」。可添加关闭按钮实现动态标签管理。常用于关键词、技术栈、类型分类等场景。"
        preview={<>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%' }}>
            <div className="ds-row">
              <Tag variant="primary">技术文档</Tag>
              <Tag variant="success">已发布</Tag>
              <Tag variant="warning">审核中</Tag>
              <Tag variant="danger">已下线</Tag>
              <Tag variant="default">默认标签</Tag>
            </div>
            <div className="ds-row">
              {tags.map(t => (
                <Tag key={t} variant="primary" closable onClose={() => removeTag(t)}>{t}</Tag>
              ))}
              {tags.length === 0 && <span style={{ color: 'var(--text-tertiary)', fontSize: 13 }}>所有标签已删除</span>}
            </div>
          </div>
        </>}
        previewCol
        code={`<Tag variant="primary">技术文档</Tag>
<Tag variant="success">已发布</Tag>

{/* 可关闭标签 */}
const [tags, setTags] = useState(['RAG', 'Agent', 'Workflow'])
{tags.map(t => (
  <Tag key={t} closable onClose={() => setTags(prev => prev.filter(p => p !== t))}>
    {t}
  </Tag>
))}`}
      />

      <DemoSection
        id="avatar"
        title="Avatar 头像"
        desc="头像用于展示用户或角色身份。支持图片和文字首字母两种形式，支持圆形和方形两种形状，四种尺寸满足不同场景需求。Avatar 组可用于展示协作者列表。"
        preview={<>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20, width: '100%' }}>
            <div className="ds-row">
              <Avatar initials="BS" size="sm" />
              <Avatar initials="BS" size="md" />
              <Avatar initials="BS" size="lg" />
              <Avatar initials="AI" size="xl" />
            </div>
            <div className="ds-row">
              <Avatar initials="R" size="md" style={{ background: 'var(--color-danger-100)', color: 'var(--color-danger-600)' } as React.CSSProperties} />
              <Avatar initials="G" size="md" style={{ background: 'var(--color-success-100)', color: 'var(--color-success-700)' } as React.CSSProperties} />
              <Avatar initials="O" size="md" style={{ background: 'var(--color-warning-100)', color: 'var(--color-warning-700)' } as React.CSSProperties} />
              <Avatar initials="BS" size="md" shape="square" />
              <Avatar initials="AI" size="lg" shape="square" />
            </div>
          </div>
        </>}
        previewCol
        code={`<Avatar initials="BS" size="sm" />
<Avatar initials="BS" size="md" />
<Avatar initials="BS" size="lg" />
<Avatar initials="BS" shape="square" />

{/* 自定义颜色 */}
<Avatar initials="R" style={{ background: 'var(--color-danger-100)', color: 'var(--color-danger-600)' }} />`}
      />

      <DemoSection
        id="tooltip"
        title="Tooltip 文字提示"
        desc="Tooltip 在鼠标悬停时显示简短辅助说明，适合为图标、缩略文本提供更多语境。内容应简洁，不超过 1-2 行，不适合放置交互元素（使用 Popover 替代）。"
        preview={<>
          <Tooltip content="这是一个提示信息">
            <span style={{ cursor: 'pointer', color: 'var(--color-primary-500)', textDecoration: 'underline dashed' }}>
              悬停查看提示
            </span>
          </Tooltip>
          <Tooltip content="新建技能">
            <button style={{ border: '1px solid var(--border-primary)', borderRadius: 6, padding: '6px 10px', cursor: 'pointer', background: 'var(--surface-base)', color: 'var(--text-secondary)' }}>
              + 新建
            </button>
          </Tooltip>
          <Tooltip content="API Token 仅显示一次，请妥善保存">
            <span style={{ color: 'var(--text-tertiary)', fontSize: 13, cursor: 'help', textDecoration: 'underline dotted' }}>
              Token 说明 ?
            </span>
          </Tooltip>
        </>}
        code={`<Tooltip content="这是一个提示信息">
  <span>悬停查看提示</span>
</Tooltip>`}
      />

      <PropsTable props={badgeProps} />
    </div>
  )
}
