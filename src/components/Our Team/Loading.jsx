const Loading = ({ data }) => {
  return (
    <div className="min-h-[35rem] grid place-items-center ~text-lg/xl font-medium font-dm-sans italic">
      <p className="flex flex-col items-center gap-5">
        Fetching {data}...{' '}
        <span className="block bg-transparent border-l-[0.1rem] border-orenda-purple size-12 animate-spin rounded-full"></span>{' '}
      </p>
    </div>
  );
};
export default Loading;
