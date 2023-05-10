import { useState, useEffect } from 'react';

export const Hook = () => {
  // Before return configure the states variables
  const [counter, setCounter] = useState(0);

  // function onclick

  const incrementAccount = () => {
    setCounter(counter + 1);
  };

  // execution detector

  useEffect(() => {
    setCounter(counter + 1);
  }, []);

  return (
    <>
      <div className="container-fluid d-flex justify-content-around my-5">
        <div className="row">
          <div className="col">
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={incrementAccount}
            >
              Click
            </button>
          </div>
        </div>
        <div className="row">
          <h2 className="text-center">Count on: {counter}</h2>
        </div>
      </div>
    </>
  );
};
