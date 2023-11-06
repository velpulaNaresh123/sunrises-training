import React, { useState } from 'react';

const Metro1 = () => {
  const [startStation, setStartStation] = useState('');
  const [endStation, setEndStation] = useState('');
  const [fare, setFare] = useState('');

 
  const metroRoute = {
    'Faluknama': ['Shamsherg', 30],
    'Shamsherg': ['Shalibanda', 45],
    'Shalibanda': ['Charminar', 30],
    'Charminar': ['Salar Jung Musueum', 50],
    'Salar Jung Musueum': ['MGBS', 50],
    'MGBS': ['Sultan Bazar', 40],
    'Sultan Bazar': ['Narayanguda', 30],
    'Narayanguda': ['Chikadpally', 30],
    'Chikadpally': ['RTC X Road', 30],
    'RTC X Road': ['Musheerabad', 30],
    'Musheerabad': ['Gandhi Hospital', 40],
    'Gandhi Hospital': ['Secunderabad west', 45],
    'Secunderabad west': ['Parade Grounds', 40]
  
  };

  const calculateFare = () => {
    let totalFare = 0;
    let currentStation = startStation;

    while (currentStation !== endStation) {
      const nextStationInfo = metroRoute[currentStation];

      if (Array.isArray(nextStationInfo)) {
        totalFare += nextStationInfo[1];
        currentStation = nextStationInfo[0];

      } else if (typeof nextStationInfo === 'object') {
        for (const key in nextStationInfo) {
          if (key === endStation) {
            totalFare += nextStationInfo[key];
            break;
          } else {
            totalFare += nextStationInfo[key];
            currentStation = key;
          }
        }
      }
    }

    setFare(`${totalFare}`);
  };

  return (
    <div>
      <h1>Telangana Metro Fare </h1>
      <div>
       
        StartStation <input type="text" id="startStation" value={startStation}
          onChange={(e) => setStartStation(e.target.value)}
        />
      </div>
      <div>
        
        EndStation <input   type="text"  id="endStation"  value={endStation}
          onChange={(e) => setEndStation(e.target.value)}
        />
      </div>
      <button onClick={calculateFare}>Calculate Fare</button>
      {<p>Fare:{fare}</p>}
    </div>
  );
};

export default Metro1;
