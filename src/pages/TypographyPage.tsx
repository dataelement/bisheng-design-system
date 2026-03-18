import React from 'react'
import { PageHeader } from '../components/DemoComponents'

const typeScale = [
  { name: '24 (Large Title)', size: '24px', var: '--font-size-24', weight: '500', lh: '32px', usage: '页面大标题' },
  { name: '20 (Title)', size: '20px', var: '--font-size-20', weight: '500', lh: '28px', usage: '弹窗、卡片标题' },
  { name: '16 (Subtitle)', size: '16px', var: '--font-size-16', weight: '500', lh: '24px', usage: '重要正文、副标题' },
  { name: '14 (Body)', size: '14px', var: '--font-size-14', weight: '400', lh: '22px', usage: '通用段落正文（默认字号）' },
  { name: '12 (Caption)', size: '12px', var: '--font-size-12', weight: '400', lh: '20px', usage: '辅助说明、标签、时间戳' },
]

const weights = [
  { name: 'Light', var: '--font-weight-light', value: '300', usage: 'Large Display 可用（慎用）' },
  { name: 'Regular', var: '--font-weight-regular', value: '400', usage: '正文、说明文字（默认）' },
  { name: 'Medium', var: '--font-weight-medium', value: '500', usage: '导航项、列表 item、按钮' },
  { name: 'Semibold', var: '--font-weight-semibold', value: '600', usage: '卡片标题、弹窗标题、强调' },
  { name: 'Bold', var: '--font-weight-bold', value: '700', usage: '页面主标题、数字统计' },
]

export default function TypographyPage() {
  return (
    <div>
      <PageHeader
        badge="设计基础"
        title="Typography 字体排版"
        desc="BISHENG 强制指定了一套混合字体族链，优先使用系统英文字体并回落至中文字体。字号规范包含 12, 14, 16, 20, 24 这几个阶梯，分别对应着固定的绝对行高像素以保证最佳可读性。"
      />

      <div className="ds-section">
        <h3 className="ds-section__title">字体族</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div style={{ border: '1px solid var(--border-primary)', borderRadius: 12, padding: 24 }}>
            <div style={{ fontSize: 11, color: 'var(--text-tertiary)', marginBottom: 8, fontFamily: 'monospace' }}>--font-family-base</div>
            <p style={{ fontSize: 32, lineHeight: 1.2, fontWeight: 600, marginBottom: 12, fontFamily: 'var(--font-family-base)' }}>Apple System</p>
            <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              BISHENG AI Platform — 智能工作流平台
            </p>
            <p style={{ fontSize: 12, color: 'var(--text-tertiary)', marginTop: 12, fontFamily: 'monospace' }}>
              -apple-system, SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier, monospace
            </p>
          </div>
          <div style={{ border: '1px solid var(--border-primary)', borderRadius: 12, padding: 24 }}>
            <div style={{ fontSize: 11, color: 'var(--text-tertiary)', marginBottom: 8, fontFamily: 'monospace' }}>--font-family-mono</div>
            <p style={{ fontSize: 32, lineHeight: 1.2, fontWeight: 600, marginBottom: 12, fontFamily: 'var(--font-family-mono)' }}>Mono</p>
            <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6, fontFamily: 'var(--font-family-mono)' }}>
              const api_key = "sk-xxxx"
            </p>
            <p style={{ fontSize: 12, color: 'var(--text-tertiary)', marginTop: 12, fontFamily: 'monospace' }}>
              'JetBrains Mono', 'Fira Code', Consolas, …
            </p>
          </div>
        </div>
      </div>

      <div className="ds-section">
        <h3 className="ds-section__title">字号系统</h3>
        <p className="ds-section__desc">提供 9 个字号梯度，Body（14px）为默认正文字号，向上用于标题，向下用于辅助信息。</p>
        <div style={{ border: '1px solid var(--border-primary)', borderRadius: 12, overflow: 'hidden' }}>
          {typeScale.map((t, i) => (
            <div
              key={t.name}
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: 24,
                padding: '16px 24px',
                borderBottom: i < typeScale.length - 1 ? '1px solid var(--border-primary)' : 'none',
                background: i % 2 === 0 ? 'var(--surface-base)' : 'var(--surface-muted)',
              }}
            >
              <div style={{ width: 100, flex: '0 0 100px' }}>
                <div style={{ fontSize: 11, color: 'var(--text-tertiary)', fontFamily: 'monospace' }}>{t.size}</div>
                <div style={{ fontSize: 11, color: 'var(--text-tertiary)', fontFamily: 'monospace' }}>/{t.lh}</div>
              </div>
              <div style={{ flex: 1 }}>
                <span style={{
                  fontSize: t.size,
                  fontWeight: Number(t.weight),
                  color: 'var(--text-primary)',
                  lineHeight: t.lh,
                }}>
                  {t.name} — BISHENG Design System
                </span>
              </div>
              <div style={{ width: 200, flex: '0 0 200px', textAlign: 'right' }}>
                <div style={{ fontSize: 11, color: 'var(--text-tertiary)' }}>{t.usage}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="ds-section">
        <h3 className="ds-section__title">字重</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, border: '1px solid var(--border-primary)', borderRadius: 12, overflow: 'hidden' }}>
          {weights.map((w, i) => (
            <div key={w.name} style={{
              display: 'flex', alignItems: 'center', gap: 24, padding: '14px 24px',
              borderBottom: i < weights.length - 1 ? '1px solid var(--border-primary)' : 'none',
              background: i % 2 === 0 ? 'var(--surface-base)' : 'var(--surface-muted)',
            }}>
              <div style={{ width: 100 }}>
                <code style={{ fontSize: 11, color: 'var(--color-primary-500)', fontFamily: 'monospace' }}>{w.value}</code>
                <div style={{ fontSize: 12, color: 'var(--text-tertiary)' }}>{w.name}</div>
              </div>
              <div style={{ flex: 1, fontSize: 18, fontWeight: Number(w.value), color: 'var(--text-primary)' }}>
                BISHENG 智能平台
              </div>
              <div style={{ fontSize: 12, color: 'var(--text-tertiary)' }}>{w.usage}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
