import React from 'react'
import { PageHeader, DemoSection, PropsTable, type PropDef } from '../components/DemoComponents'
import { Table, type Column } from '../components/Table'
import { Badge } from '../components/Badge'
import { Button } from '../components/Button'
import { Trash2, Pencil } from 'lucide-react'

type WorkflowRow = {
  id: string
  name: string
  type: string
  status: string
  creator: string
  updated: string
  calls: number
}

const columns: Column<WorkflowRow>[] = [
  { key: 'name', title: '工作流名称', dataIndex: 'name', sortable: true },
  { key: 'type', title: '类型', dataIndex: 'type', render: (v) => (
    <Badge variant={v === 'Agent' ? 'primary' : 'default'}>{String(v)}</Badge>
  )},
  { key: 'status', title: '状态', dataIndex: 'status', sortable: true, render: (v) => (
    <Badge variant={v === '运行中' ? 'success' : v === '审核中' ? 'warning' : 'default'} dot>{String(v)}</Badge>
  )},
  { key: 'calls', title: '调用次数', dataIndex: 'calls', sortable: true, render: (v) => (
    <span style={{ fontVariantNumeric: 'tabular-nums' }}>{Number(v).toLocaleString()}</span>
  )},
  { key: 'creator', title: '创建者', dataIndex: 'creator' },
  { key: 'updated', title: '更新时间', dataIndex: 'updated', sortable: true },
  { key: 'actions', title: '操作', render: (_, row) => (
    <div style={{ display: 'flex', gap: 8 }}>
      <Button size="sm" variant="ghost" iconOnly><Pencil size={13} /></Button>
      <Button size="sm" variant="ghost" iconOnly style={{ color: 'var(--color-danger-500)' } as React.CSSProperties}><Trash2 size={13} /></Button>
    </div>
  )},
]

const data: WorkflowRow[] = [
  { id: '1', name: '智能客服助手', type: 'Agent', status: '运行中', creator: '张三', updated: '2026-03-07', calls: 12840 },
  { id: '2', name: '合同审核流程', type: 'Workflow', status: '审核中', creator: '李四', updated: '2026-03-06', calls: 3210 },
  { id: '3', name: '知识库 QA 机器人', type: 'RAG', status: '运行中', creator: '王五', updated: '2026-03-05', calls: 54321 },
  { id: '4', name: '报告自动生成', type: 'Workflow', status: '已停用', creator: '赵六', updated: '2026-03-01', calls: 890 },
  { id: '5', name: '销售数据分析', type: 'Agent', status: '运行中', creator: '陈七', updated: '2026-02-28', calls: 7654 },
]

const tableProps: PropDef[] = [
  { name: 'columns', type: 'Column<T>[]', required: true, desc: '列定义，支持 render 自定义单元格' },
  { name: 'data', type: 'T[]', required: true, desc: '表格数据源' },
  { name: 'rowKey', type: 'keyof T | (row: T) => string', desc: '行唯一标识，用于 React key' },
  { name: 'striped', type: 'boolean', default: 'false', desc: '斑马纹模式，偶数行背景略深' },
  { name: 'emptyText', type: 'string', default: "'暂无数据'", desc: '无数据时的提示文案' },
]

export default function TablePage() {
  return (
    <div>
      <PageHeader
        badge="数据展示"
        title="Table 表格"
        desc="表格用于展示多条结构相似的数据，支持列排序、自定义渲染、操作列等。BISHENG 中大量的列表类数据（工作流、模型、用户）均使用 Table 组件展示。"
      />

      <DemoSection
        id="basic"
        title="基础表格"
        desc="包含表头、数据行，支持鼠标悬浮高亮。列定义的 sortable 属性开启客户端排序，点击表头切换升序/降序，再次点击切换方向。"
        preview={<div style={{ width: '100%' }}>
          <Table columns={columns} data={data} rowKey="id" />
        </div>}
        previewCol
        code={`const columns: Column<Row>[] = [
  { key: 'name', title: '工作流名称', dataIndex: 'name', sortable: true },
  { key: 'status', title: '状态', dataIndex: 'status', render: (v) => (
    <Badge variant={v === '运行中' ? 'success' : 'warning'} dot>{v}</Badge>
  )},
  { key: 'calls', title: '调用次数', dataIndex: 'calls', sortable: true },
  { key: 'actions', title: '操作', render: (_, row) => (
    <Button size="sm" variant="ghost" iconOnly><Pencil size={13} /></Button>
  )},
]

<Table columns={columns} data={data} rowKey="id" />`}
      />

      <DemoSection
        id="striped"
        title="斑马纹表格"
        desc="斑马纹模式通过交替行背景提升大量数据的可读性，适合数据密度较高的场景，如日志列表、数据分析报表。"
        preview={<div style={{ width: '100%' }}>
          <Table
            columns={columns.slice(0, 5)}
            data={data}
            rowKey="id"
            striped
          />
        </div>}
        previewCol
        code={`<Table columns={columns} data={data} rowKey="id" striped />`}
      />

      <DemoSection
        id="empty"
        title="空状态"
        desc="当数据源为空时，表格显示空状态提示，可通过 emptyText 自定义提示文案。"
        preview={<div style={{ width: '100%' }}>
          <Table columns={columns.slice(0, 4)} data={[]} rowKey="id" emptyText="没有找到相关工作流" />
        </div>}
        previewCol
        code={`<Table columns={columns} data={[]} emptyText="没有找到相关工作流" />`}
      />

      <PropsTable props={tableProps} />
    </div>
  )
}
