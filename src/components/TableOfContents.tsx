import React from "react"
import { cn } from "../lib/utils"

interface TocItem {
  id: string
  title: string
  level: number
}

export const TableOfContents: React.FC = () => {
  const [items, setItems] = React.useState<TocItem[]>([])
  const [activeId, setActiveId] = React.useState<string>("")

  React.useEffect(() => {
    const container = document.querySelector(".ds-content__body")
    if (!container) return

    const headings = container.querySelectorAll<HTMLElement>(
      ".ds-section__title, .ds-page-header h1"
    )

    const tocItems: TocItem[] = []
    headings.forEach((el, i) => {
      const section = el.closest(".ds-section") || el.closest(".ds-page-header")
      if (!section) return

      let id = section.id
      if (!id) {
        id = `toc-${i}-${el.textContent?.replace(/\s+/g, "-").toLowerCase() ?? i}`
        section.id = id
      }
      tocItems.push({
        id,
        title: el.textContent ?? "",
        level: el.tagName === "H1" ? 1 : 3,
      })
    })

    setItems(tocItems)
    if (tocItems.length > 0) setActiveId(tocItems[0].id)
  }, [])

  React.useEffect(() => {
    if (items.length === 0) return

    const scrollContainer = document.querySelector(".ds-content")
    if (!scrollContainer) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        if (visible.length > 0) {
          setActiveId(visible[0].target.id)
        }
      },
      {
        root: scrollContainer,
        rootMargin: "-10% 0px -70% 0px",
        threshold: 0,
      }
    )

    items.forEach((item) => {
      const el = document.getElementById(item.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [items])

  const handleClick = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    const container = document.querySelector(".ds-content")
    if (!container) return

    const top = el.offsetTop - 24
    container.scrollTo({ top, behavior: "smooth" })
  }

  if (items.length < 2) return null

  return (
    <nav className="ds-toc" aria-label="目录导航">
      <div className="ds-toc__title">目录</div>
      <ul className="ds-toc__list">
        {items.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              className={cn(
                "ds-toc__link",
                item.level === 1 && "ds-toc__link--h1",
                activeId === item.id && "ds-toc__link--active"
              )}
              onClick={() => handleClick(item.id)}
            >
              {item.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
