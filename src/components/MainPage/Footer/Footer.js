import React from 'react'
import '../../../scss/style.scss'
import footerImage from '../../../assets/footer-image.png'

const Footer = () => {
  return (
    <div className="footer">
        <img src={footerImage} alt="" />
        <div className="footer-info">
            <div>
                <h3>İletişim</h3>
                <p>Adres: Çifte Havuzlar Mah. Eski Londra Asfaltı Cad. Kuluçka Merkezi D2 Blok No: 151/1F İç Kapı No: 2B03 Esenler/İstanbul
                </p>
            </div>
             <h3>Email: bilgi@tesodev.com</h3>   
        </div>
    </div>
  )
}

export default Footer