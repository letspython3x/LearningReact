import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContactCard from './components/ContactCard'

function App() {
  return (
    <div className="contacts">
      <ContactCard contact={{ name: "Keshav Kansal", phone: "99889898", imgUrl: "https://i.imgur.com/8pTwPlXb.jpg", email: "abhi1@abhi.com" }} />
      <ContactCard contact={{ name: "Mukta Gupta", phone: "99889898", imgUrl: "https://i.imgur.com/JXetxQhb.jpg", email: "abhi2@abhi.com" }} />
      <ContactCard contact={{ name: "Siddhi Gupta", phone: "99889898", imgUrl: "https://i.imgur.com/qw09M6Yb.jpg", email: "abhi3@abhi.com" }} />
      <ContactCard contact={{ name: "Akshay khanna", phone: "99889898", imgUrl: "https://i.imgur.com/kkDYbHZb.jpg", email: "abhi4@abhi.com" }} />
    </div>
  )
}

export default App