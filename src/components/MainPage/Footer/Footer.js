import React from "react";
import "../../../scss/style.scss";
import footerImage from "../../../assets/footer-image.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="img-and-text">
        <img src={footerImage} alt="" />
        <div className="footer-info">
          <div>
            <h3>İletişim</h3>
            <p>
              Adres: Çifte Havuzlar Mah. Eski Londra Asfaltı Cad. Kuluçka
              Merkezi D2 Blok No: 151/1F İç Kapı No: 2B03 Esenler/İstanbul
            </p>
          </div>
          <h3>Email: bilgi@tesodev.com</h3>
        </div>
      </div>
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.2797470153077!2d28.888759415374686!3d41.01913527929966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb7abf29ba35%3A0xc98f44e9057adcde!2zVGVzb2RldiBZYXrEsWzEsW0gRG9uYW7EsW0gQmlsacWfaW0gQml5b21lZGlrYWwgS29uZ3JlIFR1cml6bSBFxJ9pdGltIERhbsSxxZ9tYW5sxLFrIExpbWl0ZWQgxZ5pcmtldGk!5e0!3m2!1str!2str!4v1655485364409!5m2!1str!2str"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default Footer;
