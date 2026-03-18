import React from 'react'
import { PageHeader, DemoSection, PropsTable, type PropDef } from '../components/DemoComponents'
import { Select } from '../components/Select'
import { Checkbox, Radio } from '../components/Checkbox'
import { Switch } from '../components/Switch'

const selectProps: PropDef[] = [
  { name: 'options', type: '{ value: string; label: string; disabled?: boolean }[]', required: true, desc: '选项数据' },
  { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", desc: '选择器尺寸，对齐 Input 的 small / medium / large 规格' },
  { name: 'label', type: 'string', desc: '标签文本' },
  { name: 'hint', type: 'string', desc: '提示信息' },
  { name: 'placeholder', type: 'string', desc: '占位文本（首选项不可选）' },
  { name: 'disabled', type: 'boolean', desc: '禁用状态' },
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
  const [checkedA, setCheckedA] = React.useState(true)
  const [checkedB, setCheckedB] = React.useState(false)
  const [radio, setRadio] = React.useState('option1')
  const [sw1, setSw1] = React.useState(true)
  const [sw2, setSw2] = React.useState(false)

  return (
    <div>
      <PageHeader
        badge="数据录入"
        title="Select / Checkbox / Radio / Switch"
        desc="选择类控件用于从一组固定选项中做出选择。Select 适用于选项较多时，Checkbox 用于多选，Radio 用于单选，Switch 用于开关切换。"
      />

      <DemoSection
        id="select-basic"
        title="Select 选择器"
        desc="从下拉列表中选择一个选项，支持禁用选项、placeholder、label 等配置。在模型选择、区域配置等场景中广泛使用。尺寸与 Input 保持一致：small=28px、medium=32px、large=40px。"
        preview={<>
          <div style={{ width: 180 }}>
            <Select size="sm" options={regionOptions} placeholder="小尺寸" />
          </div>
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
              hint="选择对话所使用的底层模型"
            />
          </div>
          <div style={{ width: 220 }}>
            <Select size="lg" options={regionOptions} label="大尺寸" defaultValue="beijing" />
          </div>
          <div style={{ width: 180 }}>
            <Select size="sm" options={regionOptions} label="禁用状态" disabled defaultValue="beijing" />
          </div>
        </>}
        previewCol
        code={`const [city, setCity] = useState('')

<Select size="sm" options={regionOptions} placeholder="小尺寸" />

<Select
  label="城市"
  options={[
    { value: 'beijing', label: '北京' },
    { value: 'shanghai', label: '上海' },
    { value: 'hangzhou', label: '杭州', disabled: true },
  ]}
  placeholder="请选择城市"
  value={city}
  onValueChange={setCity}
/>

<Select size="lg" options={regionOptions} label="大尺寸" />`}
      />

      <DemoSection
        id="checkbox"
        title="Checkbox 多选框"
        desc="用于同时选择多个选项，或表示「同意条款」等单独勾选场景。支持不确定状态（indeterminate），常用于表格全选场景。"
        preview={<div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Checkbox label="已阅读并同意服务条款" checked={checkedA} onChange={e => setCheckedA(e.target.checked)} />
          <Checkbox label="接受邮件通知" checked={checkedB} onChange={e => setCheckedB(e.target.checked)} />
          <Checkbox label="RAG 知识库" defaultChecked />
          <Checkbox label="Agent 工作流（不可用）" defaultChecked disabled />
          <Checkbox label="半选状态（全选中间态）" indeterminate />
        </div>}
        previewCol
        code={`<Checkbox label="已阅读并同意服务条款" checked={checked} onChange={e => setChecked(e.target.checked)} />
<Checkbox label="禁用状态" disabled defaultChecked />
<Checkbox label="半选状态" indeterminate />`}
      />

      <DemoSection
        id="radio"
        title="Radio 单选框"
        desc="用于在一组互斥选项中选择一个，同一组 Radio 使用相同的 name 实现互斥。推荐选项不超过 6 个，否则考虑使用 Select。"
        preview={<div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Radio name="model" label="GPT-4o" value="option1" checked={radio === 'option1'} onChange={() => setRadio('option1')} />
          <Radio name="model" label="Claude 3.5 Sonnet" value="option2" checked={radio === 'option2'} onChange={() => setRadio('option2')} />
          <Radio name="model" label="通义千问 Max" value="option3" checked={radio === 'option3'} onChange={() => setRadio('option3')} />
          <Radio name="model" label="文心一言 4.0（暂不可用）" disabled />
        </div>}
        previewCol
        code={`<Radio name="model" label="GPT-4o" value="gpt4o" checked={model === 'gpt4o'} onChange={() => setModel('gpt4o')} />
<Radio name="model" label="Claude 3.5" value="claude" checked={model === 'claude'} onChange={() => setModel('claude')} />
<Radio name="model" label="禁用选项" disabled />`}
      />

      <DemoSection
        id="switch"
        title="Switch 开关"
        desc="Switch 用于表示某个功能是否开启，是二元状态切换的最佳选择。相比 Checkbox，Switch 更偏向「立即生效」的操作，如功能开关、权限切换。"
        preview={<div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <Switch size="sm" label="小尺寸" checked={sw2} onChange={e => setSw2(e.target.checked)} />
            <Switch label="默认尺寸" checked={sw1} onChange={e => setSw1(e.target.checked)} />
            <Switch size="lg" label="大尺寸" defaultChecked />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <Switch label="已启用知识库" defaultChecked />
            <Switch label="启用流式输出" defaultChecked />
            <Switch label="Dark Mode（禁用）" disabled defaultChecked />
          </div>
        </div>}
        previewCol
        code={`<Switch size="sm" label="小尺寸" />
<Switch label="默认尺寸" checked={enabled} onChange={e => setEnabled(e.target.checked)} />
<Switch size="lg" label="大尺寸" />
<Switch label="禁用状态" disabled defaultChecked />`}
      />

      <PropsTable props={selectProps} />
    </div>
  )
}
