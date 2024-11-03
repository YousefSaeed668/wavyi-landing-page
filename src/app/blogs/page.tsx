import Button from "@/components/button";
import MaxWidth from "@/components/maxWidth";
import Image from "next/image";
import Link from "next/link";

async function getWavyiBlogs(): Promise<{ data: Blog[] }> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}StoreBlogs/${process.env.NEXT_PUBLIC_STORE_ID}`
  );
  const data = await res.json();
  return data;
}

export default async function page() {
  const blogs = await getWavyiBlogs();
  return (
    <section>
      <MaxWidth>
        <h1 className="text-center text-3xl md:text-5xl font-bold mb-20 text-primaryOne">
          Blogs
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4  ">
          {blogs.data.map((blog) => (
            <div
              key={blog.id}
              className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all"
            >
              <div className="relative w-full h-[300px]">
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_IMAGE}${blog.imageUrl}`}
                  fill
                  alt={blog.name}
                />
              </div>

              <div className="p-5">
                <h2 className="text-xl font-semibold mb-2">{blog.name}</h2>
                <p className="text-gray-500 font-semibold mb-8">
                  {blog.seoContent}
                </p>
                <Link href={`/blog/${blog.id}`}>Learn More</Link>
              </div>
            </div>
          ))}
        </div>
      </MaxWidth>
    </section>
  );
}
