const ProviderInfoUl = ({ h2, listArray, classes }) => {

  const effectiveListArray = listArray || ['Nil'];

  return (
    <div>
      <h2 className="footer__heading">{h2}</h2>
      <ul className="list-image-dot ps-4 ~text-sm/lg ~space-y-2/[1.06rem]">
        {effectiveListArray.map((item) => (
          <li
            className={`~mb-4/[${classes?.mb}rem] leading-${classes.lineHeight} text-left`}
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
