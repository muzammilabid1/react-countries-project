import { useRef } from "react";
import { Form } from "react-router-dom";

// export const getFormData = async ({ request }) => {
//   const res = await request.formData();
//   const data = Object.fromEntries(res);
//   console.log(data);
// };

export const Contact = () => {
    //! easiest way to get input and also reset input fields
  const handleFormSubmit = (formData) => {
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
  };

  //   const formRef = useRef();
  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>
      <div className="contact-wrapper container">
        <form
          action={handleFormSubmit}
          //   method="post"
          //   ref={formRef}
          //   onSubmit={() => {
          //     setTimeout(() => {
          //       formRef.current.reset();
          //     }, 0);
          //   }}
        >
          <input
            type="text"
            name="username"
            className="form-control"
            placeholder="Enter Your Name"
            required
            autoComplete="off"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            required
            autoComplete="off"
          />
          <textarea
            name="message"
            className="form-control"
            placeholder="Enter Your Message"
            rows="10"
            required
            autoComplete="off"
          ></textarea>
          <button type="submit" value="send">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};
