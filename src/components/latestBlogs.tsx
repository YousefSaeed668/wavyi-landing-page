import Link from "next/link";
import MaxWidth from "./maxWidth";
import Image from "next/image";
import Button from "./button";
import { ArrowRight } from "lucide-react";

export const revalidate = 43200;
async function getWavyiBlogs(): Promise<Blog[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}StoreBlogs/${process.env.NEXT_PUBLIC_STORE_ID}`
  );
  const data = await res.json();
  return data.data.slice(0, 4);
}

export default async function LatestBlogs() {
  const blogs = await getWavyiBlogs();
  console.log(`${process.env.NEXT_PUBLIC_API_IMAGE}${blogs[0].imageUrl}`);
  return (
    <section className="py-8 md:py-36" id="blogs">
      <MaxWidth>
        <h1 className="text-center text-3xl md:text-5xl font-bold mb-20 text-primaryOne">
          Latest Blogs
        </h1>
        <div className="grid md:grid-cols-2 gap-5">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="rounded-lg py-6 px-4 overflow-hidden border flex justify-between "
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
        <Link className="w-fit mx-auto block mt-8" href="/blogs">
          <Button>View All Blogs</Button>
        </Link>
      </MaxWidth>
    </section>
  );
}
