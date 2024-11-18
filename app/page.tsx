// app/page.tsx
import { fetchPosts } from "@/lib/api";
import { WordPressPost } from "@/types";

export default async function HomePage() {
  // Fetch posts directly inside the component
  const posts: WordPressPost[] = await fetchPosts();

  return (
    <main className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Latest Posts</h1>
      {posts.map((post) => (
        <div key={post.id} className="mb-10 border-b pb-5">
          <h2 className="text-xl font-semibold">{post.title.rendered}</h2>
          <div
            className="text-gray-600 mb-4"
            dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
          />
          <a
            href={`/post/${post.slug}`}
            className="text-blue-500 hover:underline"
          >
            Read More
          </a>
        </div>
      ))}
    </main>
  );
}
