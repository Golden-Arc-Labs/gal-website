import Notiflix from "notiflix";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import { useDocTitle } from "../components/CustomHook";

const Contact = () => {
  useDocTitle("MLD | Molad e Konsult - Send us a message");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const messageData = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone_number: phone,
      message: `
      Name: ${firstName} ${lastName}
      Email: ${email},
      Phone: ${phone}
      Message: ${message}
      `,
    };

    // EmailJS service
    emailjs
      .send(
        // "service_izb5f2e",
        "service_3mvwt48", //service ID
        // "template_yiph3h7",
        "template_k1eddsl", //templete ID
        messageData,
        // "a_yS8_PNnnnEHohPT"
        "Stv3EmSezzeNEIvsX" //public key
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response);
          Notiflix.Notify.success("Message has been sent successfully!");
          console.log("Message Sent:", JSON.stringify(messageData, null, 2));

          setEmail("");
          setPhone("");
          setMessage("");
          setLastName("");
          setFirstName("");
        },
        (error) => {
          console.error("Error sending email:", error);
          Notiflix.Notify.failure("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <>
      <div
        id="contact"
        className="contact flex justify-center items-center w-full bg-white py-12 lg:py-24 "
      >
        <div
          className="container mx-auto my-8 px-4 lg:px-20 relative"
          data-aos="zoom-in"
        >
          <button
            onClick={handleBack}
            className="absolute top-6 right-6 lg:right-24 p-2 cursor-pointer bg-white rounded-full shadow-lg hover:shadow-xl transition duration-300 z-50 text-black font-bold text-lg w-12 h-12"
            style={{
              fontWeight: 900,
              fontSize: "20px",
              scale: 4.5,
              fontFamily: "cursive",
            }}
            type={"button"}
          >
            X
          </button>
          <form onSubmit={sendEmail}>
            <div className="w-full relative bg-[#ffffff20] p-8 my-4 md:px-12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
              <h1 className="font-bold text-center mt-6 lg:mt-0 lg:text-left uppercase text-4xl bg-gradient-to-r from-violet-300 via-violet-400 to-violet-600 bg-clip-text text-transparent mb-4">
                We'd Love to Hear from You
              </h1>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                <input
                  name="first_name"
                  className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="First Name*"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  name="last_name"
                  className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Last Name*"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <input
                  name="email"
                  className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="email"
                  placeholder="Email*"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  name="phone_number"
                  className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="number"
                  placeholder="Phone*"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="my-4">
                <textarea
                  name="message"
                  placeholder="Message*"
                  className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <div className="my-2 w-1/2 lg:w-2/4">
                <button
                  type="submit"
                  className="uppercase text-white font-mono bg-white inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group border border-violet-600 transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-violet-200 hover:via-violet-300 hover:to-violet-400 bg-clip-text hover:text-transparent hover:shadow-lg hover:shadow-violet-500/50"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
