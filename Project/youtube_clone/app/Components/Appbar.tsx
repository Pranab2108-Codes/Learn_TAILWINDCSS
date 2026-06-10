import { Searchbar } from "./Searchbar"


export const Appbar = () => {

  return <div className="flex justify-between pt-1 p-3">
     
            <div>YouTube</div>
            <div className="w-400px"><Searchbar/></div>
            <div>Sign in</div>

         </div>

};