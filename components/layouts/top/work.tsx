"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/lib/client";
import { Blog } from "@/app/types/blog";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function BlogPage() {
  const [blog, setBlog] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(false); // 記事が6つ以上あるかを判定

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const data = await client.get({ endpoint: "work", queries: { limit: 7 } }); // ✅ limitを7に変更
        setBlog(data.contents.slice(0, 6) || []); // ✅ 6記事のみ表示
        setHasMore(data.contents.length > 6); // ✅ 記事が6つ以上あるか判定
      } catch (error) {
        console.error("Error fetching microCMS data:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchBlogs();
  }, []);

  return (
    <div className="sm:w-[70%] w-[90%] m-auto">
      <a href="/work">
        <h1>Work</h1>
      </a>

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
        <>
          <ul className="grid sm:grid-cols-3 grid-cols-1 gap-16">
            {blog.map((post) => (
              <li key={post.id}>
                <Link href={`/work/${post.id}`}>
                  <Card className="p-0 border-none shadow-none">
                    <CardHeader className="p-0">
                      {post.header_image?.url && (
                        <div className="overflow-hidden">
                          <Image
                          src={post.header_image.url}
                          alt={post.title}
                          width={900}
                          height={900}
                          className="object-cover transition-transform duration-300 ease-in-out sm:hover:scale-105"
                        />
                        </div>
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

          {/* ✅ 記事が6つ以上あるときのみ表示 */}
          {hasMore && (
            <div className="flex justify-end mt-4">
              <a href="/work">
                <Button variant="ghost">
                  すべて見る <i className="fa-solid fa-chevron-right"></i>
                </Button>
              </a>
            </div>
          )}
        </>
      )}
    </div>
  );
}
