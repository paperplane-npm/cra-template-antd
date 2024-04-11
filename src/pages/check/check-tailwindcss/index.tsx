import { Button } from 'antd'

export default function CheckTailwindcss(): RC {
  return (
    <div>
      <p>以下三个 div 宽度不同，则 tailwindcss 正常生效：</p>
      <div className="w-48 bg-slate-300">我是宽度 48 （192px）</div>
      <div className="w-64 bg-slate-300">我是宽度 48 （256px）</div>
      <div className="w-96 bg-slate-300">我是宽度 96 （384px）</div>

      <p>以下两个按钮颜色不同，则 tailwindcss 能正常覆盖 UI 库的样式：</p>
      <Button type="primary">普通按钮</Button>
      <Button type="primary" className="bg-green-600">
        绿色按钮
      </Button>
    </div>
  )
}
