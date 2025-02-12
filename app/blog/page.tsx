import Link from "next/link";
import {client} from "@/lib/client";
import { Blog } from "@/app/types/blog";

async function getBlogContents(): Promise<Blog[]> {
  try {
    const data = await client.get({ endpoint: "tech-blog" });
    return data.contents || [];
  } catch (error) {
    console.error("Error fetching microCMS data:", error);
    return [];
  }
}

export default async function BlogPage() {
  const blog = await getBlogContents();

  return (
    <div className="sm:w-[70%] w-[90%] m-auto pb-32">
      <h3>Tech Blog</h3>
      <ul>
        {blog.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
