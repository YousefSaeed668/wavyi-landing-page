import { Star, StarHalf } from "lucide-react";
import MaxWidth from "./maxWidth";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";

export default async function Testimonials() {
  const t = await getTranslations("testimonials");
  const testimonialIndices = Array.from({ length: 13 }, (_, i) => i);
  return (
    <section className="py-20 ">
      <MaxWidth>
        <h1
          className="text-center text-3xl md:text-5xl font-bold mb-6"
          data-aos="fade-left"
        >
          {t("title")}
        </h1>
        <p
          className="text-center text-xl  md:w-[60%] lg:w-[40%] mx-auto mb-20"
          data-aos="fade-right"
        >
          {t("testimonialParagraph")}
        </p>
        <Carousel
          dir="ltr"
          opts={{
            align: "start",
          }}
        >
          <CarouselContent className="py-8">
            {testimonialIndices.map((index) => {
              const testimonial = {
                photo: t.raw(`items.${index}.photo`),
                name: t(`items.${index}.name`),
                rating: t.raw(`items.${index}.rating`),
                content: t(`items.${index}.content`),
              };

              return (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2"
                  data-aos="fade-up"
                >
                  <TestimonialItem item={testimonial} />
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <div className="flex absolute left-1/2 top-[110%] -translate-x-1/2 gap-3">
            <CarouselPrevious className="relative left-0 translate-x-0 translate-y-0 shadow-md p-6" />
            <CarouselNext className="relative left-0 translate-x-0 translate-y-0 shadow-md p-6" />
          </div>
        </Carousel>
      </MaxWidth>
    </section>
  );
}

type Item = {
  photo: string;
  name: string;
  rating: number;
  content: string;
};
function TestimonialItem({ item }: { item: Item }) {
  const { rating, content, photo, name } = item;
  return (
    <div className=" shadow-xl rounded-xl hover:-translate-y-1 h-full duration-300 p-6">
      <div className="mt-4">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <div className="mr-2">
              <Image
                src={photo}
                alt={name}
                className="max-w-full h-auto rounded-full border"
                width="47"
                height="47"
              />
            </div>
            <div>
              <h5 className="text-xl break-all font-medium">{name}</h5>
            </div>
          </div>
          <Rating rating={rating} showLabel={false} />
        </div>
        <p className="leading-[1.8] opacity-80 mb-6">
          <bdi>{content}</bdi>
        </p>
      </div>
    </div>
  );
}

async function Rating({
  rating,
  showLabel = true,
}: {
  rating: number;
  showLabel: boolean;
}) {
  const roundedRating = Math.round(rating * 2) / 2;
  const locale = await getLocale();
  const stars = [];
  const totalStars = 5;

  for (let i = 1; i <= totalStars; i++) {
    if (i <= roundedRating) {
      stars.push(
        <Star key={i} className="fill-yellow-400 text-yellow-400" size={20} />
      );
    } else if (i - 0.5 === roundedRating) {
      stars.push(
        <StarHalf
          key={i}
          className={`fill-yellow-400 [transform:rotateY(45deg)]
             ${locale === "ar" ? "[transform:rotateY(180deg)]" : "rotate-0"}
           text-yellow-400`}
          size={20}
        />
      );
    } else {
      stars.push(
        <Star key={i} className="text-gray-300 dark:text-gray-600" size={20} />
      );
    }
  }

  return (
    <div className="flex items-center gap-1">
      <div className="flex">{stars}</div>
      {showLabel && <span className="ml-1">({rating})</span>}
    </div>
  );
}
