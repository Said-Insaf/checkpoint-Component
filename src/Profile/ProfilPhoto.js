import React from 'react';
import photoprofil from '../assets/photoprofil.jpg'


const ProfilPhoto = () => {
     return (
<>
   <img src={photoprofil} alt="users" className="" style={{ width: "30%"}} />
   <br/>
    <img src="./BackF.jpg" alt="" className="Back" style={{ width: "100%"}} />
    </>
     );
    };
    export default ProfilPhoto;