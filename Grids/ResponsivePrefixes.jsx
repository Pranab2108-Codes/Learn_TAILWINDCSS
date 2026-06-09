export default function ResponsivePrefixes() {

  return (                                                          /* Here we know total we mentioned 12 coloumn, so by using this line "col-span-12 md:col-span-5" it describe as bydefault we made the coloumns to take full width of screen but when the screen size become medium like >=768px the first div takes 5 coloumns space among these 12 coloumns. */

    <div className="grid grid-cols-12">
      
      <div className="col-span-12 md:col-span-5 bg-blue-500">
        
        Hi there from the first div

      </div>

      <div className="col-span-12 md:col-span-5 bg-red-500">
        
        Hi there from the second div
      
      </div>

      <div className="col-span-12 md:col-span-2 bg-pink-300">
        
        Hi there from the third div

      </div>

    </div>

  );

};


// import { StrictMode } from 'react'                               /* It should be written inside of src/main.jsx. */
// import { createRoot } from 'react-dom/client'
// import './index.css';
// import ResponsivePrefixes from '../Grids/ResponsivePrefixes.jsx';

// createRoot(document.getElementById('root')).render(
  
//     <ResponsivePrefixes />
  
// );