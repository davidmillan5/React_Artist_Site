import './History.css';
export function History() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <p
            className="text-center bg-dark bg-gradient fw-bold text-light py-3 fs-2"
            id="Bio"
          >
            BIO
          </p>
        </div>

        <div className="row">
          <div className="col-12 col-md-6">
            <h2 className="text-center mt-2">Rayden</h2>
            <p className="justify-content">
              Rayden was a member of rap groups A3Bandas and Crew Cuervos. In
              2006, Rayden won the freestyle rap competition Red Bull Batalla de
              los Gallos.
            </p>
            <img
              src="https://cronicaglobal.elespanol.com/uploads/s1/17/70/83/13/el-cantante-rayden.jpeg"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col-12 col-md-3">
            <h2 className="text-center mt-2"> Background</h2>
            <p>
              He participated again in 2009, and was eliminated in the
              semi-finals. Rayden released his first solo studio album, Estaba
              escrito, in 2010. His second album, Mosaico, was published in
              2012, and the third, En alma y hueso, was released in 2014. His
              fourth studio album, Antónimo (2017) initiated a trilogy completed
              by Sinónimo (2019) and Homónimo (2021).
            </p>
            <img
              src="https://static.fnac-static.com/multimedia/Images/ES/Comete/14665/CCP_IMG_ORIGINAL/205280.jpg"
              alt=""
              className="img-fluid my-2"
            />
          </div>
          <div className="col-12 col-md-3">
            <h2 className="text-center my-2"> Even More....</h2>
            <p>
              In November 2021, Rayden headlined a concert at the WiZink Center
              in Madrid dedicated to his twentieth anniversary as an artist. In
              December 2021, he was selected to participate in the first edition
              of Benidorm Fest, the song festival organised to determine Spain's
              entry for the Eurovision Song Contest, with the song "Calle de la
              llorería". He finished in fourth place.
              <img
                src="https://i.discogs.com/_FzxZYo16aMWLR5c-MWXLcj7kTs00IcKjuqnjlT1G98/rs:fit/g:sm/q:90/h:400/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTE2Mzc5/MDUtMTQyNDIyODU1/NC0yODQ3LmpwZWc.jpeg"
                alt=""
                className="img-fluid mt-4"
              />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
