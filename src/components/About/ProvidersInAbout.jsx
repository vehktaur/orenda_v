import { aboutProviderImages } from '../../utils/providerImages';

const ProvidersInAbout = () => {
  return (
    <div className="max-w-7xl mx-auto text-center px-5">
      <h2 className="heading mb-4">Meet Our Providers</h2>
      <p className="~mt-4/6 ~mb-6/[3.25rem] max-w-[65.75rem] mx-auto">
        We believe in providing compassionate and comprehensive mental health
        care to our clients, and we recognize that each person is unique and
        requires personalized care. We understand that seeking therapy can be a
        significant step towards healing and personal growth. Our dedicated team
        of experienced therapists is here to support you on your journey to
        emotional well-being.
      </p>
      <div className="container mx-auto ~p-0/4 max-w-[67.75rem]">
        <div className="grid grid-cols-5 md:grid-cols-10 gap-2.5">
          {aboutProviderImages.map((src, index) => (
            <div
              key={index}
              className="bg-[#F1F1F1] ~xs/xl:~size-[3.2rem]/[5.625rem] rounded-lg overflow-hidden flex flex-col justify-end"
            >
              <img
                src={src}
                alt={`Provider ${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProvidersInAbout;
