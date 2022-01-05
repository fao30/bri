export default function Template() {
  return (
    <>
      {/* INPUT SEARCH */}
      <form onSubmit={onSubmit}>
        <div className="row">
          <h5>Search</h5>
        </div>
        <div className="row">
          <div className="col-2">
            <input
              type="text"
              className="form-control"
              placeholder="By Name"
              aria-label="By Name"
            />
          </div>
          <div className="col-2">
            <input
              type="text"
              className="form-control"
              placeholder="By Email"
              aria-label="By Email"
            />
          </div>
          <div className="col-2">
            <select
              id="department"
              name="department"
              className="form-select"
              autoComplete="department"
            >
              <option default selected disabled>
                Select Department
              </option>
              <option>IT</option>
            </select>
          </div>
          <div className="col-2">
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </div>
        </div>
      </form>

      {/* TABLE EMPLOYEE */}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Compare</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Department</th>
            <th scope="col">Asseessment</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-6 py-4 whitespace-no-wrap">Check</td>
            <td>
              <div className="flex items-center">
                <img
                  className="rounded"
                  width="50"
                  height="50"
                  src="https://via.placeholder.com/300"
                  alt=""
                />
                <div className="ml-4">
                  <p>Sasuke Uchiha</p>
                </div>
              </div>
            </td>
            <td>template@mail.com</td>
            <td>IT</td>
            <td>2</td>
            <td>Detail</td>
          </tr>
        </tbody>
      </table>

      {/* FORM EMPLOYEE */}
      <form>
        <div className="mb-3">
          <label for="fullname">Fullname</label>
          <input
            type="text"
            className="form-control"
            id="fullname"
            placeholder="Sasuke"
          />
        </div>

        <div className="mb-3">
          <label for="profilePicture">Profile Picture (Optional)</label>
          <input
            type="text"
            className="form-control"
            id="profilePicture"
            placeholder="http://"
          />
        </div>

        <div className="mb-3">
          <label for="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="sasuke@mail.com"
          />
        </div>

        <div className="mb-3">
          <label for="departement">Departement</label>
          <select className="form-control" id="departement">
            <option>IT</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  )
}
