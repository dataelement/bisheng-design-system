import React from 'react'
import { Link } from 'react-router-dom'
import { Palette, Type, Box, Layers, LayoutGrid, MousePointerClick, ToggleLeft, Tag, TableProperties, Square, AlignLeft, Monitor, Download } from 'lucide-react'
import { Button } from '../components/Button'
import { Badge } from '../components/Badge'

const tokenSections = [
  { icon: Palette, title: '颜色', desc: 'Primary、Success、Warning、Danger、Neutral 五色系，各 10 梯度', path: '/colors', badge: '5 色系' },
  { icon: Type, title: '字体排版', desc: '9 档字号梯度，5 种字重，中英文双语优化', path: '/typography', badge: '正式版' },
  { icon: Box, title: '间距 / 圆角 / 阴影', desc: '4px 基础单元，15 档间距，8 种圆角，5 层阴影', path: '/spacing', badge: '正式版' },
  { icon: Layers, title: '图标', desc: '基于 Lucide Icons，可搜索，点击复制 JSX', path: '/icons', badge: 'Lucide' },
]

const compSections = [
  { icon: MousePointerClick, title: 'Button 按钮', desc: '6 种变体，4 种尺寸，Loading & 禁用状态，图标支持', path: '/components/button', badge: 'v1' },
  { icon: AlignLeft, title: 'Input 输入框', desc: '多尺寸，前后缀，状态（error/success），Textarea', path: '/components/input', badge: 'v1' },
  { icon: ToggleLeft, title: 'Select / Checkbox / Radio / Switch', desc: '常用表单选择控件全覆盖', path: '/components/select', badge: 'v1' },
  { icon: Tag, title: 'Badge / Tag / Avatar', desc: '状态徽标、分类标签、用户头像', path: '/components/badge', badge: 'v1' },
  { icon: Square, title: 'Modal 弹窗', desc: '3 种尺寸，键盘关闭，危险操作确认', path: '/components/modal', badge: 'v1' },
  { icon: TableProperties, title: 'Table 表格', desc: '列定义，客户端排序，空状态，操作列', path: '/components/table', badge: 'v1' },
]

export default function OverviewPage() {
  const downloadTokens = () => {
    const link = document.createElement('a')
    link.href = '/tokens.json'
    link.download = 'bisheng-tokens.json'
    link.click()
  }

  return (
    <div>
      {/* Hero */}
      <div style={{
        background: 'linear-gradient(135deg, var(--color-primary-500) 0%, var(--color-primary-700) 100%)',
        borderRadius: 20,
        padding: '48px 48px',
        marginBottom: 48,
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', right: -60, top: -60,
          width: 240, height: 240, borderRadius: '50%',
          background: 'rgba(255,255,255,0.05)',
        }} />
        <div style={{
          position: 'absolute', right: 80, bottom: -40,
          width: 180, height: 180, borderRadius: '50%',
          background: 'rgba(255,255,255,0.04)',
        }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
            <div style={{ background: 'rgba(255,255,255,0.2)', borderRadius: 10, padding: '6px 14px', fontSize: 13, color: 'white', fontWeight: 500 }}>
              v0.1.0 · Beta
            </div>
            <Badge variant="default" style={{ background: 'rgba(255,255,255,0.15)', color: 'white' } as React.CSSProperties}>
              支持 Light / Dark Mode
            </Badge>
          </div>
          <h1 style={{ fontSize: 40, fontWeight: 700, color: 'white', marginBottom: 12, lineHeight: 1.2 }}>
            BISHENG Design System
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, maxWidth: 560, marginBottom: 28 }}>
            面向 BISHENG 企业级 AI 平台的统一设计系统，为设计师和前端工程师提供一致的设计语言、组件规范与开发资源。
          </p>
          <div style={{ display: 'flex', gap: 12 }}>
            <Button
              variant="outline"
              style={{ background: 'white', color: 'var(--color-primary-600)', border: 'none' } as React.CSSProperties}
              leftIcon={<Monitor size={15} />}
            >
              查看组件
            </Button>
            <Button
              variant="ghost"
              style={{ color: 'white', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' } as React.CSSProperties}
              leftIcon={<Download size={15} />}
              onClick={downloadTokens}
            >
              下载 Figma Tokens
            </Button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 48 }}>
        {[
          { num: '10', label: '基础组件', sub: 'v1.0 已覆盖' },
          { num: '50+', label: 'Design Token', sub: '颜色 / 字体 / 间距' },
          { num: '80+', label: '图标', sub: 'Lucide 精选' },
          { num: '2', label: '主题模式', sub: 'Light / Dark' },
        ].map(s => (
          <div key={s.label} style={{ border: '1px solid var(--border-primary)', borderRadius: 12, padding: '20px 24px' }}>
            <div style={{ fontSize: 32, fontWeight: 700, color: 'var(--color-primary-500)', lineHeight: 1 }}>{s.num}</div>
            <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-primary)', marginTop: 8 }}>{s.label}</div>
            <div style={{ fontSize: 12, color: 'var(--text-tertiary)', marginTop: 2 }}>{s.sub}</div>
          </div>
        ))}
      </div>

      {/* Token Sections */}
      <div style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 16 }}>基础规范</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
          {tokenSections.map(s => (
            <Link key={s.path} to={s.path} style={{ textDecoration: 'none' }}>
              <div style={{
                border: '1px solid var(--border-primary)', borderRadius: 12, padding: '20px 20px',
                display: 'flex', gap: 16, alignItems: 'flex-start',
                transition: 'all 0.15s', cursor: 'pointer',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--shadow-md)'; (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--color-primary-300)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = ''; (e.currentTarget as HTMLDivElement).style.borderColor = '' }}
              >
                <div style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--color-primary-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <s.icon size={20} color="var(--color-primary-500)" />
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                    <span style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-primary)' }}>{s.title}</span>
                    <Badge variant="primary">{s.badge}</Badge>
                  </div>
                  <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.5 }}>{s.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Component Sections */}
      <div>
        <h2 style={{ fontSize: 20, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 16 }}>组件</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
          {compSections.map(s => (
            <Link key={s.path} to={s.path} style={{ textDecoration: 'none' }}>
              <div style={{
                border: '1px solid var(--border-primary)', borderRadius: 12, padding: '20px 20px',
                display: 'flex', gap: 16, alignItems: 'flex-start',
                transition: 'all 0.15s',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--shadow-md)'; (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--color-primary-300)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = ''; (e.currentTarget as HTMLDivElement).style.borderColor = '' }}
              >
                <div style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--surface-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <s.icon size={20} color="var(--text-secondary)" />
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                    <span style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-primary)' }}>{s.title}</span>
                    <Badge variant="default">{s.badge}</Badge>
                  </div>
                  <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.5 }}>{s.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
