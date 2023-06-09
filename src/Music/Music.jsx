import { serviceSongs } from '../services/serviceSongs';
import { useState, useEffect } from 'react';

export const Music = () => {
  const [songs, setSongs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    serviceSongs().then((response) => {
      setSongs(response.tracks);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <>
        <h1>Loading....</h1>
      </>
    );
  } else {
    return (
      <>
        {songs.map((song) => {
          return (
            <>
              <div className="container">
                <p className="text-center">{song.name}</p>
                <p className="text-center">{song.album.name}</p>
                <audio
                  controls
                  src={song.preview_url}
                  className="m-5 text-center"
                ></audio>
              </div>
            </>
          );
        })}
      </>
    );
  }
};
