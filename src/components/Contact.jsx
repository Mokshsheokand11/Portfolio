import React, { useRef } from "react";
import { Element } from "react-scroll";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // prevent page reload

    emailjs
      .sendForm(
        "service_l3tgmeo",      // ✅ your Service ID
        "template_yyq81v2",     // ✅ your Template ID
        form.current,
        "Q0AdRfhmuRkX2k2rq"     // ✅ your Public Key
      )
      .then(
        () => {
          toast.success("Message sent successfully 📩");
          form.current.reset();
        },
        (error) => {
          console.error(error);
          toast.error("Email failed 😢");
        }
      );
  };

  return (
    <Element name="contact">
      <section className="bg-white py-24">
        <div className="max-w-xl mx-auto p-8 border border-gray-200 rounded-xl shadow-lg">

          {/* Heading */}
          <h2 className="text-3xl font-semibold text-center mb-6 text-gray-900">
            Contact Me
          </h2>
          <p className="text-center text-gray-500 mb-8">
            Feel free to reach out for opportunities or collaborations
          </p>

          {/* Form */}
          <form ref={form} onSubmit={sendEmail} className="space-y-5">

            {/* Name */}
            <div>
              <label className="block mb-1 text-gray-700 font-medium">Name</label>
              <input
                type="text"
                name="user_name"
                required
                placeholder="Your Name"
                className="w-full border border-gray-300 px-4 py-2 rounded-lg bg-gray-50 focus:outline-none focus:border-gray-900 transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 text-gray-700 font-medium">Email</label>
              <input
                type="email"
                name="user_email"
                required
                placeholder="Your Email"
                className="w-full border border-gray-300 px-4 py-2 rounded-lg bg-gray-50 focus:outline-none focus:border-gray-900 transition"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block mb-1 text-gray-700 font-medium">Message</label>
              <textarea
                name="message"
                rows="5"
                required
                placeholder="Your Message"
                className="w-full border border-gray-300 px-4 py-2 rounded-lg bg-gray-50 focus:outline-none focus:border-gray-900 transition"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-black transition font-medium"
            >
              Send Message
            </button>

          </form>
        </div>
      </section>
    </Element>
  );
}

export default Contact;
