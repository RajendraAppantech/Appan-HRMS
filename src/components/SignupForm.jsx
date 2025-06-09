import { useState } from "react";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    companyName: "",
    phoneNumber: "",
    employeeCount: "",
    agreeTerms: false,
  });

  const [errors, setErrors] = useState({
    fullName: "",
    workEmail: "",
    companyName: "",
    phoneNumber: "",
  });

  const validateFullName = (name) => {
    const nameRegex = /^[a-zA-Z\s-]{2,}$/;
    const hasMultipleWords = name.trim().split(/\s+/).length >= 2;
    if (!name) return "Full Name is required";
    if (!nameRegex.test(name)) return "Full Name can only contain letters, spaces, or hyphens";
    if (!hasMultipleWords) return "Please enter both first and last name";
    return "";
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return "Work Email is required";
    if (!emailRegex.test(email)) return "Please enter a valid email address";
    return "";
  };

  const validateCompanyName = (company) => {
    const companyRegex = /^[a-zA-Z0-9\s&.,'-]{2,}$/;
    if (!company) return "Company Name is required";
    if (!companyRegex.test(company)) return "Company Name must be at least 2 characters and can only contain letters, numbers, spaces, and common symbols";
    return "";
  };

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^\d{10}$/;
    if (!phone) return "Phone Number is required";
    if (!phoneRegex.test(phone)) return "Please enter a valid 10-digit phone number";
    return "";
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    let error = "";
    if (name === "fullName") error = validateFullName(value);
    if (name === "workEmail") error = validateEmail(value);
    if (name === "companyName") error = validateCompanyName(value);
    if (name === "phoneNumber") error = validatePhoneNumber(value);

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const fullNameError = validateFullName(formData.fullName);
    const emailError = validateEmail(formData.workEmail);
    const companyError = validateCompanyName(formData.companyName);
    const phoneError = validatePhoneNumber(formData.phoneNumber);

    setErrors({
      fullName: fullNameError,
      workEmail: emailError,
      companyName: companyError,
      phoneNumber: phoneError,
    });

    if (fullNameError || emailError || companyError || phoneError) {
      return;
    }

    console.log("Form submitted:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[451.19px] h-auto sm:h-[500px] lg:h-[556.09px] gap-4 sm:gap-5 lg:gap-[26px] rounded-[20px] px-4 sm:px-6 lg:px-[40px] py-4 sm:py-5 lg:pt-[24px] lg:pb-[24px] bg-white shadow-md mx-auto"
    >
      <h3 className="text-lg sm:text-xl lg:text-xl font-bold text-[#0D1A26] text-center">
        Get a Free Trial Today!
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name*"
            className={`w-full p-3 border ${
              errors.fullName ? "border-red-500" : "border-gray-300"
            } rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500`}
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          {errors.fullName && (
            <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
          )}
        </div>
        <div>
          <input
            type="email"
            name="workEmail"
            placeholder="Work Email*"
            className={`w-full p-3 border ${
              errors.workEmail ? "border-red-500" : "border-gray-300"
            } rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500`}
            value={formData.workEmail}
            onChange={handleChange}
            required
          />
          {errors.workEmail && (
            <p className="text-red-500 text-xs mt-1">{errors.workEmail}</p>
          )}
        </div>
      </div>

      <div>
        <input
          type="text"
          name="companyName"
          placeholder="Company Name*"
          className={`w-full p-3 border ${
            errors.companyName ? "border-red-500" : "border-gray-300"
          } rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500`}
          value={formData.companyName}
          onChange={handleChange}
          required
        />
        {errors.companyName && (
          <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>
        )}
      </div>

      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
        <div className="flex items-center border border-gray-300 rounded-lg px-3 w-full sm:w-auto">
          <img
            src="https://flagcdn.com/w40/in.png"
            alt="IN Flag"
            className="w-5 h-auto"
          />
          <span className="ml-2 text-sm text-gray-500">+91</span>
        </div>
        <div className="w-full">
          <input
            type="tel"
            name="phoneNumber"
            placeholder="00000 00000"
            className={`w-full p-3 border ${
              errors.phoneNumber ? "border-red-500" : "border-gray-300"
            } rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500`}
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>
          )}
        </div>
      </div>

      <select
        name="employeeCount"
        className="w-full p-3 border border-gray-300 rounded-lg text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        value={formData.employeeCount}
        onChange={handleChange}
        required
      >
        <option value="">Employee Count Range*</option>
        <option value="1-10">1–10</option>
        <option value="11-50">11–50</option>
        <option value="51-100">51–100</option>
        <option value="101-500">101–500</option>
        <option value="500+">500+</option>
      </select>

      <div className="flex items-start space-x-2 text-xs text-gray-500 leading-tight">
        <input
          type="checkbox"
          name="agreeTerms"
          className="mt-1 h-4 w-4 text-cyan-500 focus:ring-cyan-500 border-gray-300 rounded"
          checked={formData.agreeTerms}
          onChange={handleChange}
          required
        />
        <p>
          We respect your data. By submitting this form, you agree that we will contact you in relation to our products and services, in accordance with our{" "}
          <a href="#" className="underline font-medium">Privacy Policy</a> and{" "}
          <a href="#" className="underline font-medium">APPAN HR Terms of Service</a>.
        </p>
      </div>

      <button
        type="submit"
        className="w-full bg-[#003F3F] text-white p-3 rounded-lg font-semibold text-sm uppercase hover:bg-[#002f2f] transition-colors"
      >
        Join Today
      </button>
    </form>
  );
};

export default SignupForm;