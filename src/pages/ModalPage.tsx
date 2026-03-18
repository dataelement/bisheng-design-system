import React from 'react'
import { PageHeader, DemoSection, PropsTable, type PropDef } from '../components/DemoComponents'
import { Modal } from '../components/Modal'
import { Button } from '../components/Button'
import { Trash2, AlertTriangle } from 'lucide-react'

const props: PropDef[] = [
  { name: 'open', type: 'boolean', required: true, desc: '控制弹窗是否显示' },
  { name: 'onClose', type: '() => void', required: true, desc: '关闭弹窗时的回调' },
  { name: 'title', type: 'string', required: true, desc: '弹窗标题' },
  { name: 'children', type: 'ReactNode', required: true, desc: '弹窗主体内容' },
  { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", desc: '弹窗宽度，sm=380px，md=520px，lg=720px' },
  { name: 'footer', type: 'ReactNode', desc: '自定义底部操作区，传 null 隐藏默认底部，不传则显示默认确认/取消按钮' },
]

export default function ModalPage() {
  const [open1, setOpen1] = React.useState(false)
  const [open2, setOpen2] = React.useState(false)
  const [open3, setOpen3] = React.useState(false)
  const [loading, setLoading] = React.useState(false)

  const handleDanger = () => {
    setLoading(true)
    setTimeout(() => { setLoading(false); setOpen3(false) }, 1500)
  }

  return (
    <div>
      <PageHeader
        badge="反馈组件"
        title="Modal 弹窗"
        desc="Modal 弹窗用于需要用户确认、输入信息或展示重要内容而不离开当前页面的场景。支持点击蒙层或按 Esc 键关闭。"
      />

      <DemoSection
        id="basic"
        title="基础弹窗"
        desc="默认弹窗包含标题栏、内容区和底部操作区。底部默认提供「取消」和「确认」两个按钮，满足大多数场景。弹窗宽度默认为 520px（md）。"
        preview={<>
          <Button onClick={() => setOpen1(true)}>打开基础弹窗</Button>
          <Modal
            open={open1}
            onClose={() => setOpen1(false)}
            title="编辑知识库信息"
          >
            <p>这里是弹窗的内容区域，可以放置表单、说明文本或任何自定义内容。</p>
            <p style={{ marginTop: 8, color: 'var(--text-tertiary)', fontSize: 13 }}>
              你将修改知识库的基本信息，修改后即时生效。
            </p>
          </Modal>
        </>}
        code={`const [open, setOpen] = useState(false)

<Button onClick={() => setOpen(true)}>打开弹窗</Button>

<Modal open={open} onClose={() => setOpen(false)} title="编辑知识库信息">
  <p>弹窗内容区域</p>
</Modal>`}
      />

      <DemoSection
        id="size"
        title="弹窗尺寸"
        desc="提供 sm（380px）、md（520px，默认）、lg（720px）三种宽度，根据内容复杂度选择。简单确认操作使用 sm，复杂表单使用 lg。"
        preview={<>
          <Button variant="outline" onClick={() => setOpen2(true)}>小尺寸弹窗</Button>
          <Modal size="sm" open={open2} onClose={() => setOpen2(false)} title="确认删除">
            <p>此操作无法撤销，确认要删除选中的 3 个文件吗？</p>
          </Modal>
        </>}
        code={`<Modal size="sm" open={open} onClose={() => setOpen(false)} title="确认删除">
  <p>此操作无法撤销，确认要删除选中的 3 个文件吗？</p>
</Modal>`}
      />

      <DemoSection
        id="danger"
        title="危险操作确认"
        desc="对于不可逆的危险操作（删除、禁用账户、清空数据等），使用危险变体配合自定义 footer，将确认按钮替换为 Danger 样式，并加入等待动画增加操作成本，降低误操作风险。"
        preview={<>
          <Button variant="danger-outline" leftIcon={<Trash2 size={14} />} onClick={() => setOpen3(true)}>删除工作流</Button>
          <Modal
            open={open3}
            onClose={() => !loading && setOpen3(false)}
            title="删除工作流"
            size="sm"
            footer={
              <div className="modal__footer">
                <Button variant="outline" size="sm" onClick={() => setOpen3(false)} disabled={loading}>取消</Button>
                <Button variant="danger" size="sm" loading={loading} onClick={handleDanger}>
                  {loading ? '删除中' : '确认删除'}
                </Button>
              </div>
            }
          >
            <div style={{ display: 'flex', gap: 12 }}>
              <AlertTriangle size={20} color="var(--color-warning-500)" style={{ flexShrink: 0, marginTop: 2 }} />
              <div>
                <p style={{ fontWeight: 500, marginBottom: 6 }}>此操作无法撤销</p>
                <p style={{ fontSize: 13, lineHeight: 1.6 }}>
                  删除后，工作流「智能客服」及其关联的所有配置、运行记录将被永久删除，无法恢复。
                </p>
              </div>
            </div>
          </Modal>
        </>}
        code={`<Modal
  open={open}
  onClose={() => setOpen(false)}
  title="删除工作流"
  size="sm"
  footer={
    <div className="modal__footer">
      <Button variant="outline" size="sm" onClick={() => setOpen(false)}>取消</Button>
      <Button variant="danger" size="sm" loading={loading} onClick={handleDelete}>确认删除</Button>
    </div>
  }
>
  <p>此操作无法撤销，工作流将被永久删除。</p>
</Modal>`}
      />

      <PropsTable props={props} />
    </div>
  )
}
