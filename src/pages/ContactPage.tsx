// import React from "react";
import { useFormik } from "formik";

interface formDetails {
  name:string,
  email:string,
  message:string  
}
const initialValues:formDetails={
      name: '',
      email: '',
      message: ''
    }

const validate = (values:formDetails) =>{
 const errors:Partial<formDetails>={}
 if(!values.name){
  errors.name ="Name is Required"
 }
 if(!values.email){
  errors.email = "Email is Required"
 }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  errors.email = 'Invalid email format';
}
 if(!values.message){
  errors.message = "Message is Required"
 }
 return errors;
}

const ContactPage = () => {

  const handleSubmit = (values:formDetails) => {
  const mailtoLink =  `https://mail.google.com/mail/?view=cm&fs=1&to=kowshika29.k@gmail.com&su=${encodeURIComponent(
      values.message
    )}&body=${encodeURIComponent(
      `Hi, my name is ${values.name}.\n\n${values.message}\n\nContact me at: ${values.email}`
    )}`;
   window.open(mailtoLink,"_blank")
    }
  const formik = useFormik({
    initialValues,
    validate,
    onSubmit:handleSubmit
  })

  return (
    <>
      <section className="2xl:px-60 bg-[#000000] text-white px-25 pb-25 w-full" id="ContactPage">
        <div className="flex justify-between items-center sm:max-lg:flex-col gap-10">
          <div className="w-1/2 ">
          <div className="flex items-center md:-ml-24 2xl:-ml-60">
            <div className="bg-black md:w-40 h-[2px] bg-orange-400 mr-4 2xl:w-70"></div>
            <h2 className="h2-heading text-2xl mb-8 md:text-4xl font-bold  mb-8">Contacts</h2></div>
            <h1 className=" text-2xl mb-5 md:text-5xl font-bold mb-5 sm:">Have a Project?</h1>
            <h1 className="text-2xl mb-5 md:text-5xl font-bold mb-8">Let's Talk!</h1>
          </div>
          <div className="w-1/2">
            <form onSubmit={formik.handleSubmit}>
              <div>
                <label className="contactlabel" htmlFor="name">Name</label>
                <input type="text" name="name" id="name" className="contactinput" onChange={formik.handleChange} value={formik.values.name}/>
                {formik.errors.name?<div className="error">{formik.errors.name}</div>:null}
              </div>
              <div>
                <label className="contactlabel" htmlFor="email">Email</label>
                <input type="email" name="email" id="email" className="contactinput" onChange={formik.handleChange} value={formik.values.email} />
                {formik.errors.email?<div className="error">{formik.errors.email}</div>:null}
              </div>
              <div>
                <label className="contactlabel" htmlFor="message">Message</label>
                <textarea name="message" id="message" rows={3} className="contactinput" onChange={formik.handleChange} value={formik.values.message}/>
                 {formik.errors.message?<div className="error">{formik.errors.message}</div>:null}
              </div>
               <button 
                type="submit"
                className="contact-button bg-orange-400 text-white py-[12px] px-[20px] font-medium text-base no-underline text-[15px] rounded mt-4"
              >Submit</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
export default ContactPage;
