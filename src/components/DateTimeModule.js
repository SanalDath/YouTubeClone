import React from 'react';


const Testi = (val) => {
  // console.log("prop", val)
  // console.log("type", typeof(val));
  //  const timeVal = val.toString();
  //  console.log("timeVal", timeVal);
    // const publishedAt = "2024-05-13T09:00:41Z";
    const calculateUploadDuration = (val) => {
      
      
        const uploadDateTime = new Date(val.val.toString());
        const currentDateTime = new Date();
        const durationInMillis = currentDateTime - uploadDateTime;
        //console.log(typeof(uploadDateTime));
         //console.log(uploadDateTime);
        // console.log(currentDateTime);
        //console.log(durationInMillis);
        const seconds = Math.floor(durationInMillis / 1000);
        //console.log(seconds);
        const minutes = Math.floor(seconds / 60);
        //console.log(minutes);
        const hours = Math.floor(minutes / 60);
        //console.log(hours);
        const days = Math.floor(hours / 24);
        //console.log(days);
        return `${days} days, ${hours % 24} hours ago`;
      }
    
      const uploadDuration = calculateUploadDuration(val);
      //console.log(uploadDuration);
  return (
    <div>
      <h1>{uploadDuration}</h1>
    </div>
  )
}

export default Testi;
