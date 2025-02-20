"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { client } from "@/lib/client";
import { Blog } from "@/app/types/blog";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";

export default function BlogPage() {
  const [blog, setBlog] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(false); // 記事が6つ以上あるかを判定

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const data = await client.get({ endpoint: "news", queries: { limit: 7 } }); // ✅ limitを7に変更
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
      <a href="/news">
        <h1>News</h1>
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

          {/* ✅ 記事が6つ以上あるときのみ表示 */}
          {hasMore && (
            <div className="flex justify-end mt-4">
              <a href="/news">
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
