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
            </div>
          </div>
        </section>
      </main>
    </>
  );
}