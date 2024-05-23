import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import emailjs from "emailjs-com";
import { useState } from "react";
import ContactLinks from "./ContactLinks";

export default function ContactMeForm() {
  const initialFormData = {
    name: "",
    email: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (response) => {
          setFormData(initialFormData);
        },
        (error) => {
          console.log({ error });
        }
      );
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 space-x-0 sm:space-x-4 justify-center pt-6">
        {/* contact form  */}
        <div className="w-full sm:w-1/2 space-y-3">
          <div className="grid grid-cols-1 gap-x-3 gap-y-3 sm:grid-cols-12">
            <div className="sm:col-span-6">
              <input
                type="text"
                name="name"
                id="name"
                onChange={handleChange}
                placeholder="Name"
                required
                autoComplete="given-name"
                className="block w-full rounded-md border-0 bg-white/5 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-orange/90 font-bold sm:text-sm sm:leading-6"
              />
            </div>

            <div className="sm:col-span-6">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                onChange={handleChange}
                required
                autoComplete="email"
                className="block w-full rounded-md border-0 bg-white/5 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-orange/90 font-bold sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="col-span-full">
            <textarea
              id="message"
              name="message"
              onChange={handleChange}
              required
              rows={5}
              placeholder="Your message"
              className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-orange/90 font-bold sm:text-sm sm:leading-6"
              defaultValue={""}
            />
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="submit"
              className="rounded-md bg-orange px-3 py-3 text-base font-semibold shadow-sm hover:bg-orange/90 focus-visible:outline text-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange/90 flex items-center justify-center space-x-2 w-full mt-0.5"
            >
              <PaperAirplaneIcon className="text-blue w-4 h-4" />
              <span>Send your message</span>
            </button>
          </div>
        </div>

        {/* contact links  */}
        <div className="flex flex-col items-start justify-around text-white w-full sm:w-64">
          <ContactLinks isInFooter={true} />
        </div>
      </div>
    </form>
  );
}
