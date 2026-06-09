export default function GridsUnEqualWidth() {

  return (                                                   /* Similarly here 12 means it ceated 12 coloumns of equal width and these 5, 5, 2 are the number of coloumns which are taken by that div container. */
    
    <div className="grid grid-cols-12">

      <div className="col-span-5 bg-green-500">

        Hi there from the first div

      </div>

      <div className="col-span-5 bg-red-500">

        Hi there from the second div

      </div>

      <div className="col-span-2 bg-pink-300">

        Hi there from the third div

      </div>

    </div>

  );

};


// import { StrictMode } from 'react'                        /* It should be written inside of src/main.jsx. */
// import { createRoot } from 'react-dom/client'
// import './index.css';
// import GridsUnEqualWidth from '../Grids/GridsUnEqualWidth.jsx';

// createRoot(document.getElementById('root')).render(
  
//     <GridsUnEqualWidth />
  
// );