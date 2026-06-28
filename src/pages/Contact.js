import Notiflix from "notiflix";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import { useDocTitle } from "../components/CustomHook";
import SectionHeading from "../components/ui/SectionHeading";

const inputClass =
  "w-full rounded-lg border border-violet-500/30 bg-ink-900/60 px-4 py-3 text-white placeholder-violet-200/40 outline-none transition-all duration-200 focus:border-fuchsia-500/70 focus:shadow-neon-fuchsia";

const Contact = () => {
  useDocTitle("Golden Arc Labs | Contact");
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

    emailjs
      .send("service_3mvwt48", "template_k1eddsl", messageData, "Stv3EmSezzeNEIvsX")
      .then(
        (response) => {
          console.log("Email sent successfully!", response);
          Notiflix.Notify.success("Message has been sent successfully!");
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
    <div
      id="contact"
      className="contact flex min-h-screen w-full items-center justify-center px-4 py-24"
    >
      <div className="relative w-full max-w-3xl" data-aos="zoom-in">
        <button
          onClick={handleBack}
          className="absolute -top-4 right-0 z-50 flex h-11 w-11 items-center justify-center rounded-lg border border-violet-500/40 text-xl font-bold text-violet-200 transition-all hover:border-fuchsia-500/70 hover:text-white hover:shadow-neon-fuchsia"
          type="button"
          aria-label="Back to home"
        >
          ✕
        </button>

        <form onSubmit={sendEmail}>
          <div className="hud-card p-8 md:p-12">
            <SectionHeading
              align="left"
              kicker="New Message"
              title={
                <>
                  ENTER THE <span className="neon-grad">COMMS</span>
                </>
              }
              subtitle="Drop us a line and our squad will respond within one business day."
            />

            <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
              <input
                name="first_name"
                className={inputClass}
                type="text"
                placeholder="First Name*"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                name="last_name"
                className={inputClass}
                type="text"
                placeholder="Last Name*"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <input
                name="email"
                className={inputClass}
                type="email"
                placeholder="Email*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                name="phone_number"
                className={inputClass}
                type="number"
                placeholder="Phone*"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="my-5">
              <textarea
                name="message"
                placeholder="Message*"
                className={`${inputClass} h-36 resize-none`}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button type="submit" className="btn-neon group w-full sm:w-auto">
              Transmit Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
