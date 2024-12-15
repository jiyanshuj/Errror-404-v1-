import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function HotelListings({ places }) {
  const [starRating, setStarRating] = useState('');

  const handleStarRatingChange = (event) => {
    setStarRating(event.target.value);
  };

  return (
    <div className="main-content">
      <div className="filters">
        <div className="budget-filter">
          <label>Your budget (per night)</label>
          <input type="range" min="0" max="137860" />
          <div className="price-range">
            <span>Rs. 0</span>
            <span>Rs. 1,37,860</span>
          </div>
        </div>
        <label>Popular filters for Mumbai</label>
        <ul>
          <li><input type="checkbox" /> Andheri East</li>
          <li><input type="checkbox" /> Vile Parle</li>
          <li><input type="checkbox" /> Kurla</li>
          <li><input type="checkbox" /> South Mumbai</li>
          <li><input type="checkbox" /> Andheri West</li>
          <li><input type="checkbox" /> Goregaon</li>
          <li><input type="checkbox" /> Mumbai Central</li>
        </ul>
        <label>Property type</label>
        <ul>
          <li><input type="checkbox" /> Hotel</li>
          <li><input type="checkbox" /> Apartment</li>
          <li><input type="checkbox" /> Hostel</li>
          <li><input type="checkbox" /> Resort</li>
          <li><input type="checkbox" /> Villa</li>
        </ul>
        <label>Star rating</label>
        <ul>
          <li><input type="radio" name="star-rating" value="5" checked={starRating === '5'} onChange={handleStarRatingChange} /> 5 stars</li>
          <li><input type="radio" name="star-rating" value="4" checked={starRating === '4'} onChange={handleStarRatingChange} /> 4 stars</li>
          <li><input type="radio" name="star-rating" value="3" checked={starRating === '3'} onChange={handleStarRatingChange} /> 3 stars</li>
          <li><input type="radio" name="star-rating" value="2" checked={starRating === '2'} onChange={handleStarRatingChange} /> 2 stars</li>
          <li><input type="radio" name="star-rating" value="1" checked={starRating === '1'} onChange={handleStarRatingChange} /> 1 star</li>
        </ul>
        <label>Neighborhood</label>
        <ul>
          <li><input type="checkbox" /> Andheri</li>
          <li><input type="checkbox" /> Bandra</li>
          <li><input type="checkbox" /> Juhu</li>
          <li><input type="checkbox" /> Colaba</li>
          <li><input type="checkbox" /> Powai</li>
        </ul>
      </div>
      <div className="hotel-listings">
        {places.map((place) => (
          <div className="hotel" key={place.id}>
            <img src={place.image} alt={place.name} />
            <div className="hotel-info">
              <h2>{place.name}</h2>
              <p>{place.location}</p>
              <div className="amenities">
                {place.amenities.map((amenity, index) => (
                  <span key={index}>{amenity}</span>
                ))}
              </div>
              <div className="price">
                <span className="original-price">Rs. {place.originalPrice}</span>
                <span className="discounted-price">Rs. {place.discountedPrice}</span>
                <span className="free-cancellation">+ FREE CANCELLATION</span>
              </div>
              <div className="reviews">
                <span>{place.rating}</span>
                <span>{place.reviews} reviews</span>
              </div>
              <Link to={`/booking/${place.id}`}>
                <button>Book Now</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HotelListings;
