import { VideoCard } from "./VideoCard";


const VIDEOS = [{                                     /* Let's say these are the set of videos which going to be set in UI and these need to be fetch by backend. */

  title: "I-POP star Abhijay Sharma song (O Soneya)",
  image: "Hustle.png",
  thumbnail: "first.png",
  author: "Abhijay Sharma",
  views: "69M",
  timestamp: "13 days ago"

},{

  title: "Bluethooth era king Honey Singh song (Millionaire)",
  image: "HoneySingh.png",
  thumbnail: "second.png",
  author: "Honey Singh",
  views: "128M",
  timestamp: "3 days ago"

},{

  title: "Resume building by Siddharth Singh",
  image: "Tech.png",
  thumbnail: "third.png",
  author: "Siddharth Singh",
  views: "100k",
  timestamp: "6 days ago"

},{

  title: "@0 Ice creams in India ranked from west to best",
  image: "FitTuber.png",
  thumbnail: "fourth.png",
  author: "Vivek Mittal",
  views: "90M",
  timestamp: "27 days ago"

},{                                     /* Let's say these are the set of videos which going to be set in UI and these need to be fetch by backend. */

  title: "I-POP star Abhijay Sharma song (O Soneya)",
  image: "Hustle.png",
  thumbnail: "first.png",
  author: "Abhijay Sharma",
  views: "69M",
  timestamp: "13 days ago"

},{

  title: "Bluethooth era king Honey Singh song (Millionaire)",
  image: "HoneySingh.png",
  thumbnail: "second.png",
  author: "Honey Singh",
  views: "128M",
  timestamp: "3 days ago"

},{

  title: "Resume building by Siddharth Singh",
  image: "Tech.png",
  thumbnail: "third.png",
  author: "Siddharth Singh",
  views: "100k",
  timestamp: "6 days ago"

},{

  title: "@0 Ice creams in India ranked from west to best",
  image: "FitTuber.png",
  thumbnail: "fourth.png",
  author: "Vivek Mittal",
  views: "90M",
  timestamp: "27 days ago"

},{                                     /* Let's say these are the set of videos which going to be set in UI and these need to be fetch by backend. */

  title: "I-POP star Abhijay Sharma song (O Soneya)",
  image: "Hustle.png",
  thumbnail: "first.png",
  author: "Abhijay Sharma",
  views: "69M",
  timestamp: "13 days ago"

},{

  title: "Bluethooth era king Honey Singh song (Millionaire)",
  image: "HoneySingh.png",
  thumbnail: "second.png",
  author: "Honey Singh",
  views: "128M",
  timestamp: "3 days ago"

},{

  title: "Resume building by Siddharth Singh",
  image: "Tech.png",
  thumbnail: "third.png",
  author: "Siddharth Singh",
  views: "100k",
  timestamp: "6 days ago"

},{

  title: "@0 Ice creams in India ranked from west to best",
  image: "FitTuber.png",
  thumbnail: "fourth.png",
  author: "Vivek Mittal",
  views: "90M",
  timestamp: "27 days ago"

},{                                     /* Let's say these are the set of videos which going to be set in UI and these need to be fetch by backend. */

  title: "I-POP star Abhijay Sharma song (O Soneya)",
  image: "Hustle.png",
  thumbnail: "first.png",
  author: "Abhijay Sharma",
  views: "69M",
  timestamp: "13 days ago"

},{

  title: "Bluethooth era king Honey Singh song (Millionaire)",
  image: "HoneySingh.png",
  thumbnail: "second.png",
  author: "Honey Singh",
  views: "128M",
  timestamp: "3 days ago"

},{

  title: "Resume building by Siddharth Singh",
  image: "Tech.png",
  thumbnail: "third.png",
  author: "Siddharth Singh",
  views: "100k",
  timestamp: "6 days ago"

},{

  title: "@0 Ice creams in India ranked from west to best",
  image: "FitTuber.png",
  thumbnail: "fourth.png",
  author: "Vivek Mittal",
  views: "90M",
  timestamp: "27 days ago"

}];

export const VideosGrid = () => {

  return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-6">

            {VIDEOS.map(video =>

              <div>

                <VideoCard

                  title={video.title}
                  image={video.image}
                  thumbnail={video.thumbnail}
                  author={video.author}
                  views={video.views}
                  timestamp={video.timestamp}

                />

              </div>

            )};

         </div>
};