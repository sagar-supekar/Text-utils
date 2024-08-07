import Demo
 from "./Demo";
 import React
  from "react";
   export default function Address()
   {
    const data=[
        {
            Name:"sagar",
            Address:"pune",
            Taluka:"pune",
            Distric:"pune",
            pincode:"410208"
        },
        {
            Name:"Mahesh",
            Address:"pune",
            Taluka:"pune",
            Distric:"pune",
            pincode:"410208"
        },
        {
            Name:"shubham",
            Address:"pune",
            Taluka:"pune",
            Distric:"pune",
            pincode:"410208"
        }
    ]
    return(
        <div>
            <Demo data= {data}/>
        </div>
    )
   }