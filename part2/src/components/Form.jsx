import { useState } from "react";
import Swal from "sweetalert2";

const Form = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validate = () => {
    if (!formData.name || !formData.email) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Both Name and Email fields are required!",
      });
      return false;
    }

    if (!validateEmail(formData.email)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Email",
        text: `Please include an '@' in the email address. '${formData.email}' is missing an '@'.`,
      });
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      Swal.fire({
        icon: "success",
        title: "Form submitted successfully!",
        text: `Name: ${formData.name}, Email: ${formData.email}`,
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 bg-gray-100 rounded shadow"
    >
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
