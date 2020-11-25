import React, { useState, useEffect } from "react";
import { Title, Phone, Email } from "../test/Form";

const initialFormData = Object.freeze({
  phone: "",
  email: "",
});

const SubscriptionForm = () => {
  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    setFormData(initialFormData);
  }, []);

  const onChange = async e => {
    await setFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
    console.log(`onChange formData: ${JSON.stringify(formData)}`);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(`submitting formData: ${JSON.stringify(formData)}`);
    // ... submit to API or something
    setFormData(initialFormData);
  };

  return (
    <div>
      <Title>Title</Title>
      <Phone onChange={onChange} />
      <Email onChange={onChange} />
      <button onClick={handleSubmit}>Subscribe</button>
    </div>
  );
};

export default SubscriptionForm;
