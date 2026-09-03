import { Bell, Menu, Search, Plus, Command } from 'lucide-react'

export default function Header({title,setMobileOpen,onAdd}){
 return <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
  <div className="flex h-20 items-center gap-4 px-4 sm:px-6 lg:px-8">
   <button onClick={()=>setMobileOpen(true)} className="rounded-xl border border-slate-200 p-2 text-slate-500 lg:hidden"><Menu size={19}/></button>
   <div className="flex-1"><h1 className="text-lg font-bold tracking-tight">{title}</h1><p className="hidden text-xs text-slate-400 sm:block">Manage your coding platform from one place</p></div>
   <div className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-400 md:flex"><Search size={16}/><span>Search</span><span className="ml-5 flex items-center gap-1 rounded-md border border-slate-200 bg-white px-1.5 py-0.5 text-[10px]"><Command size={10}/> K</span></div>
   {onAdd && <button onClick={onAdd} className="hidden items-center gap-2 rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-950/10 transition hover:-translate-y-0.5 sm:flex"><Plus size={17}/> Add Problem</button>}
   <button className="relative rounded-xl border border-slate-200 bg-white p-2.5 text-slate-500 hover:bg-slate-50"><Bell size={18}/><span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-indigo-500"/></button>
  </div>
 </header>
}
