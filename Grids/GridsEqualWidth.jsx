export default function Grids() {  

  return (      
                                                       /* Here this 4 means it creating total 4 coloumns of equal width. */
    <div className="grid grid-cols-4">

      <div className="bg-green-500">

        Hi there from the first div

      </div>

      <div className="bg-red-500">

        Hi there from the second div

      </div>

      <div className="bg-pink-300">

        Hi there from the third div

      </div>

    </div>                                             /* We know we mentioned total of 4 coloumns but we made only 3 so the last one become empty, means it won't show anything. */

  );

};


// import { StrictMode } from 'react'                  /* It should be written inside of src/main.jsx. */
// import { createRoot } from 'react-dom/client'
// import './index.css';
// import GridsEqualWidth from '../Grids/GridsEqualWidth.jsx';

// createRoot(document.getElementById('root')).render(
  
//     <GridsEqualWidth />
  
// );