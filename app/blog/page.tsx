import Link from "next/link";
import Image from "next/image";
import { client } from "@/lib/client";
import { Blog } from "@/app/types/blog";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

async function getBlogContents(): Promise<Blog[]> {
  try {
    const data = await client.get({ endpoint: "tech-blog", queries: { limit: 100 } });
    console.log("Image URL:", data.header_image?.url);
    console.log("Post Data:", JSON.stringify(data, null, 2));

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
      <ul className='grid sm:grid-cols-3 grid-cols-1 gap-16'>
        {blog.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>
              <Card className='p-0 border-none shadow-none'>
                <CardHeader className='p-0'>
                  {post.header_image && post.header_image.url && (
                    <Image
                      src={post.header_image.url}
                      alt={post.title}
                      width={900}
                      height={900}
                    />
                  )}
                </CardHeader>
                <CardContent className='p-0 pt-3'>
                  <CardDescription className='text-xs'><p>{post.publishedAt}</p></CardDescription>
                </CardContent>
                <CardFooter className='p-0 pt-1'>
                  <CardTitle className='text-base font-medium'>{post.title}</CardTitle>
                </CardFooter>
              </Card>
            </Link>
          </li>

        ))}
      </ul>
    </div>
  );
}
