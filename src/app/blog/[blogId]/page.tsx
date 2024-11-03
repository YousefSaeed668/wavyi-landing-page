import MaxWidth from "@/components/maxWidth";
import { Metadata } from "next";
import Image from "next/image";

export async function generateStaticParams() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}StoreBlogs/${process.env.NEXT_PUBLIC_STORE_ID}`
  );
  const data: { data: Blog[] } = await res.json();
  const ids = data.data.map((blog) => ({ params: { blogId: blog.id } }));
  return ids;
}

export async function generateMetadata({
  params: { blogId },
}: {
  params: { blogId: string };
}): Promise<Metadata> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}StoreBlogs/GetById/${blogId}`
  );
  const data = await res.json();

  return {
    title: data.name,
    description: data.seoContent,
    openGraph: {
      images: [`${process.env.NEXT_PUBLIC_API_IMAGE}${data.imageUrl}`],
    },
  };
}
async function getBlogData(blogId: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}StoreBlogs/GetById/${blogId}`
  );
  const data = await res.json();
  return data;
}
export default async function page({ params }: { params: { blogId: string } }) {
  const blogData = await getBlogData(params.blogId);
  return (
    <div className="pb-20">
      <div className="w-full h-[380px] sm:h-[450px] relative">
        <Image
          fill
          src={`${process.env.NEXT_PUBLIC_API_IMAGE}/${blogData.imageUrl}`}
          className="object-cover"
          alt="blog image"
        />
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-2 text-[26px] font-bold w-[40%] text-center md:w-[70%] sm:w-[80%] sm:text-[22px]">
          {blogData.name}
        </h1>
      </div>
      <MaxWidth className="mt-20">
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html: blogData.content,
            }}
          />
        </div>
      </MaxWidth>
    </div>
  );
}
