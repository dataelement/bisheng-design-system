import { clsx } from 'clsx'
import React from 'react'
import { ChevronUp, ChevronDown, ChevronsUpDown } from 'lucide-react'

export interface Column<T> {
  key: string
  title: string
  dataIndex?: keyof T
  render?: (value: unknown, record: T, index: number) => React.ReactNode
  sortable?: boolean
  width?: string | number
}

interface TableProps<T extends Record<string, unknown>> {
  columns: Column<T>[]
  data: T[]
  rowKey?: keyof T | ((row: T) => string)
  striped?: boolean
  className?: string
  loading?: boolean
  emptyText?: string
}

export function Table<T extends Record<string, unknown>>({
  columns, data, rowKey, striped, className, emptyText = '暂无数据'
}: TableProps<T>) {
  const [sortKey, setSortKey] = React.useState<string | null>(null)
  const [sortDir, setSortDir] = React.useState<'asc' | 'desc'>('asc')

  const handleSort = (key: string) => {
    if (sortKey === key) setSortDir(d => d === 'asc' ? 'desc' : 'asc')
    else { setSortKey(key); setSortDir('asc') }
  }

  const getKey = (row: T, idx: number): string => {
    if (!rowKey) return String(idx)
    if (typeof rowKey === 'function') return rowKey(row)
    return String(row[rowKey])
  }

  const sortedData = React.useMemo(() => {
    if (!sortKey) return data
    return [...data].sort((a, b) => {
      const av = a[sortKey]; const bv = b[sortKey]
      if (av === bv) return 0
      const cmp = av! < bv! ? -1 : 1
      return sortDir === 'asc' ? cmp : -cmp
    })
  }, [data, sortKey, sortDir])

  return (
    <div className={clsx('table-wrapper', className)}>
      <table className={clsx('table', { 'table--striped': striped })}>
        <thead>
          <tr>
            {columns.map(col => (
              <th
                key={col.key}
                style={{ width: col.width }}
                className={col.sortable ? 'sortable' : ''}
                onClick={() => col.sortable && handleSort(col.key)}
              >
                <span className="th-inner">
                  {col.title}
                  {col.sortable && (
                    sortKey === col.key
                      ? sortDir === 'asc' ? <ChevronUp size={13} /> : <ChevronDown size={13} />
                      : <ChevronsUpDown size={13} style={{ opacity: 0.4 }} />
                  )}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.length === 0 ? (
            <tr>
              <td colSpan={columns.length} style={{ textAlign: 'center', color: 'var(--text-tertiary)', padding: '40px' }}>
                {emptyText}
              </td>
            </tr>
          ) : (
            sortedData.map((row, idx) => (
              <tr key={getKey(row, idx)}>
                {columns.map(col => (
                  <td key={col.key}>
                    {col.render
                      ? col.render(col.dataIndex ? row[col.dataIndex] : undefined, row, idx)
                      : col.dataIndex ? String(row[col.dataIndex] ?? '') : ''}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}
