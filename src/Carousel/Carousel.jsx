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
              src="https://images.ecestaticos.com/YC0xbOCp43YIRtL2uPn_ontxlJw=/0x0:2272x1515/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F6bc%2F1f7%2Fb7d%2F6bc1f7b7d412c0448e004244462432da.jpg"
              className="d-block w-100 h-75 img-fluid"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://image.europafm.com/clipping/cmsimages02/2022/09/16/6C8B4C2A-8001-444C-8727-76DF52A0A6D8/rayden-concierto_103.jpg?crop=4156,3117,x0,y0&width=1200&height=900&optimize=low&format=webply"
              className="d-block w-100 h-75 img-fluid"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://image.europafm.com/clipping/cmsimages01/2023/01/29/DE7B7429-99D7-4467-A5D8-3F6B01294898/rayden-anuncia-colaboracion-sorpresa-fans-enloquecen-idea-quien-podria-ser_103.jpg?crop=1707,1280,x107,y0&width=1200&height=900&optimize=low&format=webply"
              className="d-block w-100 h-75 img-fluid"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://album.mediaset.es/eimg/2022/09/16/rayden_024f.jpg?w=1200&h=900"
              className="d-block w-100 h-75 img-fluid"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://cadenaser.com/resizer/6munpRsM68gkvoz2TfOMzHXOlq8=/1200x900/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/prisaradio/VA7C6T65JZFVVKRVHANJCPPWVU.jpg"
              className="d-block w-100 h-75 img-fluid"
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
