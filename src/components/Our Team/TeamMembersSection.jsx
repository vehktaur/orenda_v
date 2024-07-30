import TeamMemberCard from './TeamMemberCard';

const TeamMembersSection = ({ slide }) => {
  return (
    <div className="grid grid-cols-team gap-x-8 gap-y-12 justify-between items-stretch">
      {slide.map((member, index) => (
        <TeamMemberCard key={index + 50} member={member} />
      ))}
    </div>
  );
};
export default TeamMembersSection;
