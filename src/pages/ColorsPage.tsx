import React from 'react'
import { PageHeader } from '../components/DemoComponents'
import { Button } from '../components/Button'
import { Download } from 'lucide-react'

const colors = [
  { name: 'Primary', base: 'primary', label: 'BISHENG Blue', desc: '品牌主色，用于主要按钮、链接、焦点高亮', steps: [25, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900] },
  { name: 'Purple', base: 'purple', label: 'Accent Purple', desc: '辅助强调色，用于品牌延展、活动氛围和次级视觉强调' },
  { name: 'Yellow', base: 'yellow', label: 'Golden Yellow', desc: '明亮强调色，用于高可见提醒、数据高亮和辅助视觉点缀' },
  { name: 'Success', base: 'success', label: 'Success Green', desc: '成功状态色，用于完成、通过、正常运行' },
  { name: 'Warning', base: 'warning', label: 'Warning Orange', desc: '警告状态色，用于待确认、即将到期' },
  { name: 'Danger', base: 'danger', label: 'Danger Red', desc: '危险状态色，用于错误、失败、删除操作' },
  { name: 'Neutral', base: 'gray', label: 'Neutral Gray', desc: '中性色，用于文字、边框、基础背景，以及承接部分 surface 场景', steps: [0, 25, 50, 100, 150, 200, 300, 400, 500, 600, 700, 800, 900] },
]

const defaultSteps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

const semanticTokens = [
  { group: 'Surface', token: '--surface-base', desc: '基础表面，用于页面、卡片、输入框默认背景', type: 'bg', paletteRef: 'gray-0' },
  { group: 'Surface', token: '--surface-muted', desc: '弱化表面，用于侧边栏、表头，以及中性禁用表面', type: 'bg', paletteRef: 'gray-100(light) / gray-50(dark)' },
  { group: 'Surface', token: '--surface-subtle', desc: '大面积弱对比表面，用于大背景区、Tag、次级承载', type: 'bg', paletteRef: 'gray-25(light) / gray-100(dark)' },
  { group: 'Surface', token: '--surface-hover', desc: '轻交互 hover 表面，用于列表项、轻量按钮、关闭按钮等 hover 背景', type: 'bg', paletteRef: 'gray-50(light) / gray-150(dark)' },
  { group: 'Surface', token: '--surface-selected', desc: '选中态表面，用于导航 / Menu item 的选中背景', type: 'bg', paletteRef: 'primary-100(light) / primary-25(dark)' },
  { group: 'Text', token: '--text-primary', desc: '主要文字颜色', type: 'text', paletteRef: 'gray-800' },
  { group: 'Text', token: '--text-secondary', desc: '次要文字颜色', type: 'text', paletteRef: 'gray-600' },
  { group: 'Text', token: '--text-tertiary', desc: '辅助文字颜色（提示、占位）', type: 'text', paletteRef: 'gray-400' },
  { group: 'Text', token: '--text-disabled', desc: '禁用文字颜色', type: 'text', paletteRef: 'gray-300' },
  { group: 'Text', token: '--text-inverse', desc: '反白文字颜色', type: 'text', paletteRef: 'gray-0' },
  { group: 'Text', token: '--text-link', desc: '链接文字颜色', type: 'text', paletteRef: 'primary-700' },
  { group: 'Border', token: '--border-primary', desc: '主边框颜色', type: 'border', paletteRef: 'gray-200' },
  { group: 'Border', token: '--border-secondary', desc: '次要边框颜色（输入框）', type: 'border', paletteRef: 'gray-300' },
  { group: 'Border', token: '--border-focus', desc: '聚焦态边框颜色', type: 'border', paletteRef: 'primary-700' },
  { group: 'Fill', token: '--fill-primary', desc: '主填充色', type: 'bg', paletteRef: 'primary-700' },
  { group: 'Fill', token: '--fill-hover', desc: '悬浮填充色', type: 'bg', paletteRef: 'primary-800' },
  { group: 'Fill', token: '--fill-active', desc: '按下填充色', type: 'bg', paletteRef: 'primary-900' },
  { group: 'Fill', token: '--fill-disabled', desc: '强调型填充的禁用态，用于主按钮、已选控件等高强调元素', type: 'bg', paletteRef: 'gray-300' },
  { group: 'Action', token: '--action-fg-default', desc: '轻量操作前景色，适用于 icon 按钮和文字按钮默认态（灰黑场景）', type: 'text', paletteRef: 'gray-600' },
  { group: 'Action', token: '--action-fg-default-hover', desc: '轻量操作前景色 hover，适用于 icon 按钮和文字按钮（灰黑场景）', type: 'text', paletteRef: 'gray-800' },
  { group: 'Action', token: '--action-fg-brand', desc: '品牌操作前景色，适用于 icon 按钮和文字按钮默认态（蓝色场景）', type: 'text', paletteRef: 'primary-700' },
  { group: 'Action', token: '--action-fg-brand-hover', desc: '品牌操作前景色 hover，适用于 icon 按钮和文字按钮（蓝色场景）', type: 'text', paletteRef: 'primary-800' },
  { group: 'Action', token: '--action-fg-disabled', desc: '轻量操作禁用态前景色', type: 'text', paletteRef: 'gray-300' },
]

