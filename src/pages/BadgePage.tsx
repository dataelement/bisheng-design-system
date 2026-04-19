import React from 'react'
import { PageHeader, DemoSection, PropsTable, type PropDef } from '../components/DemoComponents'
import { Badge } from '../components/Badge'

const badgeProps: PropDef[] = [
  { name: 'variant', type: "'primary' | 'success' | 'warning' | 'danger' | 'default'", default: "'default'", desc: '徽标颜色语义' },
  { name: 'dot', type: 'boolean', default: 'false', desc: '显示小圆点，用于状态指示' },
  { name: 'children', type: 'ReactNode', required: true, desc: '徽标文本内容' },
]

export default function BadgePage() {
  return (
    <div>
      <PageHeader
        badge="数据展示"
        title="Badge 徽标"
        desc="徽标用于标识状态或数量，使用圆角胶囊形态。颜色语义：Primary 为信息/操作，Success 为成功/完成，Warning 为警告/待确认，Danger 为错误/失败。dot 模式常用于状态图例说明。"
      />

      <DemoSection
        id="badge-variants"
        title="颜色变体"
        desc="五种语义色彩变体，用于不同含义的状态标识。"
        preview={<>
          <Badge variant="primary">Primary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="danger">Danger</Badge>
          <Badge variant="default">Default</Badge>
        </>}
        code={`<Badge variant="primary">Primary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="danger">Danger</Badge>
<Badge variant="default">Default</Badge>`}
      />

      <DemoSection
        id="badge-dot"
        title="圆点模式"
        desc="带状态圆点的徽标，常用于状态图例说明。"
        preview={<>
          <Badge variant="success" dot>运行中</Badge>
          <Badge variant="warning" dot>待审核</Badge>
          <Badge variant="danger" dot>已停用</Badge>
          <Badge variant="default" dot>未知状态</Badge>
        </>}
        code={`<Badge variant="success" dot>运行中</Badge>
<Badge variant="warning" dot>待审核</Badge>
<Badge variant="danger" dot>已停用</Badge>
<Badge variant="default" dot>未知状态</Badge>`}
      />

      <PropsTable props={badgeProps} />
    </div>
  )
}
