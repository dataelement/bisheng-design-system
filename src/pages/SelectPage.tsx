import React from 'react'
import { PageHeader, DemoSection, PropsTable, type PropDef } from '../components/DemoComponents'
import { Select } from '../components/Select'

const selectProps: PropDef[] = [
  { name: 'options', type: '{ value: string; label: string; disabled?: boolean }[]', required: true, desc: '选项数据' },
  { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", desc: '选择器尺寸' },
  { name: 'label', type: 'string', desc: '标签文本' },
  { name: 'hint', type: 'string', desc: '描述文本，显示在标签右侧' },
  { name: 'feedback', type: 'string', desc: '验证反馈文本，显示在选择器下方' },
  { name: 'status', type: "'default' | 'error' | 'success'", default: "'default'", desc: '验证状态' },
  { name: 'placeholder', type: 'string', desc: '占位文本' },
  { name: 'disabled', type: 'boolean', desc: '禁用状态' },
  { name: 'value', type: 'string', desc: '受控选中值' },
  { name: 'defaultValue', type: 'string', desc: '非受控默认值' },
  { name: 'onValueChange', type: '(value: string) => void', desc: '值变化回调' },
]

const regionOptions = [
  { value: 'beijing', label: '北京' },
  { value: 'shanghai', label: '上海' },
  { value: 'guangzhou', label: '广州' },
  { value: 'shenzhen', label: '深圳' },
  { value: 'hangzhou', label: '杭州', disabled: true },
]

const modelOptions = [
  { value: 'gpt4', label: 'GPT-4o' },
  { value: 'claude', label: 'Claude 3.5 Sonnet' },
  { value: 'qwen', label: '通义千问 Max' },
  { value: 'baidu', label: '文心一言 4.0' },
]

export default function SelectPage() {
  const [city, setCity] = React.useState('')
  const [model, setModel] = React.useState('gpt4')

  return (
    <div>
      <PageHeader
        badge="数据录入"
        title="Select 选择器"
        desc="从下拉列表中选择一个选项。支持禁用选项、placeholder、label、description 等配置，尺寸与 Input 保持一致。"
      />

      <DemoSection
        id="basic"
        title="基础用法"
        desc="最基础的下拉选择器，支持 placeholder 和受控模式。"
        preview={<>
          <div style={{ width: 200 }}>
            <Select
              options={regionOptions}
              placeholder="请选择城市"
              value={city}
              onValueChange={setCity}
              label="城市"
            />
          </div>
          <div style={{ width: 220 }}>
            <Select
              options={modelOptions}
              value={model}
              onValueChange={setModel}
              label="AI 模型"
              hint="选择底层模型"
            />
          </div>
        </>}
        previewCol
        code={`<Select
  label="城市"
  options={regionOptions}
  placeholder="请选择城市"
  value={city}
  onValueChange={setCity}
/>

<Select
  label="AI 模型"
  hint="选择底层模型"
  options={modelOptions}
  value={model}
  onValueChange={setModel}
/>`}
      />

      <DemoSection
        id="size"
        title="选择器尺寸"
        desc="三种尺寸与 Input / Button 高度对齐：small=28px、medium=32px、large=40px。"
        preview={<>
          <div style={{ width: 180 }}>
            <Select size="sm" options={regionOptions} placeholder="Small" />
          </div>
          <div style={{ width: 200 }}>
            <Select options={regionOptions} placeholder="Medium（默认）" />
          </div>
          <div style={{ width: 220 }}>
            <Select size="lg" options={regionOptions} placeholder="Large" />
          </div>
        </>}
        previewCol
        code={`<Select size="sm" options={regionOptions} placeholder="Small" />
<Select options={regionOptions} placeholder="Medium（默认）" />
<Select size="lg" options={regionOptions} placeholder="Large" />`}
      />

      <DemoSection
        id="status"
        title="状态"
        desc="通过 status 和 feedback 展示验证反馈信息。"
        preview={<>
          <div style={{ width: 220 }}>
            <Select
              label="正常状态"
              hint="选填"
              options={regionOptions}
              defaultValue="beijing"
            />
          </div>
          <div style={{ width: 220 }}>
            <Select
              label="错误状态"
              status="error"
              options={regionOptions}
              placeholder="请选择"
              feedback="请选择一个城市"
            />
          </div>
        </>}
        previewCol
        code={`<Select label="正常状态" hint="选填" options={regionOptions} defaultValue="beijing" />
<Select label="错误状态" status="error" options={regionOptions} feedback="请选择一个城市" />`}
      />

      <DemoSection
        id="disabled"
        title="禁用状态"
        desc="整个选择器不可交互。"
        preview={
          <div style={{ width: 200 }}>
            <Select
              label="禁用"
              options={regionOptions}
              disabled
              defaultValue="beijing"
            />
          </div>
        }
        previewCol
        code={`<Select label="禁用" options={regionOptions} disabled defaultValue="beijing" />`}
      />

      <PropsTable props={selectProps} />
    </div>
  )
}
