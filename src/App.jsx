
import Navbar from "./components/Navbar.jsx";
import ProfileHeader from "./components/ProfileHeader.jsx";

export default function App() {
  return (
      <>
        <Navbar name="Utuje Ange" />
        <main className="mx-auto max-w-3xl space-y-10 p-6 sm:p-8">
          <ProfileHeader
              name="Utuje Ange"
              role="Frontend Learner"
              city="Kigali, Rwanda"
              bio="I'm learning to build modern, accessible web interfaces with React."
          />
        </main>
      </>
  );
}