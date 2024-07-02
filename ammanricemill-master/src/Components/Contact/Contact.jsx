import React, { useState } from 'react';
import '../Contact/Contact.css';
import msg from '../../assets/msgicon.png';
import mail from '../../assets/mail.png';
import phone from '../../assets/phone.png';
import location from '../../assets/locatin.png';

const Contact = () => {
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const name = formData.get('name');
    if (!name) {
      setResult('Please enter your name');
      return;
    }

    setResult('Sending....');

    // Append access key to form data
    formData.append('access_key', 'eb26cab0-0c69-42a1-8040-197bedcf6d01');

    // Send data to external API
    try {
      const apiResponse = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const apiData = await apiResponse.json();

      if (!apiData.success) {
        throw new Error(apiData.message || 'Error submitting form to external API');
      }

      // Send data to backend server
      const serverResponse = await fetch('https://ricemillbackend.onrender.com/api/submitForm', {
        method: 'POST',
        body: formData,
      });
      const serverData = await serverResponse.text();

      if (!serverResponse.ok) {
        throw new Error(serverData || 'Error submitting form to backend');
      }

      setResult('Form Submitted Successfully');
      event.target.reset();
    } catch (error) {
      console.error('Error submitting form:', error.message);
      setResult('Error submitting form. Please try again later.');
    }
  };

  return (
    <div className='contact' id='contact'>
      <div className='contact-col'>
        <h3>
          Send us a message
          <img src={msg} alt='' />
        </h3>
        <p>
          At Sri Amman Rice Mill, we prioritize customer convenience and satisfaction, including
          bulk bookings for rice bags. Our minimum requirement for bulk orders is 50 bags of rice,
          ensuring that our customers have access to ample quantities for their needs. Whether you're
          a retailer stocking up for your store or an individual looking to purchase in bulk, we're
          here to accommodate your requirements. Simply fill out the contact form below with your
          details, including the quantity needed and any specific preferences, and our dedicated team
          will promptly assist you in completing your order. Thank you for choosing Sri Amman Rice
          Mill for all your rice needs.
        </p>
        <ul>
          <li>
            <img src={mail} alt='' />
            sriammanricemill2003@gmail.com
          </li>
          <li>
            <img src={phone} alt='' />
            +919898797534
          </li>
          <li>
            <img src={location} alt='' />
            133, Goundampalayam, Ammankovil(po), Sivagiri, Erode-638109
          </li>
        </ul>
      </div>
      <div className='contact-col'>
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input type='text' name='name' placeholder='Enter your name' required />

          <label>Phone Number</label>
          <input type='tel' name='phone' placeholder='Enter your mobile number' required />

          <label>Locality</label>
          <input type='text' name='locality' placeholder='Enter your location' required />

          <label>No of Rice Bags Required</label>
          <input type='number' name='ricebags' placeholder='Enter Valid number of rice bags' />

          <label>Write your messages here describing your need</label>
          <textarea name='message' rows='6' placeholder='Enter your message' required></textarea>

          <button type='submit' className='btn dark-btn'>
            Submit now
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
