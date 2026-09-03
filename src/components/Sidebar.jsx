import { Code2, LayoutDashboard, ListChecks, Users, Trophy, TerminalSquare, BarChart3, Settings, ShieldCheck, ChevronDown, X } from 'lucide-react'

const items = [
  ['Dashboard',LayoutDashboard],['Problems',ListChecks],['Users',Users],['Submissions',TerminalSquare],['Contests',Trophy],['Analytics',BarChart3],['Settings',Settings]
]

export default function Sidebar({active,setActive,mobileOpen,setMobileOpen}){
  return <>
    {mobileOpen && <div className="fixed inset-0 z-40 bg-slate-950/40 lg:hidden" onClick={()=>setMobileOpen(false)} />}
    <aside className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-slate-200 bg-white transition-transform lg:static lg:translate-x-0 ${mobileOpen?'translate-x-0':'-translate-x-full'}`}>
      <div className="flex h-20 items-center justify-between border-b border-slate-100 px-5">
        <div className="flex items-center gap-3"><div className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-950 text-white shadow-lg shadow-slate-950/10"><Code2 size={21}/></div><div><div className="font-bold tracking-tight">coding village</div><div className="text-xs text-slate-400">Admin Console</div></div></div>
        <button className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 lg:hidden" onClick={()=>setMobileOpen(false)}><X size={18}/></button>
      </div>
      <div className="px-4 pt-6">
        <div className="mb-2 px-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">Workspace</div>
        <nav className="space-y-1">{items.map(([label,Icon])=><button key={label} onClick={()=>{setActive(label);setMobileOpen(false)}} className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${active===label?'bg-slate-950 text-white shadow-md shadow-slate-950/10':'text-slate-600 hover:bg-slate-100 hover:text-slate-950'}`}><Icon size={18}/><span>{label}</span>{label==='Problems'&&<span className="ml-auto rounded-full bg-indigo-50 px-2 py-0.5 text-[10px] font-semibold text-indigo-600">1.2k</span>}</button>)}</nav>
      </div>
      <div className="mt-auto border-t border-slate-100 p-4">
        <button className="flex w-full items-center gap-3 rounded-xl p-2 hover:bg-slate-50"><div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 text-sm font-bold text-white">DK</div><div className="min-w-0 flex-1 text-left"><div className="truncate text-sm font-semibold">Dipak Kattel</div><div className="truncate text-xs text-slate-400">Super Admin</div></div><ChevronDown size={16} className="text-slate-400"/></button>
      </div>
    </aside>
  </>
}
