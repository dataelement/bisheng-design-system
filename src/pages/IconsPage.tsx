import React from 'react'
import { PageHeader } from '../components/DemoComponents'
import * as LucideIcons from 'lucide-react'
import { Search } from 'lucide-react'
import { Input } from '../components/Input'

// A curated list of icons relevant to BISHENG
const iconList = [
  'Search', 'Plus', 'Minus', 'X', 'Check', 'ChevronDown', 'ChevronUp', 'ChevronLeft', 'ChevronRight',
  'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'MoreHorizontal', 'MoreVertical',
  'Settings', 'Settings2', 'Sliders', 'SlidersHorizontal',
  'User', 'Users', 'UserPlus', 'UserMinus', 'UserCheck',
  'Home', 'LayoutDashboard', 'Grid', 'List', 'Table2', 'Columns',
  'Bot', 'Cpu', 'Zap', 'Brain', 'Workflow', 'GitBranch', 'GitMerge',
  'Database', 'Server', 'Cloud', 'CloudUpload', 'CloudDownload',
  'File', 'FileText', 'FileCode', 'FilePlus', 'FolderOpen', 'Folder',
  'Download', 'Upload', 'Share', 'Share2', 'Copy', 'Clipboard',
  'Edit', 'Pencil', 'Trash', 'Trash2', 'Archive', 'RefreshCw', 'RotateCcw',
  'Eye', 'EyeOff', 'Lock', 'Unlock', 'Shield', 'ShieldCheck', 'Key',
  'Bell', 'BellOff', 'Mail', 'MessageSquare', 'MessageCircle',
  'Star', 'Heart', 'Bookmark', 'Flag', 'Tag', 'Hash',
  'Play', 'Pause', 'Stop', 'SkipForward',
  'AlertCircle', 'AlertTriangle', 'Info', 'HelpCircle', 'CheckCircle', 'XCircle',
  'LogIn', 'LogOut', 'Link', 'ExternalLink', 'Globe', 'Wifi',
  'ChartBar', 'BarChart2', 'LineChart', 'PieChart', 'TrendingUp', 'TrendingDown',
  'Code', 'Code2', 'Terminal', 'Braces', 'Brackets',
  'Image', 'Video', 'Mic', 'Volume2',
  'Moon', 'Sun', 'Palette', 'Layout',
]

export default function IconsPage() {
  const [query, setQuery] = React.useState('')
  const [copied, setCopied] = React.useState<string | null>(null)

  const filtered = iconList.filter(name => name.toLowerCase().includes(query.toLowerCase()))

  const handleCopy = (name: string) => {
    navigator.clipboard.writeText(`<${name} />`)
    setCopied(name)
    setTimeout(() => setCopied(null), 1500)
  }

  return (
    <div>
      <PageHeader
        badge="设计基础"
        title="Icons 图标"
        desc="BISHENG 使用 Lucide Icons 作为图标库，提供一致的线性风格，支持任意尺寸和颜色自定义。点击任意图标可复制 JSX 代码。"
      />

      <div className="ds-section">
        <div style={{ marginBottom: 20 }}>
          <Input
            prefix={<Search size={14} />}
            placeholder="搜索图标..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            style={{ maxWidth: 320 }}
          />
        </div>

        <div style={{ fontSize: 13, color: 'var(--text-tertiary)', marginBottom: 16 }}>
          共 {filtered.length} 个图标（使用方式：<code style={{ fontSize: 12, background: 'var(--surface-subtle)', padding: '1px 6px', borderRadius: 3 }}>import {'{ IconName }'} from 'lucide-react'</code>）
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(90px, 1fr))', gap: 8 }}>
          {filtered.map(name => {
            const IconComponent = (LucideIcons as Record<string, React.ComponentType<{ size?: number }>>)[name]
            if (!IconComponent) return null
            const isCopied = copied === name
            return (
              <button
                key={name}
                onClick={() => handleCopy(name)}
                title={`复制 <${name} />`}
                style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                  gap: 6, padding: '12px 8px', border: '1px solid var(--border-primary)',
                  borderRadius: 8, cursor: 'pointer', background: isCopied ? 'var(--color-primary-50)' : 'var(--surface-base)',
                  transition: 'all 0.15s', color: isCopied ? 'var(--color-primary-500)' : 'var(--text-secondary)',
                }}
                onMouseEnter={e => { if (!isCopied) { (e.currentTarget as HTMLButtonElement).style.background = 'var(--surface-muted)'; (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--color-primary-300)' }}}
                onMouseLeave={e => { if (!isCopied) { (e.currentTarget as HTMLButtonElement).style.background = ''; (e.currentTarget as HTMLButtonElement).style.borderColor = '' }}}
              >
                <IconComponent size={20} />
                <span style={{ fontSize: 10, textAlign: 'center', lineHeight: 1.3, wordBreak: 'break-all' }}>
                  {isCopied ? '已复制!' : name}
                </span>
              </button>
            )
          })}
          {filtered.length === 0 && (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: 40, color: 'var(--text-tertiary)' }}>
              没有找到匹配「{query}」的图标
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
