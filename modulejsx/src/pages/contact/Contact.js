// // Contact.js

// import React, { useState, useRef } from 'react';
// import './contact.css'; 
// import emailjs from '@emailjs/browser';


//     const handleSubmit = async (e) => {
//     e.preventDefault();
//     //console.log(formData);
//     const serviceId = "service_62grnh8";
//     const templateId = "template_vehs6za";
//     try {
//       setLoading(true);
//       await emailjs.send(serviceId, templateId, {
//        name: nameRef.current.value,
//         recipient: emailRef.current.value
//       });
//       alert("email successfully sent check inbox");
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   };

// const Contact = () => {
//     const form = useRef();

//     const sendEmail = (e) => {
//       e.preventDefault();
  
//       emailjs.sendForm('service_62grnh8', 'template_vehs6za', form.current, '9ozhhkfUdMZOG9G6m')
//         .then((result) => {
//             console.log(result.text);
//         }, (error) => {
//             console.log(error.text);
//         });
//     };
  
//     const [loading, setLoading] = useState(false);
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     message: '',
// //   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   return (
//     <div className="contact-container">
//       <h2>Contact Us</h2>
//       <form ref={form} onSubmit={sendEmail} > 
//       {/* onSubmit={handleSubmit} */}
//         <div className="form-group">
//           <label htmlFor="name">Name:</label>
//           <input
//             ref={nameRef} 
//             placeholder="enter your name"
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input
//             ref={emailRef} 
//             type="email" 
//             placeholder="enter your email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="message">Message:</label>
//           <textarea
//             id="message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//           ></textarea>
//         </div>
//         <button type="submit" onClick = {handleSubmit} disabled={loading}>Submit</button>
//       </form>
//     </div>
//   );
//   setLoadingFromApp(true);
// };

// export default Contact;


// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// const Contact = () => {
    
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('service_62grnh8', 'template_vehs6za', form.current, '9ozhhkfUdMZOG9G6m')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   };

//   return (
//     <div className="contact-container">
//         <h2>Contact Us</h2>
//         <form ref={form} onSubmit={sendEmail}>
//             <div className="form-group">
//                 <label htmlFor="name">Name</label>
//                 <input 
//                 placeholder="enter your name"
//                 type="text" 
//                 id="name"
//                 name="user_name" 
//                 required
//                 />
//             </div>
//             <div className="form-group">
//                 <label htmlFor="email">Email</label>
//                 <input 
//                 type="email" 
//                 placeholder="enter your email"
//                 id="email"
//                 name="user_email" 
//                 required
//                 />
//             </div>
//             <div className="form-group">
//                 <label htmlFor="message">Message</label>
//                 <textarea name="message" id="message" required />
//             </div>
//             <input type="submit" value="Send" />
            
//         </form>
//     </div>
//   );
  
// };


// export default Contact;

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'; 

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_62grnh8', 'template_vehs6za', form.current, '9ozhhkfUdMZOG9G6m')
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  function showMessage() {
    alert('Message sent! Thank you for your feedback!');

  }

  return (
    <div>
      <section className="hero">
        <div className="headerTitles">
          <span className="headerTitleLg">Let Us Hear From You!</span>
          <span className="headerTitleSm">Your input matters.</span>
        </div>
        <img
          className="headerImg"
          src="https://i.imgur.com/1OVKmeZ.jpg"
          alt=""
        />
      </section>
    <div className="contact-container">
      <div className="left-column">
        <h1><b>GET IN TOUCH</b></h1>
        <h5>
          At Bluebook, we highly value your insights, recommendations, and inquiries. 
          If you have any queries, thoughts, or wish to connect with us, we're here to help. 
          Feel free to reach out using the provided contact details!        </h5>
          <br></br>
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              placeholder="Enter your name"
              type="text"
              id="name"
              name="user_name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              id="email"
              name="user_email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea 
              name="message" 
              id="message"
              placeholder="Send your message" 
              required />
          </div>
          <input type="submit" value="Send"/>
        </form>
      </div>
      <div className="right-column">
        <h2>NEED MORE WAYS TO REACH OUT?</h2>
        <p>
          <b>Address</b><br />
          Angeles City
        </p>
        <p>
          <b>Email</b><br />
          bluebook.blogs@gmail.com
        </p>
        <p>
          <b>Contact Number</b><br />
          87000
        </p>
        <p>
          <b>Socials</b><br />
          <div class ="linkicons">
          <a href="https://facebook.com/bluebook" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://instagram.com/bluebook" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://github.com/bluebook" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          </div>
        </p>
      </div>
    </div>
    </div>
  );
};

export default Contact;
         
       