import { useEffect, useState } from "react";
import Form from "../components/Form";
import Table from "../components/Table";
import { Link } from "react-router-dom";
import Popup from "../components/Popup";
import toast from "react-hot-toast";

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

  const [updatedFormData, setUpdatedFormData] = useState(null);

  const handleChange = (e) => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formInput.phoneNum.length < 7) {
      e.preventDefault();
      toast.error("Phone number must be at least 7 characters");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formInput.email)) {
      e.preventDefault();
      toast.error("Email must be in email format (e.g., name@example.com)");
      return;
    }

    // Add new data to localStorage
    const timeStamp = new Date().getTime();
    const key = `formInput_${timeStamp}`;
    localStorage.setItem(key, JSON.stringify(formInput));
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
    toast.success("User added successfully");
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

    setUpdatedFormData(allFormData.find((data) => data.key === key));

    setIsPopupOpen(true);
  };

  const handleEditChange = (e) => {
    setUpdatedFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleUpdate = (e) => {
    e.preventDefault();

    const indexToUpdate = allFormData.findIndex(
      (data) => data.key === selectedKey
    );

    if (indexToUpdate !== -1) {
      const updatedFormDataArray = [...allFormData];
      updatedFormDataArray[indexToUpdate] = updatedFormData;
      localStorage.setItem(selectedKey, JSON.stringify(updatedFormData));
      setAllFormData(updatedFormDataArray);
      setIsPopupOpen(false);
      toast.success("User Updated Successfully");
    }
  };

  const handleCancel = () => {
    setIsPopupOpen(false);
  };

  const handleDelete = (key) => {
    localStorage.removeItem(key);
    const updatedFormDataArray = allFormData.filter((data) => data.key !== key);
    setAllFormData(updatedFormDataArray);
    toast.success("User Deleted Successfully");
  };

  useEffect(() => {
    const keys = Object.keys(localStorage);
    const formDataArray = keys.map((key) => {
      return { ...JSON.parse(localStorage.getItem(key)), key };
    });

    const filteredFormDataArray = formDataArray.filter(
      (data) => data.name !== undefined
    );

    const sortedFormDataArray = filteredFormDataArray.sort((a, b) =>
      (a.name || "").localeCompare(b.name || "")
    );

    setAllFormData(sortedFormDataArray);
  }, []);

  return (
    <>
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

      {isPopupOpen && (
        <Popup
          form={updatedFormData || allFormData}
          handleEditChange={handleEditChange}
          handleCancel={handleCancel}
          handleUpdate={handleUpdate}
        />
      )}

      <div className="w-2/12 ms-auto my-6 ">
        <Link
          to="/profile"
          className=" text-lg py-2 px-4 mx-auto bg-blue-500 text-white rounded-full hover:bg-blue-700"
        >
          Profile
        </Link>
      </div>
    </>
  );
};

export default Home;
