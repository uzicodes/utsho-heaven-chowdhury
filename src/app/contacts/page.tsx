"use client";

import * as React from "react";
import Navbar from "../Navbar";
import { MapPin, Mail } from "lucide-react";
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
      icon: <Mail className="w-6 h-6 text-purple-400" />,
      label: "Email",
      link: "mailto:utshozi11@gmail.com",
      text: "utshozi11@gmail.com",
    },
    {
      icon: <FaLinkedin className="w-6 h-6 text-blue-500" />,
      label: "Linkedin",
      link: "https://www.linkedin.com/in/utsho-heaven-chowdhury/",
      text: "Connect",
    },

    {
      icon: <FaGithub className="w-6 h-6" />,
      label: "Github",
      link: "https://github.com/uzicodes",
      text: "uzicodes",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-blue-600">
          <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24H12.82v-9.294H9.692V11.01h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.696h-3.12V24h6.116C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0z" />
        </svg>
      ),
      label: "Facebook",
      link: "https://www.facebook.com/utsh0z",
      text: "utsh0z",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-pink-500">
          <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
        </svg>
      ),
      label: "Instagram",
      link: "https://instagram.com/utsh0x",
      text: "utsh0x",
    },
    {
      icon: <MapPin className="w-6 h-6 text-red-500" />,
      label: "Location",
      text: "Dhaka, Bangladesh",
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
                    Questions or want to work together? Drop a message !
                  </p>
                </div>
                <div className="space-y-5">
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
                            className="text-blue-600 cursor-pointer hover:text-white duration-500"
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