import teamData from '../../data/teamData';
import TeamMemberCard from './TeamMemberCard';

const TeamMembersSection = ({ itemOffset, endOffset }) => {
  const sectionTeamData = teamData.slice(itemOffset, endOffset);

  return (
    <div className="grid grid-cols-team gap-x-8 gap-y-12 justify-between items-stretch">
      {sectionTeamData.map((member, index) => (
        <TeamMemberCard key={index + 50} member={member} />
      ))}
    </div>
  );
};
export default TeamMembersSection;
