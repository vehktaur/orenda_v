import "./Hear.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import ReviewsNavigation from "./ReviewsNavigation";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import quote from "../../../assets/quote.png"

const Hear = () => {
  return (
    <div className="hear-container">
      <div className="px-6">
        <h2 className="font-heading  text-center hear-text">Hear from out Clients</h2>
        <div className="crystal max-w-[58.13rem] mx-auto sm:pt-[4rem] sm:pl-[4rem] md:pt-[2rem] ~px-8/[5.44rem] relative">
        <img src={quote} alt="" className="absolute left-0 top-0" />
          <Swiper modules={[Navigation, Pagination]}>
         
            <SwiperSlide className="relative">
              <div className=" grid gap-6 font-dm-sans text-[18px] leading-[26px]">
                <p>
                  “The staff at this location is amazing! The providers are
                  great, easy to schedule with and extremely accommodating! They
                  are so helpful in trying to make sure all of your needs are
                  met and everything goes smoothly in addition to being so
                  responsive and supportive. I also have to mention how great
                  the women who answer the phones are! Everyone I’ve interacted
                  with at this practice has been so kind and helpful. I highly,
                  highly recommend!!”
                </p>
              </div>
              <div className=" bg-[rgb(239,235,223)]  mx-auto mt-6 mb-4">
                <hr className="w-full" />
              </div>
              <div className="flex  items-center gap-4 ">
                <div className="initials font-open-sans bg-white">VE</div>
                <p className="font-open-sans font-bold ~text-[0.69rem]/[1.66rem]">Vanessa E.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative sslide">
              <div className="leading-[26px] grid gap-6 font-dm-sans text-[18px]">
                <p>
                  “The staff at this location is amazing! The providers are
                  great, easy to schedule with and extremely accommodating! They
                  are so helpful in trying to make sure all of your needs are
                  met and everything goes smoothly in addition to being so
                  responsive and supportive. I also have to mention how great
                  the women who answer the phones are! Everyone I’ve interacted
                  with at this practice has been so kind and helpful. I highly,
                  highly recommend!!”
                </p>
              </div>
              <div className=" bg-[rgb(239,235,223)] max-w-[68.75rem] mx-auto mt-6 ">
                <hr />
              </div>
              <div className="flex  items-center gap-4">
                <div className="initials">VE</div>
                <p className="font-open-sans font-bold ~text-[0.69rem]/[1.66rem]">Vanessa E.</p>
              </div>
            </SwiperSlide>

            <ReviewsNavigation />
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default Hear;
