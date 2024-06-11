import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import ReviewsNavigation from './Our Team/Provider Info/ReviewsNavigation';

const Hear = () => {
  return (
    <div className="bg-[#F5F5F5] px-6">
      <h2 className="heading mb-8">Hear from out Clients</h2>
      <div className="max-w-[58.13rem] mx-auto ~px-8/[5.44rem]">
        <Swiper modules={[Navigation, Pagination]}>
          <SwiperSlide>
            <div className="leading-6 grid gap-6">
              <p>
                “The staff at this location is amazing! The providers are great,
                easy to schedule with and extremely accommodating! They are so
                helpful in trying to make sure all of your needs are met and
                everything goes smoothly in addition to being so responsive and
                supportive. I also have to mention how great the women who
                answer the phones are! Everyone I’ve interacted with at this
                practice has been so kind and helpful. I highly, highly
                recommend!!”
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="leading-6 grid gap-6">
              <p>
                “The staff at this location is amazing! The providers are great,
                easy to schedule with and extremely accommodating! They are so
                helpful in trying to make sure all of your needs are met and
                everything goes smoothly in addition to being so responsive and
                supportive. I also have to mention how great the women who
                answer the phones are! Everyone I’ve interacted with at this
                practice has been so kind and helpful. I highly, highly
                recommend!!”
              </p>
            </div>
          </SwiperSlide>
          <div className="sm:hidden bg-[rgb(239,235,223)] max-w-[63.75rem] mx-auto mt-6 mb-4">
            <hr />
          </div>
          <div className="flex justify-end">
            <p className="font-open-sans font-bold">Vanessa E.</p>
            <ReviewsNavigation />
          </div>
        </Swiper>
      </div>
    </div>
  );
};
export default Hear;
