import Image from "next/image";
import Link from "next/link";
import { NewsPost } from "../../../lib/types";


export default function NewsCard({ news }: { news: NewsPost }) {
  const rawUrl = news.fields.featuredImage?.fields?.file?.url;
  const imgUrl = rawUrl ? (rawUrl.startsWith("//") ? `https:${rawUrl}` : rawUrl) : null;
  const categoryName = news.fields.category?.fields?.category_name;
  const summary = news.fields?.content?.content?.[0]?.content?.[0]?.value ?? "";
  return (
    <Link href={`/news/${news.fields.title}`} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
      <div className="relative w-full h-48">
        {imgUrl ? (
          <Image src={imgUrl} alt={news.fields.title} width={1280} height={1280} className="object-cover h-full w-full object-[50%_20%]" />
        ) : (
          <div className="h-full w-full bg-gray-200" />
        )}
        {categoryName && (
          <span className="absolute top-3 left-3 bg-green-600 text-white text-xs px-3 py-1 rounded font-semibold">{categoryName}</span>
        )}
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug">{news.fields.title}</h3>
        <p className="text-dark-primary-body mb-4 line-clamp-2">{summary}</p>
        <span className="text-gray-500 text-xs mt-auto">{new Date(news.sys.createdAt).toDateString()}</span>
      </div>
    </Link>
  );
} 