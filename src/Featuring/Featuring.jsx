export const Featuring = () => {
  let featurings = [
    {
      id: 1,
      song: 'El Lenguaje De Los Coleteros',
      collaborator: 'Dani Fernandez',
      duration: '3:25',
      cover:
        'https://m.media-amazon.com/images/I/41yd7pEJUaL._UXNaN_FMjpg_QL85_.jpg',
      link: 'https://open.spotify.com/track/5Q4xFUlMcZJkP5GzMdZoOK?si=b187e74d46844acb',
    },
    {
      id: 2,
      song: 'Mujeryego',
      collaborator: 'Nanpa Basico',
      duration: '3:38',
      cover:
        'https://lastfm.freetls.fastly.net/i/u/500x500/ff099dfb4ee18447f7b2a1364324a575.jpg',
      link: 'https://open.spotify.com/album/1B1BNhwGIim7UoMMQyZqjl?si=SX8MrPyoQ2edlKeLZ-Iyfw',
    },
  ];

  return (
    <>
      {/* you map an array */}
      <div className="container">
        <div className="row">
          {featurings.map((feature) => {
            return (
              <div
                className="card my-3 mx-3"
                style={{ width: '24rem' }}
                key={feature.id}
              >
                <img
                  src={feature.cover}
                  className="card-img-top img-fluid rounded mx-auto d-block"
                  alt="..."
                />
                <div className="card-body">
                  <h3 className="card-title text-center">{feature.song}</h3>
                  <h5 className="card-title text-center">
                    Feature: {feature.collaborator}
                  </h5>
                  <p className="card-text text-center">
                    Duration: {feature.duration}
                  </p>
                  <a
                    href={feature.link}
                    className="btn btn-dark d-flex justify-content-around"
                  >
                    Go To Song
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
