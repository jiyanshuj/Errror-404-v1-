import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './BookingPage.css';

function BookingPage({ places }) {
  const { id } = useParams();
  const place = places.find((p) => p.id === parseInt(id));

  const [billingDetails, setBillingDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    passport: '',
    address: ''
  });

  const [facilitation, setFacilitation] = useState({
    airportPickup: false,
    activity: false,
    massage: false,
    specialRequest: ''
  });

  const [agreed, setAgreed] = useState(false);

  const handleBillingChange = (e) => {
    const { name, value } = e.target;
    setBillingDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleFacilitationChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFacilitation((prevFacilitation) => ({
      ...prevFacilitation,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (agreed) {
      alert('Booking submitted successfully!');
    } else {
      alert('Please agree to the terms and conditions.');
    }
  };

  return (
    <div className="booking-page">
      <h2>Booking Now</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        <div className="billing-section">
          <h3>Billing Details</h3>
          <label>First Name</label>
          <input type="text" name="firstName" value={billingDetails.firstName} onChange={handleBillingChange} />

          <label>Last Name</label>
          <input type="text" name="lastName" value={billingDetails.lastName} onChange={handleBillingChange} />

          <label>Email Address</label>
          <input type="email" name="email" value={billingDetails.email} onChange={handleBillingChange} />

          <label>Phone Number</label>
          <input type="tel" name="phone" value={billingDetails.phone} onChange={handleBillingChange} />

          <label>Passport Number (optional)</label>
          <input type="text" name="passport" value={billingDetails.passport} onChange={handleBillingChange} />

          <label>Address</label>
          <textarea name="address" value={billingDetails.address} onChange={handleBillingChange}></textarea>
        </div>

        <div className="hotel-details-section">
          <section>
            <h3>Extra Facilitation</h3>
            <label>
              <input type="checkbox" name="airportPickup" checked={facilitation.airportPickup} onChange={handleFacilitationChange} />
              Airport Pickup: 2300.00
            </label>
            <label>
              <input type="checkbox" name="activity" checked={facilitation.activity} onChange={handleFacilitationChange} />
              Activity: 2300.00
            </label>
            <label>
              <input type="checkbox" name="massage" checked={facilitation.massage} onChange={handleFacilitationChange} />
              Massage and Spa: 2300.00
            </label>
            <label>Special Request</label>
            <input type="text" name="specialRequest" value={facilitation.specialRequest} onChange={handleFacilitationChange} />
          </section>

          <section>
            <h3>Hotel Information</h3>
            <p>Hotel Name: {place.name}</p>
            <p>Date: 14 February 2021</p>
            <p>Location: {place.location}</p>
            <p>Room Details: 1 Room, 2 Guests, 1 Night</p>
            <p>Total Price: {place.discountedPrice}/-</p>
          </section>

          <section>
            <label>
              <input type="checkbox" checked={agreed} onChange={() => setAgreed(!agreed)} />
              I agree to the rules, terms, and conditions.
            </label>
          </section>

          <button type="submit">Book Now</button>
        </div>
      </form>
    </div>
  );
}

export default BookingPage;
