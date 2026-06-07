export default function Flexbox2() {
                                                             /* This is our tailwind CSS. */
  return (

    <div className="flex justify-between">

      <div className="bg-orange-500">

        Hi there from the first div

      </div>

      <div className="bg-slate-500">

        Hi there from the second div

      </div>

      <div className="bg-green-500">

        Hi there from the third

      </div>

    </div>

  );

};


// import { StrictMode } from 'react'                        /* It should be written inside of src/main.jsx. */
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import Flexbox2 from '../Flexbox/Flexbox2.jsx';

// createRoot(document.getElementById('root')).render(
  
//     <Flexbox2 />
  
// );
