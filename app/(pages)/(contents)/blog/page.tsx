"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/lib/client";
import { Blog } from "@/app/types/blog";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Skeleton from "@/components/layouts/sk_card";
import { Button } from "@/components/ui/button";
import Zero from "@/components/layouts/zero";
import Error from "@/components/layouts/error";

export default function BlogPage() {
  const [blog, setBlog] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true); // ローディング状態を追加
  const [error, setError] = useState(false); // エラー状態を追加

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const startTime = Date.now();
        const data = await client.get({ endpoint: "tech-blog", queries: { limit: 100 } });
        setBlog(data.contents || []);

        const elapsedTime = Date.now() - startTime; // ✅ データ取得にかかった時間を計算
        const delay = Math.max(1000 - elapsedTime, 0); // ✅ 2秒未満なら残りの時間を待機

        setTimeout(() => {
          setLoading(false);
        }, delay);
      } catch (error) {
        console.error("Error fetching microCMS data:", error);
        setError(true);
        setLoading(false); // エラー時はすぐに終了
      }
    }
    fetchBlogs();
  }, []);

  return (
    <div className="sm:w-[70%] w-[90%] m-auto pb-32">
      <h1>技術ブログ</h1>

      {/* 🔄 ローディング表示 */}
      {loading && <Skeleton />}

      {/* ⚠ エラー表示 */}
      {error && (
        <div>
          <Error/>
          <div className="flex justify-center">
            <Button asChild className=''>
              <Link className="sm:w-1/4 w-full" href="/">ホームへ戻る</Link>
            </Button>
          </div>
        </div>
      )}

      {/* ❌ 記事がない場合の表示 */}
      {!loading && !error && blog.length === 0 && (
        <div>
          <Zero/>
          <div className="flex justify-center">
            <Button asChild className=''>
              <Link className="sm:w-1/4 w-full" href="/">ホームへ戻る</Link>
            </Button>
          </div>
        </div>
      )}

      {/* ✅ 記事がある場合の表示 */}
      {!loading && !error && blog.length > 0 && (
        <ul className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-[1vw] sm:gap-[1.5vw] gap-[5vw]">
          {blog.map((post) => (
            <li key={post.id}>
              <Link href={`/blog/${post.id}`}>
                <Card className="p-0 border-none shadow-none">
                  <CardHeader className="p-0">
                    {post.header_image?.url && (
                      <div className="overflow-hidden">
                        <Image
                          src={post.header_image.url}
                          alt={post.title}
                          width={900}
                          height={900}
                          className="object-cover transition-transform duration-300 ease-in-out lg:hover:scale-105"
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
      )}
    </div>
  );
}
