import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [
      {
         label: "",
         value: ""
      },
      {
         label: "",
         value: ""
      },
      {
         label: "",
         value: ""
      }
   ];

   const handleChange = (event) => {
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}
