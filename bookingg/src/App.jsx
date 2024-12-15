import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import BookingPage from './components/BookingPage';
import HotelListings from './components/HotelListings';  // Make sure to import HotelListings

const places = [
  {
    id: 1,
    name: 'FabExpress Ascot International',
    location: 'Kurla, Mumbai - City center',
    amenities: ['Breakfast', 'Parking', 'Free WiFi'],
    originalPrice: 12647,
    discountedPrice: 2888,
    rating: '6.8 Good',
    reviews: 190,
    image: 'https://pix8.agoda.net/hotelImages/39784220/-1/675376168c890a8565f232ed8bd04753.jpg?ce=0&s=600x'
  },
  {
    id: 2,
    name: 'Sahara Star Hotel',
    location: 'Vile Parle, Mumbai - 1.2 km to center',
    amenities: ['Breakfast', 'Parking', 'Free WiFi', '+2'],
    originalPrice: 27716,
    discountedPrice: 9600,
    rating: '8.1 Excellent',
    reviews: 3732,
    image: 'https://pix8.agoda.net/hotelImages/70697/0/b8d18c051d274c6e45b98e6e15deb7e0.jpg?ca=0&ce=1&s=600x'
  },
  {
    id: 3,
    name: 'HOTEL INDIE STAYS',
    location: 'Bandra Kurla Complex, Mumbai - 3.5 km to center',
    amenities: ['Breakfast', 'Free WiFi'],
    originalPrice: 9932,
    discountedPrice: 7500,
    finalPrice: 6931,
    rating: '7.8 Very good',
    reviews: 742,
    image: 'https://pix8.agoda.net/hotelImages/21936252/-1/292dfb3d6452c9d2b85910a00463c8e9.jpg?ca=17&ce=1&s=1024x'
  },
  {
    id: 4,
    name: 'Sai Palace Grand Malad',
    location: 'Malad, Mumbai - 7.9 km to center',
    amenities: ['Breakfast'],
    originalPrice: 4769,
    discountedPrice: 4769,
    rating: '8.0 Excellent',
    reviews: 1075,
    image: 'https://pix8.agoda.net/hotelImages/119/1194249/1194249_16053113530042932718.jpg?ca=6&ce=1&s=600x'
  }
];

function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <div className="search-bar">
            <input type="text" placeholder="Mumbai" />
            <input type="date" />
            <input type="date" />
            <input type="number" placeholder="2 adults" />
            <button>SEARCH</button>
          </div>
          <Routes>
            <Route path="/" element={<HotelListings places={places} />} />
            <Route path="/booking/:id" element={<BookingPage places={places} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
