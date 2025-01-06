import React from "react";
import { FaEnvelope, FaInstagram, FaMapPin, FaPhone } from "react-icons/fa";

function page() {
  return (
    <section
      id="contact"
      className="pt-[72px] bg-[#121212] text-white flex flex-col items-center justify-center p-6"
    >
      <h2 className="text-center font-semibold mt-12 text-4xl">Kontak</h2>
      <div className="mt-12 flex flex-col md:flex-row gap-9 p-9">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d700.8168614727613!2d108.4363613170803!3d-6.468508349558528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6eeb7d9dcd701f%3A0xb473a871e01d82c0!2sTiara%20Gipsum!5e0!3m2!1sid!2sid!4v1736159050406!5m2!1sid!2sid"
          width="450"
          height="450"
          className="rounded-lg px-9 w-full md:w-[800px]"
          loading="lazy"
        ></iframe>

        <div>
          <h3 className="text-2xl font-semibold">Kirim Pesan</h3>
          <div className="space-y-5 pt-5">
            <div className="flex items items-center gap-4">
              <FaMapPin />
              <p>
                Gg. Kesubuh, Kec. Karangampel, Kabupaten Indramayu,Jawa Barat
              </p>
            </div>
            <div className="flex items items-center gap-4">
              <FaEnvelope />
              <p>yoerdanatan@gmail.com</p>
            </div>
            <div className="flex items items-center gap-4">
              <FaPhone />
              <p>+62 838-3733-1647</p>
            </div>
            <div className="flex items items-center gap-4">
              <FaInstagram />
              <p>@alfariziiprasetyo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
