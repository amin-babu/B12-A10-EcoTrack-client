import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const HeroSlider = () => {
  const swiperRef = useRef(null);

  return (
    <div className="relative w-full h-[280px] md:h-[calc(100vh-65px)] overflow-hidden">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        pagination={{ clickable: true }}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="w-full h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="w-full h-full relative">
            <img
              src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
              className="w-full h-full object-cover"
              alt="Challenge Slide"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white px-6 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Plastic Free Week
              </h2>
              <p className="mb-4 text-sm md:text-base max-w-xl">
                Join the mission to reduce plastic waste and build a cleaner,
                greener planet.
              </p>
              <button className="btn btn-primary">View Challenge</button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="w-full h-full relative">
            <img
              src="https://images.unsplash.com/photo-1523978591478-c753949ff840"
              className="w-full h-full object-cover"
              alt="Challenge Slide"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white px-6 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Walk to Work Challenge
              </h2>
              <p className="mb-4 text-sm md:text-base max-w-xl">
                Reduce CO₂ emissions by choosing walking over vehicles.
              </p>
              <button className="btn btn-primary">View Challenge</button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="w-full h-full relative">
            <img
              src="https://images.unsplash.com/photo-1621788051568-dd6bbe1f2f5f"
              className="w-full h-full object-cover"
              alt="Challenge Slide"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white px-6 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Home Energy Saver
              </h2>
              <p className="mb-4 text-sm md:text-base max-w-xl">
                Save energy, cut bills, and reduce your carbon footprint.
              </p>
              <button className="btn btn-primary">View Challenge</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Custom Buttons */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute hidden md:inline cursor-pointer z-10 left-4 top-1/2 -translate-y-1/2 bg-white text-primary rounded-full p-3 shadow-lg hover:bg-primary hover:text-white transition"
      >
        <FaArrowLeft size={20} />
      </button>

      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute hidden md:inline cursor-pointer z-10 right-4 top-1/2 -translate-y-1/2 bg-white text-primary rounded-full p-3 shadow-lg hover:bg-primary hover:text-white transition"
      >
        <FaArrowRight size={20} />
      </button>
    </div>
  );
};

export default HeroSlider;
