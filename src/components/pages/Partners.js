import React, { useState, useEffect } from 'react';
import './Partners.css'; // Assuming the CSS file is named 'styles.css'

function OurPartners() {
  const [partnerLogos, setPartnerLogos] = useState([
    { image: 'images/imbuto.jpg', alt: 'Adidas' },
    { image: 'images/youth.jpg', alt: '' },
    { image: 'images/reb.jpg', alt: '' },
    { image: 'images/minema.jpg', alt: '' },
    { image: 'images/calture.jpg', alt: '' },
    { image: 'images/health.png', alt: '' },
    { image: 'images/gender.jpg', alt: '' },
    { image: 'images/chld.png', alt: '' },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://your-api-endpoint.com/partners');
        if (!response.ok) { // Check for non-200 status codes
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPartnerLogos(data.logos); // Update state with fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle the error here (e.g., display an error message to the user)
      }
    };
    
  }, []);

  return (
    <div className="container">
      <h2 className="text-center font-weight-bold">Our Partners</h2>
      <section className="customer-logos slider">
        {partnerLogos.map((logo, index) => (
          <div className="slide" key={index}>
            <img src={logo.image} alt={logo.alt} />
          </div>
        ))}
      </section>
    </div>
  );
}

export default OurPartners;
