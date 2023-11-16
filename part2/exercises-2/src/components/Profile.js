import oceans from './oceans.json';
import './styles.css';
import Button from './Button';


const listItem = oceans.map(ocean => 
   <div key={ocean.id} className="profile">
      <img src={ocean.image} alt={ocean.name} className="img" />
      <h1>{ocean.name}</h1>
      <h3>Fun Facts</h3>
      <ul>
         <li>{ocean.fact1}</li>
         <li>{ocean.fact2}</li>
         <li>{ocean.fact3}</li>
      </ul>
      <Button />
   </div>
      );

function Profile()
{
   return(
         <ul>
         {listItem}
         </ul>
   );
}

export default Profile;