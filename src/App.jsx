import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import ProblemModal from './components/ProblemModal'
import Dashboard from './pages/Dashboard'
import Problems from './pages/Problems'
import Users from './pages/Users'
import Submissions from './pages/Submissions'
import Generic from './pages/Generic'
import { initialProblems } from './data/mock'

export default function App(){
 const [active,setActive]=useState('Dashboard'); const [mobileOpen,setMobileOpen]=useState(false); const [modal,setModal]=useState(false); const [problems,setProblems]=useState(initialProblems)
 const add=(form)=>{const id=form.title.toLowerCase().trim().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'')||`problem-${problems.length+1}`; const p={id,title:form.title||'Untitled Problem',difficulty:form.difficulty,tags:form.tags.split(',').map(x=>x.trim()).filter(Boolean),submissions:0,accepted:0,acceptance:'—',updated:'Sep 3, 2026',status:'Draft'}; setProblems(ps=>[p,...ps]); setModal(false); setActive('Problems')}
 const content=active==='Dashboard'?<Dashboard setActive={setActive}/>:active==='Problems'?<Problems problems={problems} setProblems={setProblems} onAdd={()=>setModal(true)}/>:active==='Users'?<Users/>:active==='Submissions'?<Submissions/>:<Generic name={active}/>;
 return <div className="min-h-screen bg-blue-100 text-slate-950"><div className="flex min-h-screen"><Sidebar active={active} setActive={setActive} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen}/><div className="min-w-0 flex-1"><Header title={active} setMobileOpen={setMobileOpen} onAdd={active==='Problems'?()=>setModal(true):null}/><main className="mx-auto w-full max-w-[1600px] p-4 sm:p-6 lg:p-8">{content}</main></div></div>{modal&&<ProblemModal onClose={()=>setModal(false)} onCreate={add}/>}</div>
}
