"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { client } from "@/lib/client";
import { Blog } from "@/app/types/blog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function BlogPage() {
  const [blog, setBlog] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true); // ローディング状態を追加
  const [error, setError] = useState(false); // エラー状態を追加

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const data = await client.get({ endpoint: "news", queries: { limit: 100 } });
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
      <h3>News</h3>

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
          <TableHeader>
            <TableRow>
              <TableHead>公開日</TableHead>
              <TableHead>タイトル</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {blog.map((post) => (
              <TableRow key={post.id}>
                <TableCell>{new Date(post.publishedAt).toLocaleDateString()}</TableCell>
                <TableCell>
                  <Link href={post.link} className="text-blue-500 hover:underline">
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
