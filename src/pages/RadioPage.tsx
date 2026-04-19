import React from 'react'
import { PageHeader, DemoSection, PropsTable, type PropDef } from '../components/DemoComponents'
import { Radio } from '../components/Radio'

const radioProps: PropDef[] = [
  { name: 'label', type: 'ReactNode', desc: '标签文本' },
  { name: 'name', type: 'string', desc: '同组 Radio 的 name，实现互斥' },
  { name: 'value', type: 'string', desc: '选项值' },
  { name: 'checked', type: 'boolean', desc: '受控选中状态' },
  { name: 'defaultChecked', type: 'boolean', desc: '非受控默认选中' },
  { name: 'disabled', type: 'boolean', desc: '禁用状态' },
  { name: 'onChange', type: '(e: ChangeEvent) => void', desc: '状态变化回调' },
]

export default function RadioPage() {
  const [radio, setRadio] = React.useState('option1')

  return (
    <div>
      <PageHeader
        badge="数据录入"
        title="Radio 单选框"
        desc="用于在一组互斥选项中选择一个。同一组 Radio 使用相同的 name 实现互斥，推荐选项不超过 6 个，否则考虑使用 Select。"
      />

      <DemoSection
        id="basic"
        title="基础用法"
        desc="一组互斥的单选框，通过 name 属性分组。"
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Radio name="model" label="GPT-4o" value="option1" checked={radio === 'option1'} onChange={() => setRadio('option1')} />
            <Radio name="model" label="Claude 3.5 Sonnet" value="option2" checked={radio === 'option2'} onChange={() => setRadio('option2')} />
            <Radio name="model" label="通义千问 Max" value="option3" checked={radio === 'option3'} onChange={() => setRadio('option3')} />
          </div>
        }
        previewCol
        code={`const [model, setModel] = useState('gpt4o')

<Radio name="model" label="GPT-4o" value="gpt4o" checked={model === 'gpt4o'} onChange={() => setModel('gpt4o')} />
<Radio name="model" label="Claude 3.5 Sonnet" value="claude" checked={model === 'claude'} onChange={() => setModel('claude')} />
<Radio name="model" label="通义千问 Max" value="qwen" checked={model === 'qwen'} onChange={() => setModel('qwen')} />`}
      />

      <DemoSection
        id="disabled"
        title="禁用状态"
        desc="禁用后不可交互。"
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Radio name="disabled-demo" label="禁用未选中" disabled />
            <Radio name="disabled-demo" label="禁用已选中" defaultChecked disabled />
          </div>
        }
        previewCol
        code={`<Radio label="禁用未选中" disabled />
<Radio label="禁用已选中" defaultChecked disabled />`}
      />

      <PropsTable props={radioProps} />
    </div>
  )
}
