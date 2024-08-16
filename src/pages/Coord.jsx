import React from 'react';
import Faculty from '../components/Faculty';

const Coord = () => {
  return (
    <div className='text-white pt-24' id="contact">
      <h1 className='text-center text-3xl font-bold p-5 font-outfit'>Contacts</h1>
      <h1 className='text-center text-2xl font-bold font-outfit'>Faculty Coordinators</h1>
      <div>
        <div className='lg:flex lg:gap-32 lg:p-5 justify-center'>
          <div>
            <Faculty 
              src="https://www.innovatia23.tech/yuvaraj.jpeg" 
              name="Prof.G.Yuvaraj" 
              post="Co-Ordinator" 
              email="qwer@gmail.com"
            />
          </div>
          <div>
            <Faculty 
              src="https://www.innovatia23.tech/Shiny.jpg" 
              name="Prof.A.Shiny" 
              post="Co-Ordinator" 
              email="qwer@gmail.com"
            />
          </div>
        </div>
        </div>
    </div>
  );
}

export default Coord;
