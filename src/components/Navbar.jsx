export default function Navbar({ name }) {
    return (
        <nav className="border-b border-slate-200 bg-white">
            <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
                <span className="font-bold text-slate-900">{name}</span>
                <ul className="flex gap-4 text-sm text-slate-600">
                    <li><a href="#about" className="hover:text-slate-900">About</a></li>
                    <li><a href="#skills" className="hover:text-slate-900">Skills</a></li>
                    <li><a href="#projects" className="hover:text-slate-900">Projects</a></li>
                </ul>
            </div>
        </nav>
    );
}