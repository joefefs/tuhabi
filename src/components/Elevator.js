import React from 'react';

function Elevator({formData, setFormData}) {
    console.log(formData.elevator)
    return (
        <div className='radio'>
         
            <input 
                type="radio"  
                id="si"
                name="elevator"
                checked={formData.elevator === "si"}
                value="Si"
                onChange={(e)=>setFormData({...formData, elevator: e.target.value})}     
            />
            <label htmlFor='si'>Si</label>
            <br />
            <input 
                type="radio"  
                id="no"
                name="elevator"
                checked={formData.elevator === "no"}
                value="No"
                onChange={(e)=>setFormData({...formData, elevator: e.target.value})}      
                 />
            <label htmlFor='no'>No</label>

            

            
        </div>
    );
}

export default Elevator;