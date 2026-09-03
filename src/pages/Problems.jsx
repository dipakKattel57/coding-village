import { useMemo, useState } from 'react'
import { Check, Filter, MoreHorizontal, Pencil, Plus, Search, Trash2 } from 'lucide-react'
import { Difficulty, SoftTag, Status } from '../components/Badge'

export default function Problems({ problems, setProblems, onAdd }) {
    const [q, setQ] = useState(''); const [difficulty, setDifficulty] = useState('All'); const [selected, setSelected] = useState([])
    const filtered = useMemo(() => problems.filter(p => (p.title.toLowerCase().includes(q.toLowerCase()) || p.id.includes(q.toLowerCase())) && (difficulty === 'All' || p.difficulty === difficulty)), [problems, q, difficulty])
    const toggle = id => setSelected(s => s.includes(id) ? s.filter(x => x !== id) : [...s, id])
    const remove = id => setProblems(ps => ps.filter(p => p.id !== id))
    return <div className="space-y-5">
        <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-blue-100 p-4 shadow-sm md:flex-row md:items-center">
            <div className="relative flex-1"><Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={17} />
            <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search by title or slug..." className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-slate-400 focus:bg-white" />
            </div>
            <select value={difficulty} onChange={e => setDifficulty(e.target.value)} className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm">
                <option>All</option>
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
                </select>
                <button className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold"><Filter size={16} /> Filters</button>
                    <button onClick={onAdd} className="flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white"><Plus size={17} /> Add Problem</button>
                    </div>
        {selected.length > 0 && <div className="flex items-center gap-3 rounded-xl border border-indigo-100 bg-indigo-50 px-4 py-3 text-sm text-indigo-700">
            <span className="font-semibold">{selected.length} selected</span>
            <button className="rounded-lg bg-white px-3 py-1.5 font-semibold">Publish</button><button onClick={() => setSelected([])} className="ml-auto text-xs font-semibold">Clear</button>
            </div>}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="overflow-x-auto"><table className="min-w-[920px] w-full text-left">
                <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-400">
                    <tr>
                        <th className="w-12 px-5 py-4">
                            <input type="checkbox" checked={selected.length === filtered.length && filtered.length > 0} onChange={e => setSelected(e.target.checked ? filtered.map(p => p.id) : [])} />
                            </th>
                            <th className="px-4 py-4">Problem</th>
                            <th className="px-4 py-4">Difficulty</th>
                            <th className="px-4 py-4">Topics</th>
                            <th className="px-4 py-4">Acceptance</th>
                            <th className="px-4 py-4">Updated</th>
                            <th className="px-4 py-4">Status</th>
                            <th className="px-4 py-4"></th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">{filtered.map(p => <tr key={p.id} className="hover:bg-slate-50/80"><td className="px-5 py-4"><input type="checkbox" checked={selected.includes(p.id)} onChange={() => toggle(p.id)} />
                            </td>
                            <td className="px-4 py-4">
                                <div className="flex items-center gap-3">
                                    <div className="grid h-9 w-9 place-items-center rounded-xl bg-slate-100 text-xs font-bold text-slate-500">{p.id.slice(0, 2).toUpperCase()}</div>
                                    <div>
                                        <div className="font-semibold">{p.title}</div>
                                        <div className="mt-0.5 text-xs text-slate-400">/{p.id}</div>
                                        </div>
                                        </div>
                                        </td>
                                        <td className="px-4 py-4"><Difficulty value={p.difficulty} /></td>
                                        <td className="px-4 py-4">
                                            <div className="flex gap-1.5">{p.tags.map(t => <SoftTag key={t}>{t}</SoftTag>)}</div>
                                            </td>
                                            <td className="px-4 py-4 text-sm font-semibold">{p.acceptance}</td>
                                            <td className="px-4 py-4 text-xs text-slate-500">{p.updated}</td>
                                            <td className="px-4 py-4"><Status value={p.status} /></td>
                                            <td className="px-4 py-4"><div className="flex items-center justify-end gap-1">
                                                <button className="rounded-lg p-2 text-slate-400 hover:bg-slate-100"><Pencil size={15} /></button>
        <button onClick={() => remove(p.id)} className="rounded-lg p-2 text-slate-400 hover:bg-rose-50 hover:text-rose-600"><Trash2 size={15} /></button>
    <button className="rounded-lg p-2 text-slate-400 hover:bg-slate-100"><MoreHorizontal size={15} /></button>
    </div>
    </td>
    </tr>)}
    </tbody>
    </table>
    </div>
    <div className="flex items-center justify-between border-t border-slate-100 px-5 py-4 text-xs text-slate-400">
        <span>Showing {filtered.length} of {problems.length} problems</span>
        <span className="rounded-lg bg-slate-50 px-3 py-1.5">Page 1 of 63</span>
        </div>
        </div>
    </div>
}
