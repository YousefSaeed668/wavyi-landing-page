import MaxWidth from "@/components/maxWidth";
import { ArrowRight } from "lucide-react";
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
    <section className="py-20 ">
      <MaxWidth>
        <h1 className=" text-3xl md:text-5xl font-bold mb-20 text-primaryOne">
          All Blogs
        </h1>
        <div className="flex flex-col gap-5">
          {blogs.data.map((blog) => (
            <div
              key={blog.id}
              className="rounded-lg py-6 px-4 overflow-hidden border flex justify-between md:max-w-[70%]"
            >
              <div>
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_IMAGE}${blog.imageUrl}`}
                  alt="image"
                  width={200}
                  height={200}
                />
              </div>
              <div className="w-[70%] max-w-[70%]">
                <h2 className="text-xl font-bold text-gray-600 p-2">
                  <Link
                    href={`/blog/${blog.id}`}
                    className="hover:text-primaryOne"
                  >
                    {blog.name}
                  </Link>
                </h2>
                <p className="p-2">{blog.seoContent}</p>
                <Link
                  href={`/blog/${blog.id}`}
                  className="flex gap-2 items-center group"
                >
                  Read More{" "}
                  <ArrowRight
                    size={16}
                    className="group-hover:-translate-x-2 transition duration-300"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </MaxWidth>
    </section>
  );
}
