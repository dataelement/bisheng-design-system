import React from 'react'
import { Routes, Route, Link, useLocation, Navigate } from 'react-router-dom'
import { 
  LayoutDashboard, Palette, Type, Box, Layers, 
  MousePointerClick, AlignLeft, ToggleLeft, Tag as TagIcon, 
  Square, TableProperties, Moon, Sun, Github, ExternalLink
} from 'lucide-react'

// Pages
import OverviewPage from './pages/OverviewPage'
import ColorsPage from './pages/ColorsPage'
import TypographyPage from './pages/TypographyPage'
import SpacingPage from './pages/SpacingPage'
import IconsPage from './pages/IconsPage'
import ButtonPage from './pages/ButtonPage'
import InputPage from './pages/InputPage'
import SelectPage from './pages/SelectPage'
import BadgePage from './pages/BadgePage'
import ModalPage from './pages/ModalPage'
import TablePage from './pages/TablePage'

export default function App() {
  const [isDark, setIsDark] = React.useState(false)
  const location = useLocation()

  React.useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  const toggleTheme = () => setIsDark(!isDark)

  const navItems = [
    { title: '概览', items: [
      { path: '/overview', label: 'Overview 概览', icon: LayoutDashboard },
    ]},
    { title: '设计基础 (Tokens)', items: [
      { path: '/colors', label: 'Color 颜色', icon: Palette },
      { path: '/typography', label: 'Typography 字体', icon: Type },
      { path: '/spacing', label: 'Spacing / Radius', icon: Box },
      { path: '/icons', label: 'Icons 图标', icon: Layers },
    ]},
    { title: '通用组件', items: [
      { path: '/components/button', label: 'Button 按钮', icon: MousePointerClick },
    ]},
    { title: '数据录入', items: [
      { path: '/components/input', label: 'Input 输入框', icon: AlignLeft },
      { path: '/components/select', label: 'Select / Selection', icon: ToggleLeft },
    ]},
    { title: '数据展示', items: [
      { path: '/components/badge', label: 'Badge / Tag / Avatar', icon: TagIcon },
      { path: '/components/table', label: 'Table 表格', icon: TableProperties },
    ]},
    { title: '反馈', items: [
      { path: '/components/modal', label: 'Modal 弹窗', icon: Square },
    ]},
  ]

  const getCurrentPageName = () => {
    for (const section of navItems) {
      const item = section.items.find(i => i.path === location.pathname)
      if (item) return item.label
    }
    return 'BISHENG Design System'
  }

  return (
    <div className="ds-layout">
      {/* Sidebar */}
      <aside className="ds-sidebar">
        <Link to="/overview" className="ds-sidebar__logo">
          <div className="ds-sidebar__logo-icon">
            <Layers color="white" size={20} />
          </div>
          <div className="ds-sidebar__logo-text">
            <span className="ds-sidebar__logo-title">BISHENG</span>
            <span className="ds-sidebar__logo-sub">Design System</span>
          </div>
        </Link>

        <nav className="ds-sidebar__nav">
          {navItems.map(section => (
            <div key={section.title} className="ds-sidebar__section">
              <div className="ds-sidebar__section-title">{section.title}</div>
              {section.items.map(item => (
                <Link 
                  key={item.path} 
                  to={item.path} 
                  className={`ds-sidebar__item ${location.pathname === item.path ? 'active' : ''}`}
                >
                  <item.icon className="ds-sidebar__item-icon" />
                  {item.label}
                  {item.path.includes('button') && <span className="ds-sidebar__badge">v1.0</span>}
                </Link>
              ))}
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="ds-main">
        <header className="ds-topbar">
          <div className="ds-topbar__breadcrumb">
            <span>BISHENG Design System</span>
            <span className="ds-topbar__breadcrumb-sep">/</span>
            <span className="ds-topbar__breadcrumb-current">{getCurrentPageName()}</span>
          </div>

          <div className="ds-topbar__actions">
            <a 
              href="https://github.com/dataelement/bisheng" 
              target="_blank" 
              rel="noreferrer"
              className="ds-demo__code-copy"
              style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '6px 12px' }}
            >
              <Github size={16} />
              <span>GitHub</span>
              <ExternalLink size={12} opacity={0.5} />
            </a>
            
            <button 
              onClick={toggleTheme}
              className="ds-demo__code-copy"
              style={{ width: 34, height: 34, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 8 }}
              title={isDark ? '切换到浅色模式' : '切换到深色模式'}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </header>

        <div className="ds-content">
          <Routes>
            <Route path="/" element={<Navigate to="/overview" replace />} />
            <Route path="/overview" element={<OverviewPage />} />
            <Route path="/colors" element={<ColorsPage />} />
            <Route path="/typography" element={<TypographyPage />} />
            <Route path="/spacing" element={<SpacingPage />} />
            <Route path="/icons" element={<IconsPage />} />
            <Route path="/components/button" element={<ButtonPage />} />
            <Route path="/components/input" element={<InputPage />} />
            <Route path="/components/select" element={<SelectPage />} />
            <Route path="/components/badge" element={<BadgePage />} />
            <Route path="/components/modal" element={<ModalPage />} />
            <Route path="/components/table" element={<TablePage />} />
          </Routes>
        </div>
      </main>
    </div>
  )
}
