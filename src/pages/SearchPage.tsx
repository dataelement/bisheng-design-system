import React from 'react'
import { PageHeader, DemoSection, PropsTable, type PropDef } from '../components/DemoComponents'
import { Search, SearchToggle } from '../components/Search'

const searchProps: PropDef[] = [
  { name: 'size', type: '"small" | "medium" | "large"', default: '"medium"', desc: '搜索框尺寸' },
  { name: 'status', type: '"default" | "error" | "success"', default: '"default"', desc: '校验状态' },
  { name: 'label', type: 'string', desc: '标签文本' },
  { name: 'hint', type: 'string', desc: '标签右侧描述' },
  { name: 'feedback', type: 'string', desc: '输入框下方反馈信息' },
  { name: 'required', type: 'boolean', desc: '是否必填' },
  { name: 'allowClear', type: 'boolean', default: 'true', desc: '是否显示清除按钮' },
  { name: 'onClear', type: '() => void', desc: '清除时的回调' },
  { name: 'placeholder', type: 'string', desc: '占位文本' },
  { name: 'disabled', type: 'boolean', desc: '禁用状态' },
  { name: 'readOnly', type: 'boolean', desc: '只读状态' },
]

export default function SearchPage() {
  const [val, setVal] = React.useState('')

  return (
    <div>
      <PageHeader
        badge="数据录入"
        title="Search 搜索框"
        desc="带有搜索图标和清除功能的输入框，适用于搜索场景。默认样式与 Input 一致，内置放大镜前缀图标，输入内容后尾部显示清除按钮。"
      />

      <DemoSection
        title="基础用法"
        desc="默认带有搜索图标，输入内容后显示清除按钮。"
        preview={
          <Search placeholder="搜索..." style={{ width: 320 }} />
        }
        code={`<Search placeholder="搜索..." />`}
      />

      <DemoSection
        title="三种尺寸"
        desc="提供 small、medium、large 三种尺寸。"
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 320 }}>
            <Search size="small" placeholder="Small 搜索" />
            <Search size="medium" placeholder="Medium 搜索" />
            <Search size="large" placeholder="Large 搜索" />
          </div>
        }
        previewCol
        code={`<Search size="small" placeholder="Small 搜索" />
<Search size="medium" placeholder="Medium 搜索" />
<Search size="large" placeholder="Large 搜索" />`}
      />

      <DemoSection
        title="受控模式"
        desc="通过 value 和 onChange 实现受控输入，点击清除按钮可触发 onClear 回调。"
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: 320 }}>
            <Search
              value={val}
              onChange={(e) => setVal(e.target.value)}
              onClear={() => setVal('')}
              placeholder="输入关键词搜索..."
            />
            <span style={{ fontSize: 13, color: 'var(--text-tertiary)' }}>
              当前值：{val || '（空）'}
            </span>
          </div>
        }
        previewCol
        code={`const [val, setVal] = React.useState('')

<Search
  value={val}
  onChange={(e) => setVal(e.target.value)}
  onClear={() => setVal('')}
  placeholder="输入关键词搜索..."
/>`}
      />

      <DemoSection
        title="标签与反馈"
        desc="搭配 label、hint、feedback 使用。"
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20, width: 360 }}>
            <Search label="搜索知识库" hint="支持模糊匹配" placeholder="输入关键词..." />
            <Search label="搜索" status="error" feedback="请输入至少 2 个字符" placeholder="搜索..." required />
          </div>
        }
        previewCol
        code={`<Search label="搜索知识库" hint="支持模糊匹配" placeholder="输入关键词..." />
<Search label="搜索" status="error" feedback="请输入至少 2 个字符" placeholder="搜索..." required />`}
      />

      <DemoSection
        title="禁用与只读"
        desc="禁用状态和只读状态不显示清除按钮。"
        preview={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 320 }}>
            <Search placeholder="禁用状态" disabled defaultValue="无法编辑" />
            <Search placeholder="只读状态" readOnly defaultValue="只读内容" />
          </div>
        }
        previewCol
        code={`<Search placeholder="禁用状态" disabled defaultValue="无法编辑" />
<Search placeholder="只读状态" readOnly defaultValue="只读内容" />`}
      />

      <PropsTable props={searchProps} />

      {/* ---- SearchToggle ---- */}
      <div style={{ marginTop: 48 }}>
        <PageHeader
          badge="数据录入"
          title="SearchToggle 可收起搜索框"
          desc="默认以正方形图标按钮呈现，点击后向右展开为完整搜索框。适合工具栏、顶栏等空间紧凑的场景。"
        />
      </div>

      <DemoSection
        title="基础用法"
        desc="点击放大镜按钮展开搜索框，失焦或按 Esc 收起（有内容时不会自动收起）。"
        preview={
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'flex-start', flex: 1 }}>
              <span style={{ fontSize: 12, color: 'var(--text-secondary)' }}>向右展开（默认）</span>
              <SearchToggle placeholder="搜索..." />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'flex-end', flex: 1 }}>
              <span style={{ fontSize: 12, color: 'var(--text-secondary)' }}>向左展开</span>
              <SearchToggle direction="left" placeholder="搜索..." />
            </div>
          </div>
        }
        code={`<SearchToggle placeholder="搜索..." />
<SearchToggle direction="left" placeholder="搜索..." />`}
      />

      <DemoSection
        title="三种尺寸"
        desc="small（28×28）、medium（32×32）、large（40×40）。"
        preview={
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <SearchToggle size="small" placeholder="Small" />
            <SearchToggle size="medium" placeholder="Medium" />
            <SearchToggle size="large" placeholder="Large" />
          </div>
        }
        code={`<SearchToggle size="small" placeholder="Small" />
<SearchToggle size="medium" placeholder="Medium" />
<SearchToggle size="large" placeholder="Large" />`}
      />

      <DemoSection
        title="自定义展开宽度"
        desc="通过 expandedWidth 设定展开后的宽度。"
        preview={
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <SearchToggle expandedWidth={200} placeholder="200px" />
            <SearchToggle expandedWidth={360} placeholder="360px" />
          </div>
        }
        code={`<SearchToggle expandedWidth={200} placeholder="200px" />
<SearchToggle expandedWidth={360} placeholder="360px" />`}
      />

      <PropsTable
        props={[
          { name: 'size', type: '"small" | "medium" | "large"', default: '"medium"', desc: '按钮/输入框尺寸' },
          { name: 'direction', type: '"left" | "right"', default: '"right"', desc: '展开方向：right 向右展开，left 向左展开' },
          { name: 'expandedWidth', type: 'number | string', default: '280', desc: '展开后的宽度' },
          { name: 'allowClear', type: 'boolean', default: 'true', desc: '是否显示清除按钮' },
          { name: 'onClear', type: '() => void', desc: '清除时的回调' },
          { name: 'onExpandedChange', type: '(expanded: boolean) => void', desc: '展开/收起状态变化回调' },
          { name: 'placeholder', type: 'string', desc: '占位文本' },
          { name: 'disabled', type: 'boolean', desc: '禁用状态' },
        ]}
      />
    </div>
  )
}
