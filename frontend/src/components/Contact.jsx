import { useState } from "react";
let contactArray = [
  {
    from: "test@gmail.com",
    to: "test@yahoo.ca"
  },
  {
    from: "test@yahoo.ca",
    to: "test@gmail.com"
  }
];
// this is for sending email. Users can send an email from the form.
export default function Contact() {
  const [contacts, setContacts] = useState(contactArray);

  async function handleForm(e) {
    //e.preventDefault(); // prevent actual page refresh on submission
    //console.log(e.target.from.value);
    let contactForm = {
      userName: e.target.userName.value,
      userEmail: e.target.userEmail.value,
      userMsg: e.target.userMsg.value
    };
    await fetch(`https://my-portfolio-backend-chi.vercel.app/api/email?userName=${contactForm.userName}&userEmail=${contactForm.userEmail}&userMsg=${contactForm.userMsg}`);
  }
    return(
        <>
         <h2 className="subTitle">Contact</h2>
         <div className="contactForm">
           <form onSubmit={handleForm}>
            <label htmlFor="">Name:</label>
            <input name="userName" className="nameForm" type="text" />
            <label htmlFor="">Email Address:</label>
            <input name="userEmail" className="mailForm" type="email" />
            <label htmlFor="">Message:</label>
            <input name="userMsg" className="messageForm" type="text" />
            <button className="btn" type="submit">Send</button>
           </form>
         </div>
        </>
    )
}

