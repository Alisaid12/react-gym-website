import React from 'react'
import logo from '../images/logo.png';
import '@fortawesome/fontawesome-free/css/all.min.css';


function Footer() {
  return (
    <div id='footer'>
          <div className="container">
              <img src={logo} alt="logo" />
              <p>We Are Social</p>
            <div class="social-icons">
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-twitter"></i>
                <i class="fas fa-home"></i>
                <i class="fab fa-linkedin"></i>
              </div>
            <p class="copyright">&copy; <span id="date"></span> <span>Ali Said</span> All Right Reserved</p>

        </div>
    </div>
  )
}

export default Footer
