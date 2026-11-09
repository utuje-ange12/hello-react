export default function ProfileHeader({ name, role, city, bio }) {
    return (
        <header id="about" className="space-y-2">
            <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">{name}</h1>
            <p className="text-lg text-slate-600">{role}</p>
            <p className="text-sm text-slate-500">{city}</p>
            <p className="pt-2 text-slate-700">{bio}</p>
        </header>
    );
}