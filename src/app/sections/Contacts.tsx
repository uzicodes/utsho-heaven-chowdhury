"use client";

import * as React from "react";
import dynamic from "next/dynamic";
const Form = dynamic(() => import("../components/Form"), { ssr: false });
import { MapPin } from "lucide-react";
import { m, Variants } from "framer-motion";
import Image from "next/image";

interface ContactItem {
  icon: React.ReactNode;
  label: string;
  link?: string;
  text: string;
}



const contactItems: ContactItem[] = [
  {
    icon: <Image src="https://skills.syvixor.com/api/icons?i=gmail&perline=12&radius=60" alt="Email" width={32} height={32} className="w-8 h-8" unoptimized />,
    label: "Email",
    link: "mailto:utsho8chowdhury@gmail.com",
    text: "utsho8chowdhury@gmail.com",
  },
  {
    icon: <Image src="https://skills.syvixor.com/api/icons?i=linkedin&perline=12&radius=60" alt="LinkedIn" width={32} height={32} className="w-8 h-8" unoptimized />,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/utshochowdhury/",
    text: "Connect",
  },
  {
    icon: <Image src="https://skills.syvixor.com/api/icons?i=github&perline=12&radius=60" alt="GitHub" width={32} height={32} className="w-8 h-8" unoptimized />,
    label: "GitHub",
    link: "https://github.com/uzicodes",
    text: "uzicodes",
  },
  {
    icon: <Image src="https://skills.syvixor.com/api/icons?i=facebook&perline=12&radius=60" alt="Facebook" width={32} height={32} className="w-8 h-8" unoptimized />,
    label: "Facebook",
    link: "https://www.facebook.com/utsh0chowdhury",
    text: "Add Friend",
  },
  {
    icon: <Image src="https://skills.syvixor.com/api/icons?i=instagram&perline=12&radius=60" alt="Instagram" width={32} height={32} className="w-8 h-8" unoptimized />,
    label: "Instagram",
    link: "https://instagram.com/utsh0_",
    text: "Follow Me",
  },
  {
    icon: <Image src="https://skills.syvixor.com/api/icons?i=x&perline=12&radius=60" alt="X" width={32} height={32} className="w-8 h-8" unoptimized />,
    label: "X",
    link: "https://x.com/utsh0w",
    text: "Tweet",
  },
  {
    icon: <MapPin className="w-8 h-8 text-red-500" />,
    label: "Location",
    text: "Dhaka, Bangladesh",
  },
];

const leftVariant: Variants = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const rightVariant: Variants = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

// Social Contact
export default function Contact() {


  return (
    <div className="relative bg-transparent">
      <div className="relative z-10">
        <div className="pt-20 lg:pt-[0rem] bg-transparent text-white pb-5 flex items-center overflow-x-clip">
          <section className="hero w-full flex items-center justify-center relative px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
              <div className="grid lg:grid-cols-2 gap-0 items-center">

                <m.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.1 }}
                  variants={leftVariant}
                  className="space-y-8 flex flex-col justify-center items-center h-full"
                >
                  <div className="space-y-5 lg:pr-0">
                    <h2 className="text-4xl font-bold mb-2 text-left pr-4 lg:pr-12" style={{ color: '#FB4500', marginTop: '48px', fontFamily: 'var(--font-space-grotesk), sans-serif' }}>Let's Talk Code </h2>
                    <div className="mb-7.5"></div>
                    <div className="space-y-4">
                      {contactItems.map((item) => (
                        <div key={item.label} className="flex items-center space-x-4">
                          {item.link ? (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="contact-social-icon-link"
                              style={{ display: 'inline-block' }}
                            >
                              <div className="bg-pink-500/10 p-2 rounded-lg contact-social-icon">
                                {item.icon}
                              </div>
                            </a>
                          ) : (
                            <div className="bg-pink-500/10 p-2 rounded-lg contact-social-icon">
                              {item.icon}
                            </div>
                          )}
                          <div>
                            {item.link ? (
                              <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cursor-pointer hover:text-white duration-500"
                                style={{ color: '#F5E7D9', fontFamily: 'var(--font-space-grotesk), sans-serif' }}
                              >
                                {item.text}
                              </a>
                            ) : (
                              <p style={{ color: '#F5E7D9', fontFamily: 'var(--font-space-grotesk), sans-serif' }}>{item.text}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </m.div>

                <m.div   // Contact Form 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.1 }}
                  variants={rightVariant}
                  className="flex justify-center items-center w-full lg:justify-center"
                >
                  <Form />
                </m.div>
              </div>
            </div>
          </section>
        </div>

      </div>
    </div>
  );
}