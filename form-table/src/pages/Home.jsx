import { useEffect, useState } from "react";
import Form from "../components/Form";
import Table from "../components/Table";
import { Link } from "react-router-dom";
import Popup from "../components/Popup";

const Home = () => {
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    phoneNum: "",
    dateOfBirth: "",
    city: "",
    district: "",
    province: "",
    country: "Nepal",
  });

  const [allFormData, setAllFormData] = useState([]);
  const [selectedKey, setSelectedKey] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Initialize updatedFormData state
  const [updatedFormData, setUpdatedFormData] = useState(null);

  const handleChange = (e) => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    if (formInput.phoneNum.length < 7) {
      e.preventDefault();
      alert("Phone number must be at least 7 characters");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formInput.email)) {
      e.preventDefault();
      alert("Email must be in email format (e.g., name@example.com)");
      return;
    }

    // Add new data to localStorage
    const timeStamp = new Date().getTime();
    const key = `formInput_${timeStamp}`;
    localStorage.setItem(key, JSON.stringify(formInput));

    // Update the state to include the new data
    setAllFormData([...allFormData, { ...formInput, key }]);
    setIsPopupOpen(false);
  };

  const handleClear = () => {
    setFormInput({
      name: "",
      email: "",
      phoneNum: "",
      dateOfBirth: "",
      city: "",
      district: "",
      province: "",
      country: "Nepal",
    });
  };

  const handleEdit = (key) => {
    setSelectedKey(key);

    // Initialize updatedFormData with the existing data for the selected key
    setUpdatedFormData(allFormData.find((data) => data.key === key));

    setIsPopupOpen(true);
  };

  const handleEditChange = (e) => {
    setUpdatedFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleUpdate = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Find the index of the updated data in the array
    const indexToUpdate = allFormData.findIndex(
      (data) => data.key === selectedKey
    );

    if (indexToUpdate !== -1) {
      // Create a copy of the current state
      const updatedFormDataArray = [...allFormData];

      // Update the data at the found index with the updatedFormData
      updatedFormDataArray[indexToUpdate] = updatedFormData;

      // Update the data in localStorage
      localStorage.setItem(selectedKey, JSON.stringify(updatedFormData));

      // Update the state to reflect the changes
      setAllFormData(updatedFormDataArray);

      // Close the Popup after updating data
      setIsPopupOpen(false);
    }
  };

  const handleCancel = () => {
    setIsPopupOpen(false);
  };

  const handleDelete = (key) => {
    localStorage.removeItem(key);
    const updatedFormDataArray = allFormData.filter((data) => data.key !== key);
    setAllFormData(updatedFormDataArray);
  };

  useEffect(() => {
    const keys = Object.keys(localStorage);
    const formDataArray = keys.map((key) => {
      return { ...JSON.parse(localStorage.getItem(key)), key };
    });

    // Filter out items with undefined names before sorting
    const filteredFormDataArray = formDataArray.filter(
      (data) => data.name !== undefined
    );

    // Sort the array by name, handling undefined values
    const sortedFormDataArray = filteredFormDataArray.sort((a, b) =>
      (a.name || "").localeCompare(b.name || "")
    );

    setAllFormData(sortedFormDataArray);
  }, []);

  return (
    <>
      <div className="w-2/12 ms-auto my-6 ">
        <Link
          to="/profile"
          className=" text-lg py-2 px-4 mx-auto bg-blue-500 text-white rounded-full hover:bg-blue-700"
        >
          Profile
        </Link>
      </div>

      <Form
        form={formInput}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleClear={handleClear}
      />
      <Table
        formDataArray={allFormData.sort((a, b) => a.name.localeCompare(b.name))}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
      {/* Popup for editing */}
      {isPopupOpen && (
        <Popup
          form={updatedFormData || allFormData}
          handleEditChange={handleEditChange}
          handleCancel={handleCancel}
          handleUpdate={handleUpdate}
        />
      )}
    </>
  );
};

export default Home;
