export default function ProjectCard({ title, description, link }) {
    return (
        <article className="rounded-xl border border-slate-200 p-4 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
            <p className="mt-1 text-sm text-slate-600">{description}</p>
            <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-sm font-medium text-blue-600 hover:underline"
            >
                View project →
            </a>
        </article>
    );
}