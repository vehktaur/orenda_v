import teamData from '../../data/teamData';
import TeamMemberCard from './TeamMemberCard';

const TeamMembersSection = ({ itemOffset, endOffset }) => {
  const sectionTeamData = teamData.slice(itemOffset, endOffset);

  return (
    <div className="grid grid-cols-4 gap-x-4 gap-y-12 items-center justify-center">
      {sectionTeamData.map((member, index) => (
        <TeamMemberCard key={index + 50} member={member} />
      ))}
    </div>
  );
};
export default TeamMembersSection;
