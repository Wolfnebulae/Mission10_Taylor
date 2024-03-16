using BowlerTeam.Data;
using BowlerTeam.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace BowlerTeam.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class BowlerTeamController : ControllerBase
    {
        private ITeamRepository _teamRepository;

        public BowlerTeamController(ITeamRepository temp)
        {
            _teamRepository = temp;
        }

        [HttpGet]
        public IEnumerable<Bowler> Get()
        {
            var teamData = _teamRepository.Bowlers
                .Where(bowler => {
                    var teamName = _teamRepository.GetTeamById(bowler.TeamId).TeamName;
                    return teamName == "Sharks" || teamName == "Marlins";
                })
                .ToList(); // To force execution and avoid multiple calls to GetTeamById

            return teamData;
        }
    }
}
