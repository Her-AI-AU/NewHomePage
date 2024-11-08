import Header from '../components/Header';
import Projects from '../components/ProjectsCard';
import TestimonialCard from '../components/TestimonialCard';
import BlogCard from '../components/BlogCard';

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <Header />
      <main className="px-6 py-12 max-w-7xl mx-auto space-y-16">
        <section className="text-center space-y-4 animate-fadeIn">
          <h1 className="text-5xl font-bold text-gray-800">Welcome to My Portfolio</h1>
          <p className="text-lg text-gray-600">Explore my work and achievements.</p>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300 shadow-lg">
            Contact Me
          </button>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Projects />
            <Projects />
            <Projects />
          </div>
          <div className="text-center mt-8">
            <button className="bg-gray-800 text-white py-2 px-6 rounded-full hover:bg-gray-700 transition duration-300 shadow-lg">
              View All Projects
            </button>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TestimonialCard />
            <TestimonialCard />
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
          <div className="text-center mt-8">
            <button className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300 shadow-lg">
              View All Blog Posts
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
