import React from "react";
import Link from "next/link";

const ContactUs = () => {
  return (
    <section>
      <div className="relative mx-auto bg-white bg-center bg-cover containers bg-opacity-20">
        <div className="absolute w-full h-full bg-center bg-no-repeat bg-cover rounded-lg bg-contact-bg " />
        <div className="rounded-lg text-primary Sdesktop:w-1/2">
          <div className="bg-[#BAE5FE] bg-opacity-95 p-5 opacity-90 backdrop-blur-lg rounded-lg Sdesktop:p-12 ">
            <p className="mb-4 title">Hubungi Kami</p>
            <h2 className="subtitle">
              Jika ada pertanyaan atau konsultasi seputar property
            </h2>
            <Link
              href="/contact"
              className="inline-block px-10 py-3 my-3 font-semibold text-white border rounded-lg bg-accent hover:bg-accent/50"
            >
              Kontak kami
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
