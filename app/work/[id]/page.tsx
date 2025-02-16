// app/work/[id]/page.tsx
import { client } from "@/lib/client";
import { Blog } from "@/app/types/blog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { notFound } from "next/navigation";

// ブログの詳細データを取得する関数
async function getBlogData(id: string | undefined): Promise<Blog | null> {
  if (!id) {
    console.error("Error: ID is undefined.");
    return null;
  }

  try {
    const data = await client.get({
      endpoint: `work/${id}`,
    });
    return data;
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return null;
  }
}

// 静的なパスを生成する関数（SSG 相当）
export async function generateStaticParams() {
  try {
    const data = await client.get({ endpoint: "work" });

    if (!data || !data.contents) {
      console.error("No blog data found!");
      return [];
    }

    const paths = data.contents.map((content: { id: string }) => ({
      params: { id: content.id },
    }));

    return paths;
  } catch (error) {
    console.error("Error fetching blog data for static paths:", error);
    return [];
  }
}

// ブログ詳細ページのコンポーネント
export default async function BlogDetail({ params }: { params?: { id?: string } }) {

  if (!params || !params.id) {
      notFound();
    }
  
    const blog = await getBlogData(params.id);
  
    if (!blog) {
      notFound();
    }
  
  return (
    <div className="sm:w-[50%] w-[90%] m-auto pt-12 pb-32">
      <div className="pb-16">
        <Image
          src={blog.header_image.url}
          alt={blog.title}
          width={900}
          height={900}
          className="object-cover"
        />
        <h1>{blog.title}</h1>
        <p>{new Date(blog.publishedAt).toLocaleDateString()}</p>
        <div dangerouslySetInnerHTML={{ __html: blog.body }} />
      </div>
      <a className="flex justify-center w-full" href="/work">
        <Button className="sm:w-1/3 w-full">一覧に戻る</Button>
      </a>
    </div>
  );
}
