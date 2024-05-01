// import React from "react";
// import styles from "../../styles/styles";

// const Sponsored = () => {

//   const handleDownload = () => {
//     // Replace the URL with the actual URL of your PDF file
//     const pdfUrl = "https://publuu.com/flip-book/436990/986373";
//     // Open the PDF in a new tab/window for download
//     window.open(pdfUrl, '_blank');
//   };

//   return (
//     <div
//       className={`${styles.section} hidden sm:block bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl`}
//     ></div>
//       {/* <div className="flex justify-between w-full">
//         <div className="flex items-start">
//           <img
//             src="https://logos-world.net/wp-content/uploads/2020/04/Sony-Logo.png"
//             alt=""
//             style={{width:"150px", objectFit:"contain"}}
//           />
//         </div>
//         <div className="flex items-start">
//           <img
//             src="https://logos-world.net/wp-content/uploads/2020/08/Dell-Logo-1989-2016.png"
//             style={{width:"150px", objectFit:"contain"}}
//             alt=""
//           />
//         </div>
//         <div className="flex items-start">
//           <img
//             src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/LG_logo_%282015%29.svg/2560px-LG_logo_%282015%29.svg.png"
//             style={{width:"150px", objectFit:"contain"}}
//             alt=""
//           />
//         </div>
//         <div className="flex items-start">
//           <img
//             src="https://www.vectorlogo.zone/logos/apple/apple-ar21.png"
//             style={{width:"150px", objectFit:"contain"}}
//             alt=""
//           />
//         </div>
//         <div className="flex items-start">
//           <img
//             src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVMAAACVCAMAAADSU+lbAAAApVBMVEX////+/v53d3fyUCICpO+AuwH/uQJzc3Nubm5tbW10dHTySxcAou//twD4+Ph5eXnl5eXt7e3zhGlhu++IiIilzVnyRAL3wLT1+Oh4uADV5rb9ymCn2fX8+en957T9y1m5ubna2trIyMiioqKrq6vx8fGAgIC2trbPz8+QkJCampqKiorU1NSenp5lZWWhyl3yfmH30cagyk/f7ce84fT87Mf9yU7gHQ6ZAAAKM0lEQVR4nO2ca7frphGGR25aEG11SZ00vZxG1tXyZfeSpv//pxUEg0DCkk+Wtq21Mu+nswUS6NHADAM+ACQSiUQikUgkEolEIpFIJBKJRCKRSCQSiUQikUgkEolEIpFIJBKJRCKRSCRSQN+u6V//BvjhuzX956d3v8iO9Ps1ff9nyfS3a/rLXyEiacFv1kRMv1bEdHsR0+1FTLcXMd1exHR7EdPtRUy3FzH9xTKLpkABMf1FkjCzU1nesmT+3jtlGvz++xFAXqd8UJzNevrJTJ3EwkIHp3UAkqzZMVWIas4OWvHp1Uwzq/wRIkhyrGLqQFJLA2jnnd2JIDnyA4q/mCkksRVvHiCCy1hnqAJwVV0Wgd7uQgBHdngjU6ftMkwI8rGDqWZaaisQ7U6Z1milgjGXqZ26XsX0ESEoZkzv5kr8yLTfKsgNUhH31T39OJnBJZ2A6e7LmB4CDnKoIw5Tphdk+nAOfqeg090Tx1yBVI5C8TzVdiS+jimrQ4TgxmdMC3OJ7RFpBK22Ap4YA5Wveb6nMXsD08MhEB5Lo5zbaZIOlhA/mIHfK2i0mbJu7F06RFbvYBryUnZycpjKbl9jHj9yam8WZLrHrr9v/fd7IVNxDDDt2JypWqacTjuN+eHEZ5P9+5iGvJTroUam2o1uz2MLIVP+ZqbpIy8FZ+5WSHfK0dVemLa1HuHp1EtBP9hpamYAl2noccvZg1nBSv1oqfThrTifjmMf4C12ajzR1O2Y/rGumDCFaJ6akn/m56Kuqro455EpVJV0RRUilkWZOfWTrBzqd2WWzLkBNDf9uFs+aUv+meuyujw5yRz1L+uj8pG6ZWr0EqZRNUAT1wkmbb8895hC0iodvSSKyq61nLNBnLf1sMaCXlY7Hlv1NkUac84/MoSdVU79tMqm2E69wGJ27JwRJGF3R4Zl8aG/4Qc8D90yk79sFzW58hqmCX5cz0tBpEn34DNtmFBys2iQX2Lm+DPBLwPT41CVFzZVZPwgZH3sRhQHFvfuqgyaPnYf5yyDoam8pmRhq4MQKLlsbLxuNbnyIqZwHBr2vZTxUPw8Y6o/gGUKUDKPkHxSpZkOj5VMe1zPKqbSaLk4TMRkO7bl7OA/b8yawSll01sFr4dhX/JpSVCvYdpgdzwvZTwUhxWmAHU8I+QxLXE5OzAFqGb1h7ICH5izCXLLFMrgrbxSE/fOmCa6q46tSGMZrknbXWNqk2sHIedGroB4TFmXWm6K6VhfzaUjv/hmJka0ajlr6nJkCufYbWocHdJSd8cUKpw7x1LjoaT36JaYjqbDeN+VZVkfY+ExHeJbweOYM8l05CJdU3Euu95OBEJ7tpOpwOpTlp2KiySrmY7JXMbuRVkWd0tVfg8oP9QOFD485ijbPb1D9annT12m2TRUhsRSXmQ6vie/Y/ySXWKPqSrsz1l2qyXTJEVDK02YmfeY6dJ3mXBZfc1BTWd8lDVgLuMKXYQ2L1rpUxMpjPmzxEqHArI5/edT56SjH/65pu9+WmYawdUMU8tUjyQVsy4zxRS1nDfsBAu32mcam+AwaaAz2wRpNtZHMkOkjl2pRh+YJ54Bu03hgB86CuDE/A/j0ycU+UuSx7UWmaKXwhWSeTMu/16aTyHH97z5cVjkMuXW/UCEDNxQzLhD/UlNBpQVbgVtpsJ/2nDR+D8TXM/XUfO1aQDFZvKYGi9l/YT1UNEyU2PDwZQ2MnWmaUwhTMI2s5ITR/UJNVNxmS47c8zguxYCgOmKXNvyOtNX2Wk08VLmz2EVsMAUIpNWD2e0DVNneWCe6+U41GWT++bjNKQa8OuUwSU0GqqOWZ5h+qdV/ReiL39b048/r8ynke+l0EMNA2qJaR4yuynTw7hnGelLboDh8bqB9VHaEzl18Lq/t+h34Rmmf1jV3wG+/O6Pa/rHGlPfS5mPr/uxxPQ8T6vPmDqjGBpn4nRr4heVU6V1RTJiqp08gOngNHcOxq/rVp5h+s2aNNM1PcPUmIoKSgBXQNEaU1MkgvvS8yUvurRZCsxM59pJXW0sz2KbIonMxDnGAxPW/Q6ZGo+svJQxFQNjiSmmXoPeFJmOftqmjKd2DfE4gCF3UyH8iLksB7t368XYr9vAPphaLyXHkAk6TZ5qiWk1T1fPmPKvYKqjfi+HIng3pEgiU6WY3qo7u0+mZk6TQUnj5VOXmN43ZmpGRlJxh2pcLzK9OPPszpjaML/wPNRzdhoKpZaY3vz6FpgZ2MP6dqQ6nCXwsTv39rudT62XkktnHXSaoxzPzKcseM4nwDQPG9vcd6mdg8OYwFKOU/uoaRgWmd6aaWNvTBOM9NjYyRWmpRtwP8G0MYzuE6bmDJG3eQBJgYlA9Xxcmk78oR+e7Y3paHW6E9kTTM0cPFtIPmBqF0mTdRe2LLzLkmo/Ln1tvsqfi/0QeX9MMyerO8bWS0wxc8dDxwJDTBGMF6BC9GBcuwE92vIkQMVlrUgeMDX5gzGP81KmoxV5b72YQ6lCiQ1MJAWY4iLJ36bBNbtet7klYxrCfj/vwIxJ9iDpx0ytb3s1U2f7IU6eYpphUv7ubrTnA8YAU+lpzPR3cerj+GDDVFk72/2G6TD/2u/XOtuoiUni4I5sgKm7zlKdezHTaFwVjiNscT/KHvFlR8zLQ9N9VA+ZnpHf1aaN8ZIZGikvEsy3NWZBqh4Bjfl+Qpzw1gw/kXF6IaamhzJ+U0pezHTM/XgH4ReZ2uOUgvdl1jRZeWFsuhftNGo3QASrzkN93DoZsqeRio34obqp3ZHodnStEPcI1FbM0NT5YgOD5jFTPJwoiqzJivTlTHEUuuf7l/dNne1htY8Xx3y6b+oxHc5c4Fiw9fWfph+tLuJpimVMj9vxezhNaYQYy4WYnuwun7yFHV7NdEwIu35lcd9UFs/33BeYqnecnZg4uD8OamdlmMGWs+fsxMRA0LYQiqXwOLrR65mauc39UckKU2nH8RTSElM5GOZnSQ4std58ytT5KZYMWOeb+IKVM6P0mJ68j/56ppEOPNwYfo2p7HTrm56Il5jKhu/+cSk5KqsxtvKJC546sRPIOdW/VcRXtzzAdDKSPplp4Dd8UH/ISx/eob3uw/0dX6Pv+vCWkeU1NidKhJwKj6VOZre65pSpSpHcGZ5AkTcw91wfnHtVpgqFYHFbeGtRtaefxrp4OIwyJq01U93XDy8BAWWqW5M3fK6Psr839UHPLzWmHnh3TZaRWXFvBWPpsSrxwCiYmoFNAInmXPepYKLtu1syWTA0t+7SqrJLd/KWALo4OQ3FLO3rcvJjYtN9/wXU5VL17nCtb58bS0XB/zfg4SXnd9GhrdjQJu3Cpq2/1/sVZU/eunDL5zL9VYqYbi9iur2I6fYiptuLmG4vYrq9iOn2Iqbbi5huL2K6vT71/OmvVE+dk4YvP67pfz+HzqOTSCQSiUQikUgkEolEIpFIJBKJRCKRSCQSiUQikUgkEolEIpFIJBKJRCKRSCTU/wFH24tLVTubaAAAAABJRU5ErkJggg=="
//             style={{width:"150px", objectFit:"contain"}}
//             alt=""
//           />
//         </div>
//       </div> */}



    
   
