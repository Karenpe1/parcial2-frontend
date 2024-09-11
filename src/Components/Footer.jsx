import React from 'react'
import StyleFooter from "../Styles/footer.module.css"

const Footer = () => {
  return (
    <footer>
        <img src="/images/DH.png" alt='DH-logo' />
        <div className={StyleFooter.redes}>
          <img src="/images/ico-facebook.png" alt="icono facebook" />
          <img src="/images/ico-instagram.png" alt="icono instagram" />
          <img src="/images/ico-tiktok.png" alt="icono tiktok" />
          <img src="/images/ico-whatsapp.png" alt="instagram whatsapp" />
        </div>
    </footer>
  )
}

export default Footer
