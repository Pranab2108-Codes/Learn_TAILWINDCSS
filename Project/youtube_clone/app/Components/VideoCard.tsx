export function VideoCard(props: any) {

  return <div className="p-3 cursor-pointer">

            <img src={props.image} className="rounded-xl"></img>

            <div className="grid grid-cols-12">

              <div className="col-span-1">

                <img src={props.thumbnail} className="rounded-full w-20 h-15"></img>
              
              </div>

              <div className="col-span-11 pl-1">

                <b>{props.title}</b>
                <div className="col-span-11 text-gray-400 text-base">
                  
                  {props.author}

                </div>
                <div className="col-span-11 text-gray-400 text-base">

                  {props.views} | {props.timestamp}

                </div>

              </div>
              
            </div>

         </div>

};