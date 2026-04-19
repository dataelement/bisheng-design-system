import React from 'react'
import { PageHeader, DemoSection, PropsTable, type PropDef } from '../components/DemoComponents'
import { Switch } from '../components/Switch'

const switchProps: PropDef[] = [
  { name: 'label', type: 'ReactNode', desc: '标签文本' },
  { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", desc: '尺寸' },
  { name: 'checked', type: 'boolean', desc: '受控开关状态' },
  { name: 'defaultChecked', type: 'boolean', desc: '非受控默认开关状态' },
  { name: 'disabled', type: 'boolean', desc: '禁用状态' },
  { name: 'onCheckedChange', type: '(checked: boolean) => void', desc: '状态变化回调' },
]

export default function SwitchPage() {
  const [enabled, setEnabled] = React.useState(true)

  return (
    <div>
      <PageHeader
        badge="数据录入"
        title="Switch 开关"
        desc="Switch 用于表示某个功能是否开启，是二元状态切换的最佳选择。相比 Checkbox，Switch 更偏向「立即生效」的操作，如功能开关、权限切换。"
      />

      <DemoSection
        id="basic"
        title="基础用法"
        desc="最基本的开关，右侧文字实时反映当前状态。"
        preview={
          <Switch
            label={enabled ? '已开启' : '已关闭'}
            checked={enabled}
            onCheckedChange={setEnabled}
          />
        }
        code={`const [enabled, setEnabled] = React.useState(true)

<Switch
  label={enabled ? '已开启' : '已关闭'}
  checked={enabled}
  onCheckedChange={setEnabled}
/>`}
      />

      <DemoSection
        id="size"
        title="三种尺寸"
        desc="提供 sm、md、lg 三种尺寸。"
        preview={
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <Switch size="sm" label="小尺寸" defaultChecked />
            <Switch label="默认尺寸" defaultChecked />
            <Switch size="lg" label="大尺寸" defaultChecked />
          </div>
        }
        code={`<Switch size="sm" label="小尺寸" />
<Switch label="默认尺寸" />
<Switch size="lg" label="大尺寸" />`}
      />

      <DemoSection
        id="scenario"
        title="使用场景"
        desc="功能开关、权限配置等立即生效的场景。"
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Switch label="已启用知识库" defaultChecked />
            <Switch label="启用流式输出" defaultChecked />
          </div>
        }
        previewCol
        code={`<Switch label="已启用知识库" defaultChecked />
<Switch label="启用流式输出" defaultChecked />`}
      />

      <DemoSection
        id="disabled"
        title="禁用状态"
        desc="禁用后不可交互。"
        preview={
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <Switch label="禁用关" disabled />
            <Switch label="禁用开" disabled defaultChecked />
          </div>
        }
        code={`<Switch label="禁用关" disabled />
<Switch label="禁用开" disabled defaultChecked />`}
      />

      <PropsTable props={switchProps} />
    </div>
  )
}
