/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const Table = ({ formDataArray, handleEdit, handleDelete, handleSort }) => {
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    const sortedArray = [...formDataArray].sort((a, b) => {
      const nameA = (a.name || "").toUpperCase();
      const nameB = (b.name || "").toUpperCase();
      return sortOrder === "asc"
        ? nameA.localeCompare(nameB)
        : nameB.localeCompare(nameA);
    });

    setSortedData(sortedArray);
  }, [formDataArray, sortOrder]);

  const toggleSortOrder = () => {
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  };
  const getSortIcon = () => {
    return sortOrder === "asc" ? "▲" : "▼";
  };

  return (
    <div className="w-10/12 m-auto my-4">
      <h1 className="text-center font-bold text-3xl my-2">Users Data</h1>
      <table className="w-full my-6 bg-slate-200">
        <thead>
          <tr className="border-b border-t border-black">
            <th
              className="border-r border-l border-black cursor-pointer"
              onClick={() => {
                toggleSortOrder();
                handleSort();
              }}
            >
              Name {getSortIcon()}
            </th>
            <th className="border-r border-black">Email</th>
            <th className="border-r border-black">Phone Number</th>
            <th className="border-r border-black">Date of Birth</th>
            <th colSpan={4} className="border-r  border-black">
              Address
            </th>
            <th className="border-r border-black">Action</th>
          </tr>
          <tr className="border-b border-t border-black">
            <th className="border-r border-l border-black"></th>
            <th className="border-r border-black"></th>
            <th className="border-r border-black"></th>
            <th className="border-r border-black"></th>
            <th className="border-r  border-black">City</th>
            <th className="border-r  border-black">District</th>
            <th className="border-r  border-black">Province</th>
            <th className="border-r  border-black">Country</th>
            <th className="border-r border-black"></th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((data, index) => (
            <tr key={index} className="border-b border-t border-black">
              <td className="border-r border-l  border-black p-1">
                {data.name}
              </td>
              <td className="border-r border-black p-1">{data.email}</td>
              <td className="border-r border-black p-1">{data.phoneNum}</td>
              <td className="border-r border-black p-1">{data.dateOfBirth}</td>
              <td className="border-r border-black p-1">{data.city}</td>
              <td className="border-r border-black p-1">{data.district}</td>
              <td className="border-r border-black p-1">{data.province}</td>
              <td className="border-r border-black p-1">{data.country}</td>

              <td className="border-r border-black">
                <div className="flex justify-evenly ">
                  <button
                    type="button"
                    onClick={() => handleEdit(data.key)}
                    className="bg-blue-600 w-2/4 rounded-lg p-1 m-1 text-white hover:text-black hover:bg-blue-800"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(data.key)}
                    className="bg-red-600  w-2/4 rounded-lg p-1 m-1 text-white hover:text-black hover:bg-red-800"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
