const TeamMemberCard = ({ member }) => {
  return (
    <div>
      <div className="~h-[6.875rem]/[15.625rem] w-full bg-[#f1f1f1] rounded-2xl overflow-hidden ~pt-2/4">
        <img
          className="size-full object-cover"
          src={member.image}
          alt={member.name}
        />
      </div>
      <h3 className="font-semibold ~text-sm/lg font-open-sans mt-3 text-center md:text-justify">
        {member.name}
      </h3>
      <div className="flex gap-2 items-center text-center">
        <span className="size-2 hidden md:block">
          <svg
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle id="Ellipse 263" cx="4" cy="4" r="4" fill="#C2C2C2" />
          </svg>
        </span>
        <span className="~text-xs/sm font-open-sans mx-auto md:mx-0">
          {member.position}
        </span>
      </div>
    </div>
  );
};
export default TeamMemberCard;
