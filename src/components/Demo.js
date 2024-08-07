import React from 'react';

export default function Demo({ data }) {
  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <h1>Name: {item.Name}</h1>
          <h2>Address: {item.Address}</h2>
          <h2>Taluka: {item.Taluka}</h2>
          <h3>District: {item.Distric}</h3>
          <h2>Pincode: {item.pincode}</h2>
        </div>
      ))}
    </div>
  );
}
