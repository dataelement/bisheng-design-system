import React from 'react'
import { PageHeader } from '../components/DemoComponents'

const spacings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 20, 24]
const radii = [
  { name: 'none', var: '--radius-none', px: '0', usage: '直角，用于特定列表项' },
  { name: 'sm', var: '--radius-sm', px: '2px', usage: '输入框 checkbox' },
  { name: 'base', var: '--radius-base', px: '4px', usage: '按钮、输入框、标签（默认）' },
  { name: 'md', var: '--radius-md', px: '6px', usage: '下拉菜单、Tooltip' },
  { name: 'lg', var: '--radius-lg', px: '8px', usage: '卡片、弹窗、表格' },
  { name: 'xl', var: '--radius-xl', px: '12px', usage: '大卡片、浮层面板' },
  { name: '2xl', var: '--radius-2xl', px: '16px', usage: '特大卡片' },
  { name: 'full', var: '--radius-full', px: '9999px', usage: 'Badge、Avatar、Switch' },
]
const shadows = [
  { name: 'sm', var: '--shadow-sm', usage: '微交互悬浮' },
  { name: 'base', var: '--shadow-base', usage: '卡片、弹出' },
  { name: 'md', var: '--shadow-md', usage: '下拉、浮层' },
  { name: 'lg', var: '--shadow-lg', usage: '侧边栏、全屏面板' },
  { name: 'xl', var: '--shadow-xl', usage: 'Modal 弹窗' },
]

export default function SpacingPage() {
  return (
    <div>
      <PageHeader
        badge="设计基础"
        title="Spacing / Radius / Shadow"
        desc="间距、圆角、阴影是构建视觉层次的核心维度。BISHENG 采用 4px 基础单元，所有间距值均为 4 的倍数，确保像素对齐和视觉一致性。"
      />

      <div className="ds-section">
        <h3 className="ds-section__title">间距系统</h3>
        <p className="ds-section__desc">基于 4px 基础单元（spacing-1 = 4px），提供 15 档间距。组件内边距、元素间距、版式节奏均取自此系统。</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {spacings.map(n => (
            <div key={n} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <code style={{ width: 120, fontSize: 12, fontFamily: 'monospace', color: 'var(--color-primary-500)', flexShrink: 0 }}>
                --spacing-{n}
              </code>
              <code style={{ width: 40, fontSize: 12, fontFamily: 'monospace', color: 'var(--text-tertiary)', flexShrink: 0 }}>
                {n * 4}px
              </code>
              <div style={{ width: n * 4, height: 20, background: 'var(--color-primary-400)', borderRadius: 3 }} />
            </div>
          ))}
        </div>
      </div>

      <div className="ds-section">
        <h3 className="ds-section__title">圆角系统</h3>
        <p className="ds-section__desc">统一的圆角系统确保组件风格一致。整体偏向现代、圆润的视觉风格，避免过于硬朗或过于圆润的极端。</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: 16 }}>
          {radii.map(r => (
            <div key={r.name} style={{ border: '1px solid var(--border-primary)', borderRadius: 8, overflow: 'hidden' }}>
              <div style={{ height: 64, background: 'var(--surface-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{
                  width: 40, height: 40,
                  background: 'var(--color-primary-100)',
                  border: '2px solid var(--color-primary-300)',
                  borderRadius: r.name === 'full' ? '9999px' : r.px,
                }} />
              </div>
              <div style={{ padding: '10px 12px', background: 'var(--surface-base)' }}>
                <code style={{ fontSize: 11, color: 'var(--color-primary-500)', display: 'block', fontFamily: 'monospace' }}>{r.px}</code>
                <div style={{ fontSize: 11, fontWeight: 600, marginTop: 2 }}>{r.name}</div>
                <div style={{ fontSize: 10, color: 'var(--text-tertiary)', marginTop: 2, lineHeight: 1.4 }}>{r.usage}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="ds-section">
        <h3 className="ds-section__title">阴影系统</h3>
        <p className="ds-section__desc">五层阴影对应不同海拔层级，从微妙到显著，用于建立 UI 的深度感和层次关系。</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 20 }}>
          {shadows.map(s => (
            <div key={s.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
              <div style={{
                width: 80, height: 80,
                background: 'var(--surface-base)',
                borderRadius: 12,
                boxShadow: `var(${s.var})`,
                border: '1px solid var(--border-primary)',
              }} />
              <div style={{ textAlign: 'center' }}>
                <code style={{ fontSize: 11, color: 'var(--color-primary-500)', display: 'block', fontFamily: 'monospace' }}>{s.var}</code>
                <div style={{ fontSize: 12, fontWeight: 600, marginTop: 2 }}>shadow-{s.name}</div>
                <div style={{ fontSize: 11, color: 'var(--text-tertiary)', marginTop: 2 }}>{s.usage}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
