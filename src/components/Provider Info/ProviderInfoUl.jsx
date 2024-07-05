const ProviderInfoUl = ({ h2, listArray, classes }) => {

  const effectiveListArray = listArray || ['Nil'];

  return (
    <div>
      <h2 className="~text-sm/xl font-bold ~mb-2/4">{h2}</h2>
      <ul className="list-image-dot ps-4 ~space-y-2/[1.06rem]">
        {effectiveListArray.map((item) => (
          <li
            className={`~mb-4/[${classes?.mb}rem] leading-${classes.lineHeight}  ~text-sm/lg text-left`}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ProviderInfoUl;
