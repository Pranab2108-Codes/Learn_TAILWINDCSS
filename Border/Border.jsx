export default function Border() {

  return (                                                               
                                                                         /* flex(flex the container), justify(horizontally), items(vertically), h-screen(makes the parent take the full screen height). */
    <div className="flex justify-center items-center h-screen">

      <div className="bg-green-500 text-red-500 text-xs rounded-lg w-40 h-40">

        Hi there from the first div

      </div>

    </div>                                                               /* Here bg(backgroundColor), 500(shade/intensity of that color), text-red(textColor), text-xs(text size to extra small), rounded(add a border radius to make corners rounded). */
    
  );

};


// import { StrictMode } from 'react'                                    /* It should be written inside of src/main.jsx. */
// import { createRoot } from 'react-dom/client'
// import './index.css';
// import Border from '../Border/Border.jsx';

// createRoot(document.getElementById('root')).render(
  
//     <Border />
  
// );