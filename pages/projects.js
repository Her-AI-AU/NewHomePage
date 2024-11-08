import Header from '../components/Header';
import Projects from '../components/ProjectsCard';

export default function ProjectsPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="px-6 py-12 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">My Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Projects />
          <Projects />
          <Projects />
        </div>
      </main>
    </div>
  );
}