const semanticTokenGroups = ['Surface', 'Text', 'Border', 'Fill', 'Action'].map(group => ({
  group,
  tokens: semanticTokens.filter(token => token.group === group),
}))

function useCssVarValues(varNames: string[]) {
  const [values, setValues] = React.useState<Record<string, string>>({})

  React.useEffect(() => {
    const readValues = () => {
      const styles = getComputedStyle(document.documentElement)
      const nextValues = varNames.reduce<Record<string, string>>((acc, varName) => {
        acc[varName] = styles.getPropertyValue(varName).trim()
        return acc
      }, {})
      setValues(nextValues)
    }

    readValues()

    const observer = new MutationObserver(readValues)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class', 'style'] })

    return () => observer.disconnect()
  }, [varNames])

  return values
}

export default function ColorsPage() {
  const colorVarNames = React.useMemo(
    () => colors.flatMap(color => (color.steps ?? defaultSteps).map(step => `--color-${color.base}-${step}`)),
    []
  )
  const semanticVarNames = React.useMemo(() => semanticTokens.map(token => token.token), [])
  const allVarNames = React.useMemo(() => [...colorVarNames, ...semanticVarNames], [colorVarNames, semanticVarNames])
  const cssVarValues = useCssVarValues(allVarNames)

  const downloadTokens = (fileName: string) => {
    const link = document.createElement('a')
    link.href = `/${fileName}`
    link.download = fileName
    link.click()
  }

  return (
    <div>
      <PageHeader
        badge="设计基础"
        title="Color 颜色系统"
        desc="BISHENG 颜色系统以「功能语义」为核心，每种颜色在设计和代码中具有明确的使用场合。提供 CSS 变量实现动态主题切换，所有颜色均支持 Light / Dark Mode。"
      />

      <div className="ds-section">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <h3 className="ds-section__title" style={{ marginBottom: 0 }}>颜色色板</h3>
          <div style={{ display: 'flex', gap: 8 }}>
            <Button variant="outline" size="sm" leftIcon={<Download size={13} />} onClick={() => downloadTokens('figma-variables.light.json')}>
              下载 Light Mode
            </Button>
            <Button variant="outline" size="sm" leftIcon={<Download size={13} />} onClick={() => downloadTokens('figma-variables.dark.json')}>
              下载 Dark Mode
            </Button>
          </div>
        </div>
        <p className="ds-section__desc">颜色色板以主梯度为基础，并在需要时补充中间 step；700 为品牌基准色。Figma Variables 导入时请分别导入 Light / Dark 两个 JSON 文件，每个文件对应一个 mode。</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          {colors.map(color => (
            <div key={color.base}>
              <div style={{ marginBottom: 10 }}>
                <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-primary)' }}>{color.name}</span>
                <span style={{ fontSize: 12, color: 'var(--text-tertiary)', marginLeft: 8 }}>{color.label}</span>
                <p style={{ fontSize: 12, color: 'var(--text-tertiary)', marginTop: 2 }}>{color.desc}</p>
              </div>
              <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                {(color.steps ?? defaultSteps).map(step => (
                  <ColorSwatch key={step} base={color.base} step={step} hex={cssVarValues[`--color-${color.base}-${step}`]} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="ds-section">
        <h3 className="ds-section__title">语义化 Token</h3>
        <p className="ds-section__desc">语义化 Token 根据使用场景命名，与具体颜色值解耦，切换 Dark Mode 时自动替换为对应的深色值。开发时应优先使用语义 Token。</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {semanticTokenGroups.map(({ group, tokens }) => (
            <div key={group}>
              <div style={{ marginBottom: 10 }}>
                <h4 style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 4 }}>{group}</h4>
                <p style={{ fontSize: 12, color: 'var(--text-tertiary)' }}>当前分类包含 {tokens.length} 个 token</p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 12 }}>
                {tokens.map(st => (
                  <SemanticSwatch key={st.token} {...st} value={cssVarValues[st.token]} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ColorSwatch({ base, step, hex }: { base: string; step: string | number; hex?: string }) {
  const varName = `--color-${base}-${step}`
  const [copied, setCopied] = React.useState(false)

  const handleClick = () => {
    navigator.clipboard.writeText(`var(${varName})`)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div
      onClick={handleClick}
      style={{
        flex: '1 1 60px',
        minWidth: 60,
        cursor: 'pointer',
        borderRadius: 8,
        overflow: 'hidden',
        border: '1px solid var(--border-primary)',
        transition: 'transform 0.15s, box-shadow 0.15s',
      }}
      title={copied ? '已复制！' : `点击复制 var(${varName})`}
      onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--shadow-md)' }}
      onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = ''; (e.currentTarget as HTMLDivElement).style.boxShadow = '' }}
    >
      <div style={{ height: 52, background: `var(${varName})` }} />
      <div style={{ padding: '6px 8px', background: 'var(--surface-muted)' }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-primary)' }}>{step}</div>
        <div style={{ fontSize: 10, color: 'var(--text-tertiary)', marginTop: 1, fontFamily: 'var(--font-family-mono)' }}>
          {hex || '—'}
        </div>
        {copied && <div style={{ fontSize: 10, color: 'var(--color-primary-500)' }}>已复制</div>}
      </div>
    </div>
  )
}

function SemanticSwatch({
  token,
  desc,
  type,
  value,
  paletteRef,
}: {
  token: string
  desc: string
  type: string
  value?: string
  paletteRef: string
}) {
  const [copied, setCopied] = React.useState(false)
  const handleClick = () => {
    navigator.clipboard.writeText(`var(${token})`)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div
      onClick={handleClick}
      style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 14px', border: '1px solid var(--border-primary)', borderRadius: 8, cursor: 'pointer', transition: 'background 0.15s' }}
      onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.background = 'var(--surface-muted)'}
      onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.background = ''}
    >
      <div style={{
        width: 32, height: 32, borderRadius: 6, border: '1px solid var(--border-primary)', flexShrink: 0,
        background: type === 'bg' ? `var(${token})` : type === 'text' ? 'var(--surface-subtle)' : 'var(--surface-base)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {type === 'text' && <span style={{ fontSize: 12, fontWeight: 700, color: `var(${token})` }}>A</span>}
        {type === 'border' && <div style={{ width: 20, height: 1, background: `var(${token})` }} />}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <code style={{ fontSize: 11, color: 'var(--color-primary-500)', fontFamily: 'var(--font-family-mono)', display: 'block' }}>
          {copied ? '✓ 已复制' : token}
        </code>
        <div style={{ fontSize: 11, color: 'var(--text-tertiary)', marginTop: 1 }}>{desc}</div>
        <div style={{ fontSize: 10, color: 'var(--text-secondary)', marginTop: 4, fontFamily: 'var(--font-family-mono)' }}>
          Hex: {value || '—'}
        </div>
        <div style={{ fontSize: 10, color: 'var(--text-secondary)', marginTop: 2, fontFamily: 'var(--font-family-mono)' }}>
          Palette: {paletteRef}
        </div>
      </div>
    </div>
  )
}
