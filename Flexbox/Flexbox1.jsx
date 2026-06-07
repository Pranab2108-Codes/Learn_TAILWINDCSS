export default function Flexbox1() {

  return (                                                   /* This is our normal CSS. */

    <div style={{display: "flex", justifyContent: "space-between"}}>
      
      <div style={{background: "green"}}>

        Hi there from the first div

      </div>

      <div style={{background: "red"}}>

        Hi there from the second div

      </div>

      <div style={{background: "pink"}}>

        Hi there from the third div

      </div>

    </div>

  );
  
};


// import { StrictMode } from 'react'                        /* It should be written inside of src/main.jsx. */
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import Flexbox1 from '../Flexbox/Flexbox1.jsx';

// createRoot(document.getElementById('root')).render(
  
//     <Flexbox1 />
  
// );
