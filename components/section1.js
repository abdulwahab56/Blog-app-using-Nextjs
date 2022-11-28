import Link from "next/link";
import Image from "next/image";
import Author from "./_child/author";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";

const Section1 = () => {
  SwiperCore.use([Autoplay]);
  return (
    <section className="py-16 ">
      <div className="container max-auto md:px-20">
        <h1 className="text-3xl font-bold uppercase pb-12 text-center">
          Trending
        </h1>

        <Swiper
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2000,
          }}
        >
          <SwiperSlide> {Slider()}</SwiperSlide>
          <SwiperSlide> {Slider()}</SwiperSlide>
          <SwiperSlide> {Slider()}</SwiperSlide>
          <SwiperSlide> {Slider()}</SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Section1;

function Slider() {
  return (
    <div className="grid md:grid-cols-2">
      <div className="image">
        <Link href={"/"}>
          <Image
            src={"/images/blog1.jpg"}
            alt="blog iamge"
            width={500}
            height={450}
            className="shadow-lg rounded-lg"
          />
        </Link>
      </div>
      <div>
        <div className="flex">
          <Link href={"/"}>
            <p className="text-2xl text-orange-800 hover:text-orange-600">
              Business,Travel-
            </p>
          </Link>
          <p className="text-2xl text-gray-800 hover:text-gray-600">
            July,3,2022
          </p>
        </div>
        <div className="title">
          <Link href={"/"}>
            <span className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">
              Your most unhappy customers are your greate source of learning
            </span>
          </Link>
          <p className="py-3">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut
          </p>
        </div>
        <Author />
      </div>
    </div>
  );
}
