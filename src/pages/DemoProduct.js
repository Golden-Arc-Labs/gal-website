import React, { useState } from "react";
import { useDocTitle } from "../components/CustomHook";
import axios from "axios";
import Notiflix from "notiflix";
import SectionHeading from "../components/ui/SectionHeading";

const inputClass =
  "w-full rounded-lg border border-violet-500/30 bg-ink-900/60 px-4 py-3 text-white placeholder-violet-200/40 outline-none transition-all duration-200 focus:border-fuchsia-500/70 focus:shadow-neon-fuchsia";

const products = [
  { value: "business_management_system", label: "Business Management System" },
  { value: "school_management_portal", label: "School Management Portal" },
  { value: "payroll_management_system", label: "Payroll Management System" },
  { value: "event_management_system", label: "Event Management System" },
];

const DemoProduct = () => {
  useDocTitle("Golden Arc Labs | Demo our products");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [demoProducts, setDemoProducts] = useState([]);
  const [errors, setErrors] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    errors.products = [];
    if (checked) {
      setDemoProducts([...demoProducts, value]);
    } else {
      setDemoProducts(demoProducts.filter((e) => e !== value));
    }
  };

  const clearErrors = () => setErrors([]);

  const clearInput = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  function sendEmail(e) {
    e.preventDefault();
    document.getElementById("submitBtn").disabled = true;
    document.getElementById("submitBtn").innerHTML = "Loading...";
    let fData = new FormData();
    fData.append("first_name", firstName);
    fData.append("last_name", lastName);
    fData.append("email", email);
    fData.append("phone_number", phone);
    fData.append("message", message);
    fData.append("products", demoProducts);

    axios({
      method: "post",
      url: process.env.REACT_APP_DEMO_REQUEST_API,
      data: fData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        document.getElementById("submitBtn").disabled = false;
        document.getElementById("submitBtn").innerHTML = "Request Demo";
        clearInput();
        Notiflix.Report.success("Success", response.data.message, "Okay");
      })
      .catch(function (error) {
        document.getElementById("submitBtn").disabled = false;
        document.getElementById("submitBtn").innerHTML = "Request Demo";
        const { response } = error;
        if (response.status === 500) {
          Notiflix.Report.failure("An error occurred", response.data.message, "Okay");
        }
        if (response.data.errors !== null) {
          setErrors(response.data.errors);
        }
      });
  }

  return (
    <div id="demo" className="flex min-h-screen w-full items-center justify-center px-4 py-24">
      <div className="grid w-full max-w-6xl gap-8 lg:grid-cols-3" data-aos="zoom-in">
        {/* Form */}
        <form onSubmit={sendEmail} id="demoProductForm" className="lg:col-span-2">
          <div className="hud-card p-8 md:p-12">
            <SectionHeading
              align="left"
              kicker="Try Before You Buy"
              title={
                <>
                  DEMO OUR <span className="neon-grad">PRODUCTS</span>
                </>
              }
              subtitle="Pick the power-ups you want to test drive."
            />

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {products.map((p) => (
                <label
                  key={p.value}
                  className="flex cursor-pointer items-center gap-3 rounded-lg border border-violet-500/25 bg-ink-900/40 px-4 py-3 transition-colors hover:border-fuchsia-500/50"
                >
                  <input
                    type="checkbox"
                    className="h-4 w-4 accent-fuchsia-500"
                    value={p.value}
                    onChange={handleChange}
                  />
                  <span className="font-medium text-violet-100">{p.label}</span>
                </label>
              ))}
            </div>
            {errors && <p className="mt-2 text-sm text-red-400">{errors.products}</p>}

            <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <input
                  name="first_name"
                  className={inputClass}
                  type="text"
                  placeholder="First Name*"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  onKeyUp={clearErrors}
                />
                {errors && <p className="text-sm text-red-400">{errors.first_name}</p>}
              </div>
              <div>
                <input
                  name="last_name"
                  className={inputClass}
                  type="text"
                  placeholder="Last Name*"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  onKeyUp={clearErrors}
                />
                {errors && <p className="text-sm text-red-400">{errors.last_name}</p>}
              </div>
              <div>
                <input
                  name="email"
                  className={inputClass}
                  type="email"
                  placeholder="Email*"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyUp={clearErrors}
                />
                {errors && <p className="text-sm text-red-400">{errors.email}</p>}
              </div>
              <div>
                <input
                  name="phone_number"
                  className={inputClass}
                  type="number"
                  placeholder="Phone*"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  onKeyUp={clearErrors}
                />
                {errors && <p className="text-sm text-red-400">{errors.phone_number}</p>}
              </div>
            </div>
            <div className="my-5">
              <textarea
                name="message"
                placeholder="Message*"
                className={`${inputClass} h-32 resize-none`}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyUp={clearErrors}
              ></textarea>
              {errors && <p className="text-sm text-red-400">{errors.message}</p>}
            </div>
            <button type="submit" id="submitBtn" className="btn-neon w-full sm:w-auto">
              Request Demo
            </button>
          </div>
        </form>

        {/* Contact info card */}
        <div className="neon-frame self-start p-8">
          <h2 className="gaming-title text-xl text-white">Base Camp</h2>
          <div className="mt-6 space-y-6 text-violet-100">
            <div>
              <h3 className="kicker mb-1">Office</h3>
              <p className="text-violet-200/70">G-32, Sector 63, Noida, India</p>
            </div>
            <div>
              <h3 className="kicker mb-1">Call Us</h3>
              <p className="text-violet-200/70">+91 9654500171</p>
            </div>
            <div>
              <h3 className="kicker mb-1">Email</h3>
              <p className="text-violet-200/70">support@goldenarclabs.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoProduct;
