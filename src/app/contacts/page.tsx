"use client";

import * as React from "react";
import Navbar from "../Navbar";
import { MapPin, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

interface ContactItem {
  icon: React.ReactNode;
  label: string;
  link?: string;
  text: string;
}

export default function Contact() {
  const contactItems: ContactItem[] = [
    {
      icon: <FaWhatsapp className="w-6 h-6 text-green-500" />,
      label: "Phone",
      link: "https://wa.me/+8801865540885",
      text: "+880 1865540885",
    },
    {
      icon: <Mail className="w-6 h-6 text-purple-400" />,
      label: "Email",
      link: "mailto:mohiu5204@gmail.com",
      text: "mohiu5204@gmail.com",
    },
    {
      icon: <FaLinkedin className="w-6 h-6 text-blue-500" />,
      label: "Linkedin",
      link: "https://www.linkedin.com/in/mohammedmohiuddin/",
      text: "Connect with me on LinkedIn",
    },
    {
      icon: <FaGithub className="w-6 h-6" />,
      label: "Github",
      link: "https://github.com/MDmohiuddin-web",
      text: "Check out my GitHub",
    },
    {
      icon: <MapPin className="w-6 h-6 text-red-500" />,
      label: "Location",
      text: "Feni, Chattogram, Bangladesh",
    },
  ];

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
  formData.append("access_key", "25e65c88-7b8e-4e47-95f0-c289b90213e5");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <Navbar />
      <main className="pt-20 lg:pt-[0rem] bg-[#04081A] text-white min-h-screen">
        <section className="hero min-h-screen flex items-center relative px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Get in Touch
                  </h2>
                  <p className="text-gray-300 text-lg">
                    Have a question or want to work together? Drop us a message!
                  </p>
                </div>
                <div className="space-y-8">
                  {contactItems.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="bg-pink-500/10 p-3 rounded-lg">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold">{item.label}</h3>
                        {item.link ? (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 capitalize cursor-pointer hover:text-white duration-500"
                          >
                            {item.text}
                          </a>
                        ) : (
                          <p className="text-gray-400">{item.text}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Contact Form - right side */}
              <div className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl shadow-xl flex flex-col items-center">
                <form onSubmit={onSubmit} className="w-full max-w-md flex flex-col gap-4">
                  <input type="text" name="name" required placeholder="Your Name" className="px-4 py-2 rounded bg-white/10 text-black" />
                  <input type="email" name="email" required placeholder="Your Email" className="px-4 py-2 rounded bg-white/10 text-black" />
                  <textarea name="message" required placeholder="Your Message" className="px-4 py-2 rounded bg-white/10 text-black" />
                  <button type="submit" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-6 rounded font-semibold hover:opacity-90 transition-opacity">Submit Form</button>
                </form>
                <span className="mt-4 text-sm text-green-400">{result}</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}