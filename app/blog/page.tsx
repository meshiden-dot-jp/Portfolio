"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/lib/client";
import { Blog } from "@/app/types/blog";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function BlogPage() {
  const [blog, setBlog] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true); // ローディング状態を追加
  const [error, setError] = useState(false); // エラー状態を追加

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const data = await client.get({ endpoint: "tech-blog", queries: { limit: 100 } });
        setBlog(data.contents || []);
      } catch (error) {
        console.error("Error fetching microCMS data:", error);
        setError(true); // エラーが発生したら `error` を `true` に設定
      } finally {
        setLoading(false); // ローディングを終了
      }
    }
    fetchBlogs();
  }, []);

  return (
    <div className="sm:w-[70%] w-[90%] m-auto pb-32">
      <h1>Tech Blog</h1>

      {/* 🔄 ローディング表示 */}
      {loading && <p className="text-gray-500">記事を取得しています...</p>}

      {/* ⚠ エラー表示 */}
      {error && <p className="text-red-500">記事の取得に失敗しました。</p>}

      {/* ❌ 記事がない場合の表示 */}
      {!loading && !error && blog.length === 0 && (
        <p className="text-gray-500">記事がありません。</p>
      )}

      {/* ✅ 記事がある場合の表示 */}
      {!loading && !error && blog.length > 0 && (
        <ul className="grid sm:grid-cols-3 grid-cols-1 gap-16">
          {blog.map((post) => (
            <li key={post.id}>
              <Link href={`/blog/${post.id}`}>
                <Card className="p-0 border-none shadow-none">
                  <CardHeader className="p-0">
                    {post.header_image?.url && (
                      <Image
                        src={post.header_image.url}
                        alt={post.title}
                        width={900}
                        height={900}
                        className="object-cover"
                      />
                    )}
                  </CardHeader>
                  <CardContent className="p-0 pt-3">
                    <CardDescription className="text-xs">
                      <small>{new Date(post.publishedAt).toLocaleDateString()}</small>
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="p-0 pt-1">
                    <CardTitle className="text-base font-medium">{post.title}</CardTitle>
                  </CardFooter>
                </Card>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
