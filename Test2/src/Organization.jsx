import React, { useState } from 'react';

const Organization = () => {
  const [admins] = useState({
    'Root Admin': ['Company Admin'],
    'Company Admin': ['Site Admin', 'Trainee1', 'Trainee2'],
    'Site Admin': ['Trainee3', 'Trainee4'],
    'Sudha': ['Trainee5', 'Trainee6'],
    'Narayan': ['Trainee7', 'Trainee8', 'Trainee9'],
    'Nanda': ['Trainee10', 'Trainee11', 'Trainee12', 'Trainee13', 'Trainee14'],
  });

  const getTraineesForAdmin = (adminName) => {
    const trainees = [];

    const findTrainees = (admin) => {
      if (admins[admin]) {
        admins[admin].forEach((reportingTo) => {
          if (reportingTo.startsWith('Trainee')) {
            trainees.push(reportingTo);
          } else {
            findTrainees(reportingTo);
          }
        });
      }
    };

    findTrainees(adminName);

    return trainees;
  };

  return null; // This functional component doesn't render anything.
};

export default Organization;
