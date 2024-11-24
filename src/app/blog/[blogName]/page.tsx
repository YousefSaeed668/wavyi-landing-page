import MaxWidth from "@/components/maxWidth";
import { Metadata } from "next";
import Image from "next/image";
export const revalidate = 12000;
export async function generateStaticParams() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}StoreBlogs/${process.env.NEXT_PUBLIC_STORE_ID}`
  );
  const data: { data: Blog[] } = await res.json();
  const blogNames = data.data.map((blog) => ({
    blogName: blog.name,
  }));
  return blogNames;
}

export async function generateMetadata({
  params,
}: {
  params: { blogName: string };
}): Promise<Metadata> {
  const data = await getBlogData(params.blogName);
  return {
    title: data.name,
    description: data.seoContent,
    openGraph: {
      images: [`${process.env.NEXT_PUBLIC_API_IMAGE}${data.imageUrl}`],
    },
  };
}
async function getBlogData(blogName: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}StoreBlogs/New/GetBySlug/${blogName}/${process.env.NEXT_PUBLIC_STORE_NAME}`
  );

  const data = await res.json();
  return data;
}
export default async function page({
  params,
}: {
  params: { blogName: string };
}) {
  const blogData = await getBlogData(params.blogName);
  return (
    <div className="py-20">
      <MaxWidth>
        <div className="flex justify-between items-center flex-col md:flex-row">
          <h1 className=" text-3xl md:text-5xl font-bold mb-20 max-md:text-center md:max-w-[60%] ">
            {blogData.name}
          </h1>
          <div className="w-full md:w-[450px] h-[300px] relative">
            <Image
              src={`${process.env.NEXT_PUBLIC_API_IMAGE}${blogData.imageUrl}`}
              alt="image"
              fill
            />
          </div>
        </div>
        <div
          className="md:w-[60%] mx-auto shadow-xl rounded-sm mt-20 p-8"
          dangerouslySetInnerHTML={{ __html: blogData.content }}
        ></div>
      </MaxWidth>
    </div>
  );
}
