// lib/api.ts
import { WordPressPost } from "../types";

export async function fetchPosts(): Promise<WordPressPost[]> {
  const response = await fetch(
    `${process.env.WORDPRESS_API_URL}/wp-json/wp/v2/posts`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return await response.json();
}
