import React from 'react'
import { PageHeader, DemoSection, PropsTable, type PropDef } from '../components/DemoComponents'
import { Checkbox } from '../components/Checkbox'

const checkboxProps: PropDef[] = [
  { name: 'label', type: 'ReactNode', desc: '标签文本' },
  { name: 'checked', type: 'boolean', desc: '受控选中状态' },
  { name: 'defaultChecked', type: 'boolean', desc: '非受控默认选中' },
  { name: 'indeterminate', type: 'boolean', desc: '半选状态（全选中间态）' },
  { name: 'disabled', type: 'boolean', desc: '禁用状态' },
  { name: 'onCheckedChange', type: '(checked: boolean | "indeterminate") => void', desc: '状态变化回调' },
]

const items = ['Apple', 'Pear', 'Orange'] as const

export default function CheckboxPage() {
  const [checkedA, setCheckedA] = React.useState(true)
  const [checkedB, setCheckedB] = React.useState(false)

  const [itemChecked, setItemChecked] = React.useState<Record<string, boolean>>({
    Apple: true,
    Pear: false,
    Orange: true,
  })

  const checkedCount = items.filter((k) => itemChecked[k]).length
  const allChecked = checkedCount === items.length
  const noneChecked = checkedCount === 0
  const indeterminate = !allChecked && !noneChecked

  const handleCheckAll = () => {
    const nextAll = !allChecked
    const next: Record<string, boolean> = {}
    for (const k of items) next[k] = nextAll
    setItemChecked(next)
  }

  const handleItemChange = (key: string, val: boolean) => {
    setItemChecked((prev) => ({ ...prev, [key]: val }))
  }

  return (
    <div>
      <PageHeader
        badge="数据录入"
        title="Checkbox 多选框"
        desc="用于同时选择多个选项，或表示「同意条款」等单独勾选场景。支持不确定状态（indeterminate），常用于表格全选场景。"
      />

      <DemoSection
        id="basic"
        title="基础用法"
        desc="最基本的多选框，可通过 label 设置文本。"
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Checkbox label="已阅读并同意服务条款" checked={checkedA} onCheckedChange={(v) => setCheckedA(!!v)} />
            <Checkbox label="接受邮件通知" checked={checkedB} onCheckedChange={(v) => setCheckedB(!!v)} />
            <Checkbox label="RAG 知识库" defaultChecked />
          </div>
        }
        previewCol
        code={`<Checkbox label="已阅读并同意服务条款" checked={checked} onCheckedChange={setChecked} />
<Checkbox label="接受邮件通知" />
<Checkbox label="RAG 知识库" defaultChecked />`}
      />

      <DemoSection
        id="check-all"
        title="全选"
        desc="在实现全选效果时，你可能会用到 indeterminate 属性。全选按钮与子选项之间存在联动关系，展示全选、未选和半选三种状态。"
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Checkbox
              label="Check all"
              checked={allChecked}
              indeterminate={indeterminate}
              onCheckedChange={handleCheckAll}
            />
            <div style={{ display: 'flex', gap: 24, paddingLeft: 24 }}>
              {items.map((item) => (
                <Checkbox
                  key={item}
                  label={item}
                  checked={itemChecked[item]}
                  onCheckedChange={(v) => handleItemChange(item, !!v)}
                />
              ))}
            </div>
          </div>
        }
        previewCol
        code={`const items = ['Apple', 'Pear', 'Orange']
const [itemChecked, setItemChecked] = useState({ Apple: true, Pear: false, Orange: true })

const checkedCount = items.filter(k => itemChecked[k]).length
const allChecked = checkedCount === items.length
const indeterminate = checkedCount > 0 && !allChecked

<Checkbox
  label="Check all"
  checked={allChecked}
  indeterminate={indeterminate}
  onCheckedChange={() => {
    const nextAll = !allChecked
    setItemChecked(Object.fromEntries(items.map(k => [k, nextAll])))
  }}
/>
{items.map(item => (
  <Checkbox
    key={item}
    label={item}
    checked={itemChecked[item]}
    onCheckedChange={v => setItemChecked(prev => ({ ...prev, [item]: !!v }))}
  />
))}`}
      />

      <DemoSection
        id="disabled"
        title="禁用状态"
        desc="禁用后不可交互。"
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Checkbox label="禁用未选中" disabled />
            <Checkbox label="禁用已选中" defaultChecked disabled />
          </div>
        }
        previewCol
        code={`<Checkbox label="禁用未选中" disabled />
<Checkbox label="禁用已选中" defaultChecked disabled />`}
      />

      <PropsTable props={checkboxProps} />
    </div>
  )
}
