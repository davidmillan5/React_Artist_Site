import { useState, useEffect } from 'react';
export const Load = () => {
  const [isLoading, setIsLoading] = useState(true),
    [time, setTime] = useState(0);

  useEffect(() => {
    if (time > 0) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [time]);

  setTimeout(() => {
    setTime(1);
  }, 5000);

  if (isLoading) {
    return (
      <>
        <div className="container my-4">
          <div className="row">
            <div className="col-12">
              <figure className="">
                <h3 className="text-center text-dark">Loading...</h3>
                <img
                  src="../../src/assets/img/rayden.gif"
                  alt=""
                  className="img-fluid mx-auto d-block"
                />
                <iframe
                  src="https://giphy.com/embed/Fmca5uDri2ipOX6n7m"
                  width="480"
                  height="270"
                  frameBorder="0"
                  className="giphy-embed my-2"
                  allowFullScreen
                ></iframe>
                <p className="">
                  <a href="https://giphy.com/gifs/MovistarPlus-movistarplus-ilustres-ignorantes-Fmca5uDri2ipOX6n7m"></a>
                </p>
                <iframe
                  src="https://giphy.com/embed/jRAaYrDqpUKMgIE2W2"
                  width="480"
                  height="270"
                  frameBorder="0"
                  className="giphy-embed my-2"
                  allowFullScreen
                ></iframe>
                <p>
                  <a href="https://giphy.com/gifs/MovistarPlus-movistarplus-ilustres-ignorantes-jRAaYrDqpUKMgIE2W2"></a>
                </p>
              </figure>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <h4 className="text-center text-dark my-4">Loaded....</h4>
      </>
    );
  }
};
