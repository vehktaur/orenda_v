const Loading = ({ data }) => {
  return (
    <div className="min-h-[25rem] grid place-items-center ~text-lg/xl">
      <p className="flex flex-col items-center gap-5">
        Fetching {data}...{' '}
        <span className="block bg-transparent border-l-[0.1rem] border-black size-12 animate-spin rounded-full"></span>{' '}
      </p>
    </div>
  );
};
export default Loading;
