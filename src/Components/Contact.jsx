import React, { useState } from 'react';
import './Contact.css'
export default function () {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        Message: '',

      });
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted with data:', formData);
        // You can add your logic to handle form submission here
      };
  return (
    <div className='contain' >
      <h1 className='editcontact'>Contact Me </h1>
         <div class="about-section">
        <div class="line"></div>
        <div class="star"></div>
        <div class="line"></div>
    </div>
      
      <form onSubmit={handleSubmit}>
        <div className="form-container">

        <div>
          <label htmlFor="name"></label>
        
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            placeholder="Name"
            className="form-control"
          />
        </div>
        <div>
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            placeholder="Enter your email"
            className="form-control"
          />
        </div>
        <div>
          <label htmlFor="phoneNumber"></label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
            placeholder="phone Number"
            className="form-control"
          />
        </div>
        <div>
          <label htmlFor="Message"></label>
          <input
            type="text"
            id="Message"
            name="Message"
            value={formData.Message}
            onChange={handleInputChange}
            required
            placeholder="Message "
            className="form-control"
          />
        </div>
    </div>

        <button type="submit"  className="btn-submit form-container" >Submit</button>
      </form>
    </div>
  )
}
