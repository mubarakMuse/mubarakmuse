import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-white text-black min-h-screen">
      <div className="max-w-xl mx-auto px-6 py-8">
        <h1 className="text-2xl font-bold mb-4">Course Not Found</h1>
        <p className="text-sm text-gray-600 mb-6">
          The course you're looking for doesn't exist or has been removed.
        </p>
        <Link 
          href="/islamic-studies" 
          className="inline-block bg-black text-white px-6 py-2 rounded text-sm font-semibold hover:bg-gray-800 transition-colors"
        >
          ← Back to All Courses
        </Link>
      </div>
    </div>
  );
}
