using BowlerTeam.Models;

namespace BowlerTeam.Data
{
    public interface ITeamRepository
    {
        IEnumerable<Bowler> Bowlers { get; }
        IEnumerable<Team> Teams { get; }

        Team GetTeamById(int? teamId);

    }
}
