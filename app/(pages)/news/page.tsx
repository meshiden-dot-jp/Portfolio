"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { client } from "@/lib/client";
import { Blog } from "@/app/types/blog";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

export default function BlogPage() {
  const [blog, setBlog] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const data = await client.get({ endpoint: "news", queries: { limit: 100 } });
        setBlog(data.contents || []);
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
    <div className="sm:w-[70%] w-[90%] m-auto pb-32 min-h-screen">
      <h1>News</h1>

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
