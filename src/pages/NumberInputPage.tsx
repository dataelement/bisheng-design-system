import React from 'react'
import { PageHeader, DemoSection, PropsTable, type PropDef } from '../components/DemoComponents'
import { NumberInput } from '../components/NumberInput'

const propDefs: PropDef[] = [
  { name: 'value', type: 'number | null', desc: '受控模式的当前值' },
  { name: 'defaultValue', type: 'number', desc: '非受控模式的初始值' },
  { name: 'min', type: 'number', desc: '最小值' },
  { name: 'max', type: 'number', desc: '最大值' },
  { name: 'step', type: 'number', default: '1', desc: '每次增减的步长，可以为小数' },
  { name: 'precision', type: 'number', desc: '数值精度（小数位数）' },
  { name: 'size', type: "'small' | 'medium' | 'large'", default: "'medium'", desc: '输入框尺寸' },
  { name: 'label', type: 'string', desc: '标签文本' },
  { name: 'hint', type: 'string', desc: '描述文本，显示在标签右侧' },
  { name: 'feedback', type: 'string', desc: '验证反馈文本，显示在输入框下方' },
  { name: 'status', type: "'default' | 'error'", default: "'default'", desc: '验证状态' },
  { name: 'required', type: 'boolean', desc: '是否必填，显示红色星号' },
  { name: 'disabled', type: 'boolean', desc: '禁用状态' },
  { name: 'readOnly', type: 'boolean', desc: '只读状态' },
  { name: 'keyboard', type: 'boolean', default: 'true', desc: '是否启用键盘上下键增减' },
  { name: 'changeOnWheel', type: 'boolean', default: 'false', desc: '是否允许鼠标滚轮控制' },
  { name: 'onChange', type: '(value: number | null) => void', desc: '值变化回调' },
  { name: 'onStep', type: '(value, info) => void', desc: '点击箭头或键盘增减时的回调' },
  { name: 'placeholder', type: 'string', desc: '占位提示文本' },
]

export default function NumberInputPage() {
  const [controlled, setControlled] = React.useState<number | null>(3)

  return (
    <div>
      <PageHeader
        badge="数据录入"
        title="NumberInput 数字输入框"
        desc="通过鼠标或键盘，输入范围内的数值。hover 或聚焦时出现上下箭头控件，支持键盘方向键和鼠标滚轮操作。"
      />

      <DemoSection
        id="basic"
        title="基础用法"
        desc="最简单的数字输入框，hover 或聚焦后显示右侧上下箭头。"
        preview={
          <div style={{ width: 200 }}>
            <NumberInput defaultValue={3} />
          </div>
        }
        previewCol
        code={`<NumberInput defaultValue={3} />`}
      />

      <DemoSection
        id="size"
        title="三种尺寸"
        desc="提供 small (28px)、medium (32px)、large (40px) 三种尺寸，与 Input / Button 高度保持一致。"
        preview={<>
          <div style={{ width: 200 }}>
            <NumberInput size="small" defaultValue={10} placeholder="Small" />
          </div>
          <div style={{ width: 200 }}>
            <NumberInput size="medium" defaultValue={10} placeholder="Medium" />
          </div>
          <div style={{ width: 200 }}>
            <NumberInput size="large" defaultValue={10} placeholder="Large" />
          </div>
        </>}
        previewCol
        code={`<NumberInput size="small" defaultValue={10} />
<NumberInput size="medium" defaultValue={10} />
<NumberInput size="large" defaultValue={10} />`}
      />

      <DemoSection
        id="range"
        title="范围限制"
        desc="通过 min 和 max 限制输入范围。达到边界时对应箭头按钮变为禁用。"
        preview={
          <div style={{ width: 200 }}>
            <NumberInput min={1} max={10} defaultValue={5} />
          </div>
        }
        previewCol
        code={`<NumberInput min={1} max={10} defaultValue={5} />`}
      />

      <DemoSection
        id="step"
        title="步长与精度"
        desc="通过 step 设置每次增减的步长，precision 控制小数位数。"
        preview={<>
          <div style={{ width: 200 }}>
            <NumberInput label="步长 0.1" step={0.1} precision={1} defaultValue={1.0} />
          </div>
          <div style={{ width: 200 }}>
            <NumberInput label="步长 10" step={10} min={0} max={100} defaultValue={30} />
          </div>
        </>}
        previewCol
        code={`<NumberInput label="步长 0.1" step={0.1} precision={1} defaultValue={1.0} />
<NumberInput label="步长 10" step={10} min={0} max={100} defaultValue={30} />`}
      />

      <DemoSection
        id="label"
        title="标签 & 描述"
        desc="通过 label 添加标签，hint 在标签右侧显示描述文本，支持 required 必填标识。"
        preview={<>
          <div style={{ width: 240 }}>
            <NumberInput
              label="数量"
              hint="1~99"
              required
              min={1}
              max={99}
              defaultValue={1}
            />
          </div>
        </>}
        previewCol
        code={`<NumberInput
  label="数量"
  hint="1~99"
  required
  min={1}
  max={99}
  defaultValue={1}
/>`}
      />

      <DemoSection
        id="status"
        title="状态"
        desc="通过 status 控制错误状态，配合 feedback 展示错误反馈信息。"
        preview={<>
          <div style={{ width: 240 }}>
            <NumberInput
              label="正常状态"
              hint="选填"
              defaultValue={5}
            />
          </div>
          <div style={{ width: 240 }}>
            <NumberInput
              label="错误状态"
              status="error"
              defaultValue={-1}
              feedback="数值不能为负数"
            />
          </div>
        </>}
        previewCol
        code={`<NumberInput label="正常状态" hint="选填" defaultValue={5} />
<NumberInput label="错误状态" status="error" defaultValue={-1} feedback="数值不能为负数" />`}
      />

      <DemoSection
        id="disabled"
        title="禁用 & 只读"
        desc="禁用状态不可交互，只读状态可聚焦但不可修改。"
        preview={<>
          <div style={{ width: 200 }}>
            <NumberInput disabled defaultValue={8} placeholder="Disabled" />
          </div>
          <div style={{ width: 200 }}>
            <NumberInput readOnly defaultValue={42} placeholder="Read only" />
          </div>
        </>}
        previewCol
        code={`<NumberInput disabled defaultValue={8} />
<NumberInput readOnly defaultValue={42} />`}
      />

      <DemoSection
        id="controlled"
        title="受控模式"
        desc="通过 value 和 onChange 实现完全受控。"
        preview={
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ width: 200 }}>
              <NumberInput
                value={controlled}
                onChange={setControlled}
                min={0}
                max={100}
              />
            </div>
            <span style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-sm)' }}>
              当前值：{controlled ?? 'null'}
            </span>
          </div>
        }
        code={`const [value, setValue] = React.useState<number | null>(3)

<NumberInput
  value={value}
  onChange={setValue}
  min={0}
  max={100}
/>`}
      />

      <DemoSection
        id="wheel"
        title="鼠标滚轮"
        desc="开启 changeOnWheel 后，聚焦状态下可通过鼠标滚轮增减数值。"
        preview={
          <div style={{ width: 200 }}>
            <NumberInput changeOnWheel defaultValue={50} min={0} max={100} />
          </div>
        }
        previewCol
        code={`<NumberInput changeOnWheel defaultValue={50} min={0} max={100} />`}
      />

      <PropsTable props={propDefs} />
    </div>
  )
}
