"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { client } from "@/lib/client";
import { Blog } from "@/app/types/blog";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import Zero from "@/components/layouts/zero";
import Error from "@/components/layouts/error"; import Skeleton from "@/components/layouts/sk_bar";
import { Button } from "@/components/ui/button";

export default function BlogPage() {
  const [blog, setBlog] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const startTime = Date.now();
        const data = await client.get({ endpoint: "news", queries: { limit: 100 } });
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
      <h1>お知らせ</h1>

      {/* 🔄 ローディング表示 */}
      {loading && <Skeleton />}

      {/* ⚠ エラー表示 */}
      {error && (
        <div>
          <Error />
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
          <Zero />
          <div className="flex justify-center">
            <Button asChild className=''>
              <Link className="sm:w-1/4 w-full" href="/">ホームへ戻る</Link>
            </Button>
          </div>
        </div>
      )}

      {/* ✅ 記事がある場合の表示 */}
      {!loading && !error && blog.length > 0 && (
        <Table>
          <TableBody>
            {blog.map((post) => (
              <TableRow key={post.id} className="flex flex-wrap sm:table-row border-b">
                <TableCell className="w-1/4 sm:w-1/12 align-text-top">
                  {new Date(post.publishedAt).toLocaleDateString()}
                </TableCell>
                <TableCell className="w-1/4 sm:w-1/12 text-[10px] align-text-top font-medium text-center min-w-32">
                  <p className="text-[10px] bg-gray-100 text-gray-500 px-2">
                    {post.tag}
                  </p>
                </TableCell>
                <TableCell className="w-full sm:w-auto align-text-top pt-0">
                  <Link href={post.link} className="hover:underline block sm:inline">
                    {post.title}
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}
