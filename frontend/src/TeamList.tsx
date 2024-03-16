import { useEffect, useState } from 'react';
import { BowlerTeam } from './types/BowlerTeam';

function TeamList() {
  const [teamData, setTeamData] = useState<BowlerTeam[]>([]);

  useEffect(() => {
    const fetchTeamData = async () => {
      const rsp = await fetch('http://localhost:5195/bowlerteam');
      const f = await rsp.json();
      setTeamData(f);
    };
    fetchTeamData();
  }, []);

  return (
    <>
      <div className="row">
        <h4 className="text-center">Sharks and Marlins</h4>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Bowler Name</th>
            <th>Team Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {teamData.map((f) => (
            <tr key={f.bowlerId}>
              <td>
                {f.bowlerFirstName} {f.bowlerMiddleInit} {f.bowlerLastName}
              </td>
              <td>{f.team.teamName}</td>
              <td>{f.bowlerAddress}</td>
              <td>{f.bowlerCity}</td>
              <td>{f.bowlerState}</td>
              <td>{f.bowlerZip}</td>
              <td>{f.bowlerPhoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default TeamList;
