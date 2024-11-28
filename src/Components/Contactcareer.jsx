import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import Scrolling from "./Scrolling";

const Contactcareer = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (
      selectedFile &&
      (selectedFile.type === "application/pdf" ||
        selectedFile.type === "application/msword" ||
        selectedFile.type ===
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document")
    ) {
      setFile(selectedFile);
    } else {
      alert("Please upload a valid resume file (.pdf, .doc, .docx)");
    }
  };
  const handleRadioClick = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_3jjjhpg";
    const templateId = "template_sgch3n8";
    const publicKey = "QJ3LYg2phyi7VCyJY";

    const templateParams = {
      from_firstName: firstName,
      from_lastName: lastName,
      from_email: email,
      from_phone: phone,
      message: message,
      to_name: "SystAIO Team",
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully", response);
        toast.success("Message sent successfully");
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        toast.error("Failed to send message");
      });
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 py-12 px-4">
      <form
        onSubmit={handleSubmit}
        className="emailForm w-full max-w-2xl bg-white p-10 rounded-lg shadow-lg border
         border-gray-300 mt-10   lg:mt-0"
      >
        <h2 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">
          Job Application
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div className="flex flex-col">
            <label
              className="text-gray-700 font-medium mb-2"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              type="text"
              required
              placeholder="First Name"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black  transition duration-150"
            />
          </div>

          <div className="flex flex-col">
            <label
              className="text-gray-700 font-medium mb-2"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              type="text"
              required
              placeholder="Last Name"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black  transition duration-150"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              required
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black  transition duration-150"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-2" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="number"
              required
              placeholder="Phone Number"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg focus:ring-2
               focus:ring-black transition duration-150"
            />
          </div>
        </div>

        <div className="mb-6">
          <label
            className="text-gray-700 font-medium mb-2"
            htmlFor="coverLetter"
          >
            Cover Letter
          </label>
          <textarea
            cols="30"
            rows="2"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="message-input"
            placeholder="Message"
          ></textarea>
        </div>

        <div className="max-w-lg mx-auto px-4 py- ">
          <div className="upload-container text-center">
            <h2 className="text-2xl font-semibold mb-4">Upload Your Resume</h2>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {file && (
              <div className="mt-4 text-sm">
                <p className="text-gray-600">Selected file: {file.name}</p>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center mb-6 mt-3">
          <input
            type="checkbox"
            id="consent"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-black  transition duration-150"
            required
          />
          <label htmlFor="consent" className="ml-2 text-gray-700">
            I agree to the{" "}
            <a href="/privacy-policy" className="text-black  underline">
              privacy policy
            </a>
            .
          </label>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-black  text-white px-6 py-3 rounded-lg hover:bg-black transition duration-150"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Scrolling(Contactcareer);
