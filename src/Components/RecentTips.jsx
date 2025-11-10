import React from "react";
import { useLoaderData } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { GrLike } from "react-icons/gr";

const RecentTips = () => {
  const { recentTips } = useLoaderData();
  console.log(recentTips);

  return (
    <section className="pb-16 w-11/12 mx-auto">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#041735]">
          Recent Tips
        </h2>
        <p className="text-lg text-center md:text-xl font-semibold mt-2 text-[#041735]/50">
          Latest eco-friendly ideas from our community
        </p>
      </div>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={17}
        loop={true}
        dir="ltr"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        className="mySwiper"
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}

      >
        {
          recentTips.map((tip, index) => (
            <SwiperSlide key={index}>
              <div className="max-w-sm cursor-pointer mx-auto lg:mx-0">
                <div className="card bg-base-100 border border-gray-200 hover:shadow-xl transition rounded-2xl">
                  <div className="card-body">
                    <h3 className="card-title text-lg font-semibold text-gray-800">
                      {tip.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">by {tip.authorName}</p>
                    <p className="text-gray-700 line-clamp-2">{tip.preview}</p>
                    <div className="flex justify-between items-center text-sm text-gray-500 mt-4 pt-3 border-t border-t-gray-300">
                      <span className="flex gap-2"><GrLike /> {tip.upvotes}</span>
                      <span>{tip.createdAt}</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </section>
  );
};

export default RecentTips;
