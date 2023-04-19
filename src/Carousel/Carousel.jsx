export function Carousel() {
  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://imagenes.20minutos.es/files/image_990_v3/files/fp/uploads/imagenes/2022/09/05/rayden-en-un-concierto-en-madrid.r_d.983-1073-5156.jpeg"
              className="d-block w-100 h-75"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.ecestaticos.com/YC0xbOCp43YIRtL2uPn_ontxlJw=/0x0:2272x1515/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F6bc%2F1f7%2Fb7d%2F6bc1f7b7d412c0448e004244462432da.jpg"
              className="d-block w-100 h-75"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://image.europafm.com/clipping/cmsimages02/2022/09/16/6C8B4C2A-8001-444C-8727-76DF52A0A6D8/rayden-concierto_103.jpg?crop=4156,3117,x0,y0&width=1200&height=900&optimize=low&format=webply"
              className="d-block w-100 h-75"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://elrescatemusical.com/wp-content/uploads/2021/11/IMG_6524_1-scaled-e1636542631531.jpg"
              className="d-block w-100 h-75"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://elrescatemusical.com/wp-content/uploads/2021/11/IMG_6506-scaled.jpg"
              className="d-block w-100 h-75"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
