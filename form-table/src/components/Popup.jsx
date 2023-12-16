/* eslint-disable react/prop-types */

const Popup = ({ form, handleEditChange, handleUpdate, handleCancel }) => {
  return (
    <div className="fixed inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        {/* Modal panel */}
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
          <div className="w-full shadow-lg p-7 mt-4 rounded-xl border-2">
            <div className="popup-content">
              <h2 className="text-lg font-semibold mb-3">Edit User</h2>
              <form onSubmit={handleUpdate}>
                <div className="flex flex-col gap-2 mb-3">
                  <label htmlFor="name">Name: </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    autoComplete="name"
                    required
                    value={form.name}
                    onChange={handleEditChange}
                    className="border-2 border-black rounded-2xl p-1 w-full"
                  />
                </div>
                <div className="flex flex-col gap-2 mb-3">
                  <label htmlFor="email">Email: </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    autoComplete="email"
                    required
                    value={form.email}
                    onChange={handleEditChange}
                    className="border-2 border-black rounded-2xl p-1"
                  />
                </div>
                <div className="flex flex-col gap-2 mb-3">
                  <label htmlFor="phoneNum">Phone Number: </label>
                  <input
                    type="number"
                    id="phoneNum"
                    name="phoneNum"
                    placeholder="Enter your phone number"
                    required
                    value={form.phoneNum}
                    onChange={handleEditChange}
                    className="border-2 border-black rounded-2xl p-1"
                  />
                </div>
                <div className="flex flex-col gap-2 mb-3">
                  <label htmlFor="dateOfBirth">Date of Birth: </label>
                  <input
                    type="date"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    required
                    value={form.dateOfBirth}
                    onChange={handleEditChange}
                    className="border-2 border-black rounded-2xl p-1"
                  />
                </div>
                <div className="mb-3">
                  <span htmlFor="address">Address: </span>
                </div>
                <div className="flex justify-between gap-2 mb-3 ">
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="Enter your city"
                    required
                    value={form.city}
                    onChange={handleEditChange}
                    className="border-2 border-black rounded-2xl p-1 w-full"
                  />
                  <input
                    type="text"
                    id="district"
                    name="district"
                    placeholder="Enter your district"
                    required
                    value={form.district}
                    onChange={handleEditChange}
                    className="border-2 border-black rounded-2xl p-1  w-full"
                  />
                </div>
                <div className="flex justify-between gap-2 mb-3">
                  <select
                    name="province"
                    id="province"
                    required
                    value={form.province}
                    onChange={handleEditChange}
                    className="border-2 border-black rounded-2xl p-1 w-full"
                  >
                    <option> Your Province </option>
                    <option value="province 1">1</option>
                    <option value="province 2">2</option>
                    <option value="province 3">3</option>
                    <option value="province 4">4</option>
                    <option value="province 5">5</option>
                    <option value="province 6">6</option>
                    <option value="province 7">7</option>
                  </select>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value="Nepal"
                    autoComplete="country"
                    readOnly
                    className="border-2 border-black rounded-2xl p-1 w-full"
                    onChange={handleEditChange}
                  />
                </div>
                <div className="flex justify-between gap-7 ">
                  <button
                    type="submit"
                    className="bg-blue-600 w-full rounded-lg p-2 text-white hover:text-black hover:bg-blue-800"
                  >
                    Update
                  </button>
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="bg-red-600 w-full rounded-lg p-2 text-white hover:text-black hover:bg-red-800"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
