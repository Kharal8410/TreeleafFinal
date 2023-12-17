/* eslint-disable react/prop-types */
const Form = ({ form, handleChange, handleSubmit, handleClear }) => {
  return (
    <div className="w-2/6 m-auto">
      <form
        className="w-full  shadow-2xl shadow-slate-400 p-7 mt-4 rounded-xl border border-t-4 border-b-4 border-black bg-slate-200 "
        onSubmit={handleSubmit}
      >
        <h2 className="text-center font-bold text-3xl my-2">Users Form</h2>
        <hr className="border-t-4 border-slate-400  w-1/12 m-auto my-4 rounded-full" />

        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="name" className=" font-medium">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            autoComplete="name"
            required
            value={form.name}
            onChange={handleChange}
            className="border-2 border-black rounded-2xl p-1 w-full"
          />
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="email" className=" font-medium">
            Email:
          </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter your email"
            autoComplete="email"
            required
            value={form.email}
            onChange={handleChange}
            className="border-2 border-black rounded-2xl p-1"
          />
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="phoneNum" className=" font-medium">
            Phone Number:
          </label>
          <input
            type="number"
            id="phoneNum"
            name="phoneNum"
            placeholder="Enter your phone number"
            required
            value={form.phoneNum}
            onChange={handleChange}
            className="border-2 border-black rounded-2xl p-1"
          />
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="dateOfBirth" className=" font-medium">
            Date of Birth:
          </label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            required
            value={form.dateOfBirth}
            onChange={handleChange}
            className="border-2 border-black rounded-2xl p-1"
          />
        </div>
        <div className="mb-3">
          <span htmlFor="address" className=" font-medium">
            Address:
          </span>
        </div>
        <div className="flex justify-between gap-2 mb-6">
          {/* <label htmlFor="city">City: </label> */}
          <input
            type="text"
            id="city"
            name="city"
            placeholder="Enter your city"
            required
            value={form.city}
            onChange={handleChange}
            className="border-2 border-black rounded-2xl p-1 w-full"
          />

          {/* <label htmlFor="district">District: </label> */}
          <input
            type="text"
            id="district"
            name="district"
            placeholder="Enter your district"
            required
            value={form.district}
            onChange={handleChange}
            className="border-2 border-black rounded-2xl p-1  w-full"
          />
        </div>

        <div className="flex justify-between gap-2 mb-6">
          {/* <label htmlFor="province">Province: </label> */}
          <select
            name="province"
            id="province"
            required
            value={form.province}
            onChange={handleChange}
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

          {/* <label htmlFor="country">Country: </label> */}
          <input
            type="text"
            id="country"
            name="country"
            value="Nepal"
            autoComplete="country"
            readOnly
            className="border-2 border-black rounded-2xl p-1 w-full"
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-between gap-7 ">
          <button
            type="submit"
            className="bg-blue-600  w-full rounded-lg p-2 text-white hover:text-black hover:bg-blue-800"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="bg-red-600   w-full rounded-lg p-2 text-white hover:text-black hover:bg-red-800"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
