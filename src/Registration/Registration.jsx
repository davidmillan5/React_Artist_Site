export const Registration = () => {
  return (
    <>
      <section className="container-fluid h-50 banner2">
        <div className="row" id="overlay">
          <div className="col-6 mx-auto my-auto">
            <form
              action=""
              className="bg-dark text-light d-flex flex-column rounded m-4 p-4"
            >
              <h2 className="text-center fw-bold my-4">Registration</h2>
              <hr />
              <h4 className="text-center mb-3">
                Please Fill With Your Details
              </h4>

              <div className="col py-2 px-5 d-flex flex-column">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="border-bottom bg-dark text-light my-2 rounded"
                  placeholder="Full Name"
                />
              </div>
              <div className="col py-2 px-5 d-flex flex-column">
                <input
                  type="text"
                  name="mail"
                  id="mail"
                  className="border-bottom bg-dark text-light my-2 rounded"
                  placeholder="Email"
                />
              </div>
              <div className="col py-2 px-5 d-flex flex-column">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="border-bottom bg-dark text-light my-2 rounded"
                  placeholder="Phone"
                />
              </div>
              <div className="col py-2 px-5 d-flex flex-column">
                <input
                  type="text"
                  name="age"
                  id="age"
                  className="border-bottom bg-dark text-light my-2 rounded"
                  placeholder="Age"
                />
              </div>
              <button type="button" className="btn btn-light mx-5 my-3 fw-bold">
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