//   );
// };

// export default Sponsored;


// import React from "react";
// import styles from "../../styles/styles";

// const Sponsored = () => {
//   const handleDownload = () => {
//     // Check if window object is defined (to avoid SSR issues)
//     if (typeof window !== 'undefined') {
//       // Replace the URL with the actual URL of your PDF file
//       const pdfUrl = "https://publuu.com/flip-book/436990/986373";
//       // Open the PDF in a new tab/window for download
//       window.open(pdfUrl, '_blank');
//     } else {
//       // Handle the case where window is not available
//       console.error("Window object is not available.");
//       // You might want to provide an alternative behavior here
//     }
//   };

//   return (
//     <div className={`${styles.section} hidden sm:block bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl`}>
//       <div className="brochure-box">
//         <h3 className="Dwnheading">Looking for a Unique Door?</h3>
//         <p className="Dwnheading1">You will love our wide range of products from Arr Doors.</p>
//         {/* Add an onClick event to trigger the download function */}
//         <p>
//           <button style={{ width: "200px", height: "50px", alignItems: "center", marginLeft: "900px", color: "white" }} onClick={handleDownload} className="download-link">Download Brochure</button>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Sponsored;



// import React from "react";
// import styles from "../../styles/styles";

// const Sponsored = () => {
//   const handleDownload = () => {
//     // Check if window object is defined (to avoid SSR issues)
//     if (typeof window !== 'undefined') {
//       // Replace the URL with the actual URL of your PDF file
//       const pdfUrl = "https://publuu.com/flip-book/436990/986373";
//       // Open the PDF in a new tab/window for download
//       window.open(pdfUrl, '_blank');
//     } else {
//       // Handle the case where window is not available
//       console.error("Window object is not available.");
//       // You might want to provide an alternative behavior here
//     }
//   };

