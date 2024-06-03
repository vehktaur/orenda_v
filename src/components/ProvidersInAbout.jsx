import ProviderImages from './ProviderImages';

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
      <ProviderImages />
    </div>
  );
};
export default ProvidersInAbout;
