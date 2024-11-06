import Header from '../components/Header';
import BlogCard from '../components/BlogCard';

export default function BlogPage() {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <Header />
      <main className="px-6 py-12 max-w-7xl mx-auto">
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-800">Our Blog</h1>
          <p className="text-lg text-gray-600">Insights, updates, and stories from our team.</p>
        </section>

        <section className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </section>

        <div className="text-center mt-12">
          <button className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300 shadow-lg">
            View All Blog Posts
          </button>
        </div>
      </main>
    </div>
  );
}