//   return (

    
      

//     <div style={{backgroundColor: "#120e0e", padding: "20px", borderRadius: "10px", marginBottom: "20px"}}>

      
//       <div className="brochure-box" style={{height: "395px", border: "2px solid black", marginLeft: "50px", marginRight: "50px", backgroundRepeat: "no-repeat", backgroundImage: "url('https://saina-doors.com/wp-content/uploads/2024/01/homeimg-2.jpg')"}}>
//         <h3 style={{marginTop: "0", marginLeft: "900px", color: "#FFF", fontSize: "45px"}}>Looking for a Unique Door?</h3>
//         <p style={{marginLeft: "900px", color: "#2e57c5", fontSize: "20px"}}>   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.7609237505035!2d77.93896644001158!3d11.424890988812852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babdf87f72ac511%3A0xba10ef1b6b7ae767!2sARR%20Fiber%20Doors%20Industry!5e0!3m2!1sen!2sin!4v1708452841209!5m2!1sen!2sin"   styles="border:0;width:600px;height:8000px;" className="map"  loading="lazy"  title="RR Fiber Products"></iframe></p>
//         {/* Add an onClick event to trigger the download function */}
//         {/* <p>
//           <button style={{border: "2px solid white",width: "200px", height: "50px",marginLeft: "900px", color: "white"}} onClick={handleDownload}>Download Brochure</button>
//         </p> */}


       
//       </div>
//     </div>

//   );
// };

// export default Sponsored;


import React from "react";
import styles from "../../styles/styles";

const Sponsored = () => {
  return (
    <div style={{ backgroundColor: "#120e0e", padding: "20px", borderRadius: "10px", marginBottom: "20px" }}>
      <div className="brochure-box" style={{ height: "395px", border: "2px solid black", marginLeft: "50px", marginRight: "50px", backgroundRepeat: "no-repeat", backgroundImage: "url('https://saina-doors.com/wp-content/uploads/2024/01/homeimg-2.jpg')" }}>
        <h3 style={{ marginTop: "0", marginLeft: "900px", color: "#FFF", fontSize: "45px" }}>Looking for a Unique Door?</h3>
        <p style={{ marginLeft: "900px", color: "#2e57c5", fontSize: "20px" }}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.7609237505035!2d77.93896644001158!3d11.424890988812852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babdf87f72ac511%3A0xba10ef1b6b7ae767!2sARR%20Fiber%20Doors%20Industry!5e0!3m2!1sen!2sin!4v1708452841209!5m2!1sen!2sin" 
            className="map" 
            style={{ width: "600px", height: "350px" }} 
            loading="lazy" 
            title="RR Fiber Products">
          </iframe>
        </p>
      </div>
    </div>
  );
};

export default Sponsored;


