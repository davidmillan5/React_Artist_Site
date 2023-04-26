import { Carousel } from '../Carousel/Carousel';

export function Concerts() {
  return (
    <>
      <Carousel />
      <div className="container-fluid  fs-3 text-center">
        <div className="row">
          <p
            className="text-center bg-dark bg-gradient fw-bold text-light py-3"
            id="Concerts"
          >
            CONCERTS
          </p>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-4">
            <p className="text-center py-3">
              {' '}
              <span className="text-center"> 21 </span>
              <span className="text-center"> APR 2023 </span> | RAYDEN EN HUESCA
            </p>
          </div>
          <div className="col-3">
            <p className="text-center">HUESCA</p>
          </div>
          <div className="col-2 text-center">
            <a
              href="https://www.seetickets.com/es/event/rayden-en-leon-la-victoria-imposible/espacio-vias/2553280"
              target="_blank"
            >
              {' '}
              <span class="badge rounded-pill bg-light text-dark text-center p-2">
                <i class="bi bi-ticket-perforated"></i> Tickets
              </span>
            </a>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-4">
            <p className="text-center py-3">
              {' '}
              <span className="text-center"> 28 </span>
              <span className="text-center"> APR 2023 </span> | RAYDEN EN TOLEDO
            </p>
          </div>
          <div className="col-3">
            <p className="text-center">TOLEDO</p>
          </div>
          <div className="col-2 text-center">
            <a
              href="https://www.seetickets.com/es/event/rayden-en-cordoba-la-victoria-imposible/sala-m100/2553281"
              target="_blank"
            >
              <span class="badge rounded-pill bg-light text-dark text-center p-2">
                <i class="bi bi-ticket-perforated"></i> Tickets
              </span>
            </a>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-4">
            <p className="text-center py-3">
              {' '}
              <span className="text-center"> 29 </span>
              <span className="text-center"> APR 2023 </span> | RAYDEN EN LEÓN
            </p>
          </div>
          <div className="col-3">
            <p className="text-center">LEÓN</p>
          </div>
          <div className="col-2 text-center">
            <a
              href="https://www.seetickets.com/es/event/rayden-en-sevilla-la-victoria-imposible/sala-custom/2553282"
              target="_blank"
            >
              <span class="badge rounded-pill bg-light text-dark text-center p-2">
                <i class="bi bi-ticket-perforated"></i> Tickets
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
