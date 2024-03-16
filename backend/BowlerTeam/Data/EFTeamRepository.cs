using BowlerTeam.Models;

namespace BowlerTeam.Data
{
    public class EFTeamRepository : ITeamRepository
    {
        private BowlingLeagueContext _teamContext;

        public EFTeamRepository(BowlingLeagueContext temp) 
        {
            _teamContext = temp;
        }

        public IEnumerable<Bowler> Bowlers => _teamContext.Bowlers;
        public IEnumerable<Team> Teams => _teamContext.Teams;

        public Team GetTeamById(int? teamId)
        {
            return _teamContext.Teams.Find(teamId);
        }
    }
}
