import { useState } from "react";

const defaultFormData = {
  title: "",
  body: ""
};

export default function App() {
  const [formData, setFormData] = useState(defaultFormData);
  const { title, body } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData(defaultFormData);
  };

  return (
    <>
      <h1>Form</h1>
      <p>Create a post</p>

      <form onSubmit={onSubmit}>
        <label htmlFor="title">Title</label>
        <br />
        <input type="text" id="title" value={title} onChange={onChange} />
        <br />
        <br />
        <label htmlFor="body">Body</label>
        <br />
        <input type="text" id="body" value={body} onChange={onChange} />
        <br />
        <br />
        <button type="submit">Upload post</button>
      </form>
    </>
  );
}
// Footer
// © 2022 GitHub, Inc.
// Footer navigation
// Terms
// Privacy
// Security
// Status
// Docs
// Contact GitHub
// Pricing
// API
// Training
// Blog
// About
