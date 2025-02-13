// app/blog/[id]/page.tsx
import { client } from "@/lib/client";
import { Blog } from "@/app/types/blog";
import { Button } from "@/components/ui/button";

// ブログの詳細データを取得する関数
async function getBlogData(id: string | undefined): Promise<Blog | null> {
  if (!id) {
    console.error("Error: ID is undefined.");
    return null;
  }

  try {
    const data = await client.get({
      endpoint: `tech-blog/${id}`,
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
    const data = await client.get({ endpoint: "tech-blog" });

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
    return <p>記事が見つかりません。</p>;
  }

  const blog = await getBlogData(params.id);

  if (!blog) {
    return <p>記事が見つかりません。</p>;
  }

  return (
    <div className="sm:w-[70%] w-[90%] m-auto pb-32">
      <h3>{blog.title}</h3>
      <p>{blog.publishedAt}</p>
      <div dangerouslySetInnerHTML={{ __html: blog.body }} />
      <a href="/blog">
        <Button>一覧に戻る</Button>
      </a>
    </div>
  );
}
