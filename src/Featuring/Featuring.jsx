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
      song: 'Hoy Que Somos Locos (Versión Acustica) ',
      collaborator: 'Sofia Ellar',
      duration: '3:25',
      cover:
        'https://sofiaellar.com/wp-content/uploads/2021/01/Portada-Sesiones-de-Aperitivo-v3.jpg',
      link: 'https://open.spotify.com/track/5T6VqMZQsGyrKcLbXhafnc?si=d46e5272fbd14d1e',
    },
    {
      id: 3,
      song: 'Solo Los Amantes Sobreviven',
      collaborator: 'Fredi Leis',
      duration: '3:04',
      cover:
        'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/4d/99/0e/4d990ebf-76b6-6d1d-2092-e0b8d2c0a612/190295056728.jpg/1200x1200bf-60.jpg',
      link: 'https://open.spotify.com/track/0GbWUuGnNmFBja5akbxI9m?si=1d493a9d391a452e',
    },
    {
      id: 4,
      song: 'Mujeryego',
      collaborator: 'Nanpa Basico',
      duration: '3:38',
      cover:
        'https://lastfm.freetls.fastly.net/i/u/500x500/ff099dfb4ee18447f7b2a1364324a575.jpg',
      link: 'https://open.spotify.com/album/1B1BNhwGIim7UoMMQyZqjl?si=SX8MrPyoQ2edlKeLZ-Iyfw',
    },
    {
      id: 5,
      song: 'Malditas Ganas',
      collaborator: 'Bely Besarte',
      duration: '3:55',
      cover:
        'https://www.lahiguera.net/musicalia/artistas/bely_basarte/disco/8958/bely_basarte_desde_mi_otro_cuarto-portada.jpg',
      link: 'https://open.spotify.com/track/6HsKPPw1WQQJseQtAoAiRo?si=0dc95c0251134dbe',
    },
    {
      id: 6,
      song: 'Cosquilleo',
      collaborator: 'Diego Ojeda',
      duration: '3:37',
      cover:
        'https://scontent.feoh3-1.fna.fbcdn.net/v/t31.18172-8/23154975_1488526791224353_2191253459993933756_o.jpg?_nc_cat=102&ccb=1-7&_nc_sid=9267fe&_nc_ohc=G_DpAAfUEFYAX8ymNqC&_nc_ht=scontent.feoh3-1.fna&oh=00_AfAkPlrWHJ3NGk3HyGh6gSEN1sS_9_3dxJn19xSgOOuOOg&oe=6470B361',
      link: 'https://open.spotify.com/track/1leUVxXJmkljVzaYJPH9Zp?si=8ea91cee3f1f4673',
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
                  className="card-img-top img-fluid rounded mx-auto my-2 d-block"
                  alt="..."
                />
                <div className="card-body">
                  <h3 className="card-title text-center">{feature.song}</h3>
                  <h5 className="card-title text-center">
                    Feature: {feature.collaborator}
                  </h5>
                  <p className="card-text text-center">
                    Duration: {feature.duration} min
                  </p>
                  <a
                    href={feature.link}
                    className="btn btn-dark d-flex justify-content-around"
                    target="_blank"
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
