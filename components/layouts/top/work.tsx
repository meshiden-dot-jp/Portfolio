"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/lib/client";
import { Blog } from "@/app/types/blog";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import Skeleton from "../sk_card";

export default function BlogPage() {
  const [blog, setBlog] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const startTime = Date.now();

        const data = await client.get({ endpoint: "work", queries: { limit: 7 } });
        setBlog(data.contents.slice(0, 6) || []);
        setHasMore(data.contents.length > 6);

        const elapsedTime = Date.now() - startTime;
        const delay = Math.max(2000 - elapsedTime, 0);

        setTimeout(() => {
          setLoading(false);
        }, delay);
      } catch (error) {
        console.error("Error fetching microCMS data:", error);
        setError(true);
        setLoading(false);
      }
    }
    fetchBlogs();
  }, []);

  useEffect(() => {
    if (error) {
      toast.error("作品一覧が読み込めませんでした。再試行してください。");
    }
  }, [error]);

  return (
    <div className="sm:w-[70%] w-[90%] m-auto">
      <h1>作品一覧</h1>

      {/* 🔄 ローディング表示 */}
      {loading && <Skeleton />}

      {/* ⚠ エラー表示 */}
      {error && <Skeleton />}

      {/* ❌ 記事がない場合の表示 */}
      {!loading && !error && blog.length === 0 && (
        <p className="text-gray-500">記事がありません。</p>
      )}

      {/* ✅ 記事がある場合の表示 */}
      {!loading && !error && blog.length > 0 && (
        <>
          <ul className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-[1vw] sm:gap-[1.5vw] gap-[5vw]">
            {blog.map((post) => (
              <li key={post.id} className="h-full">
                <Link href={`/work/${post.id}`} className="h-full">
                  <Card className="p-0 border-none shadow-none flex flex-col h-full">
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
                    <CardContent className="p-0 pt-3 flex-grow">
                      <CardDescription className="text-xs">
                        <small>{new Date(post.publishedAt).toLocaleDateString()}</small>
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="p-0 pt-1 mt-auto">
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
