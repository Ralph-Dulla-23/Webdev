import React, { useState } from 'react';


function Pending() {

    const handleAccept = (name) => {
        // Implement your logic for accepting feedback here
        console.log(`Accepted feedback from ${name}`);
      };
    
      // Function to handle decline action
      const handleDecline = (name) => {
        // Implement your logic for declining feedback here
        console.log(`Declined feedback from ${name}`);
      };
    
    return (
        <>
          <h1 className='pendingtitle'>Pending Requests</h1>
          <table className="custom-table-2">
            <thead>
              <tr>
                <th>Name</th>
                <th>Reason</th>
                <th>Action</th> {/* New column for buttons */}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Luke</td>
                <td>Need more time to borrow</td>
                <td>
                  {/* Accept and Decline buttons */}
                  <button className='btnaccept' onClick={() => handleAccept('Luke')}>Accept</button>
                  <button className='btndecline' onClick={() => handleDecline('Luke')}>Decline</button>
                </td>
              </tr>
              {/* Repeat the same structure for other rows */}
            </tbody>
          </table>
        </>
    );
}

export default Pending;
