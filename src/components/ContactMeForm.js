import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { useToast } from "@chakra-ui/react";
import emailjs from "emailjs-com";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  const toast = useToast();

  // toast notification for message sent
  const notify = ({ success, errorText }) =>
    toast({
      title: success ? "Your message was sent." : "Your message was not sent.",
      description: success
        ? "I'll be sure to get back to you ASAP!"
        : `${errorText}. Please try again or send me an email directly.`,
      status: success ? "success" : "error",
      duration: 5000,
      isClosable: true,
      position: "bottom-right",
    });

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

    // TODO: moving these to .env once domain has been migrated to Vercel
    const REACT_APP_SERVICE_ID = "service_kxmk5lw";
    const REACT_APP_TEMPLATE_ID = "template_w1b9obl";
    const REACT_APP_PUBLIC_KEY = "user_asn4biZeLW7gkYQlbZLk9";

    emailjs
      .send(
        REACT_APP_SERVICE_ID,
        REACT_APP_TEMPLATE_ID,
        formData,
        REACT_APP_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          notify({ success: true });
          setFormData(initialFormData);
        },
        (error) => {
          notify({ success: false, errorText: error.text });
          setLoading(false);
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
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
                autoComplete="given-name"
                className="block w-full rounded-md border-0 bg-white/5 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-orange/90 font-medium sm:text-sm sm:leading-6"
              />
            </div>

            <div className="sm:col-span-6">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
                className="block w-full rounded-md border-0 bg-white/5 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-orange/90 font-medium sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="col-span-full">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Your message"
              className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-orange/90 font-medium sm:text-sm sm:leading-6"
              defaultValue={""}
            />
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="submit"
              className={`rounded-md px-3 py-3 text-base font-semibold shadow-sm flex items-center justify-center space-x-2 w-full mt-0.5 transition duration-200 group ${
                loading
                  ? "cursor-not-allowed bg-orange/90 hover:bg-orange/90"
                  : "hover:bg-orange/90 focus-visible:outline text-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange/90 bg-orange"
              }`}
              disabled={loading}
            >
              {loading ? (
                <FontAwesomeIcon icon={faSpinner} spin />
              ) : (
                <PaperAirplaneIcon className="text-blue w-4 h-4 group-hover:translate-x-0.5 transition origin-center duration-200" />
              )}
              <span>
                {loading ? "Sending your message..." : "Send your message"}
              </span>
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
