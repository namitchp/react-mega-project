import { useEffect, useState } from 'react';
import VideoPlayer from './VideoPlayer';
import { useRef } from 'react';
import videojs from 'video.js';
import axios from 'axios';
// import Socket from './socket';

function App() {
  const playerRef = useRef(null);
  const [listData, setlistData] = useState([]);
  const handlePlayerReady = async (player) => {
    // You can handle player events here, for example:
    var promise = await player.play();
    playerRef.current = player;
    if (promise !== undefined) {
      promise
        .then(function () {
          // Autoplay started!
        })
        .catch(function (error) {
          // Autoplay was prevented.
          console.log(error);
        });
      player.on('waiting', () => {
        videojs.log('player is waiting');
      });

      player.on('dispose', () => {
        videojs.log('player will dispose');
      });
    }
  };
  const videoplayerTag = () => {
    return listData.map((val) => (
      <div key={val.lessonId} className="reel-item">
        <VideoPlayer
          options={{
            controls: true,
            responsive: true,
            fluid: true,
            autoplay: true,
            sources: [
              {
                src: val.videoUrl,
                type: 'application/x-mpegURL',
              },
            ],
          }}
          onReady={handlePlayerReady}
        />
      </div>
    ));
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/video_list');
        if (response.data.valid) setlistData(response.data.list);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <h1 className="text-3xl font-bold underline namit ">Hello world!</h1>
      {/* <div className="reel-container"> */}
      <div className="">Hello hi</div>
      {/* <Socket /> */}
      {videoplayerTag()}
      {/* <Socket /> */}
      {/* </div> */}
    </>
  );
}

export default App;
