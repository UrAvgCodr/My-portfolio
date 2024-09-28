
/* ==========================
   File Name: [contact.jsx]
   Student’s Name: Thadee Sidyumunsi
   Student ID: 301432375
   Date: 9/25/204
   ========================== */
export default function Contact() {
     return (
     <>
     
     <div className="contact">
     
    <form id="myForm">
     <header>Contact Me</header>
        <label for="firstName">First Name:</label><br />
        <input type="text" id="firstName" name="firstName" required /><br /><br />

        <label for="lastName">Last Name:</label><br />
        <input type="text" id="lastName" name="lastName" required /><br /><br />

        <label for="contactNumber">Contact Number:</label><br />
        <input type="tel" id="contactNumber" name="contactNumber" /><br /><br />

        <label for="email">Email Address:</label><br />
        <input type="email" id="email" name="email" required /><br /><br />

        <label for="message">Message:</label><br />
        <textarea id="message" name="message" rows="4" cols="50" required></textarea><br /><br />

        <input type="submit" value="Submit" />
    </form>
    </div>
     </>

      );
      
       
      }
         


 

 