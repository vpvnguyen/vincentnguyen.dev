import React from "react";
import FormValidation from "../../utils/test/FormValidation";

export const Title = ({ children }) => <h1>{children}</h1>;

export const Phone = ({ onChange }) => (
  <>
    <label>
      Phone
      <input name="phone" type="number" onChange={onChange} />
    </label>
  </>
);

export const Email = ({ onChange }) => (
  <label>
    Email
    <input name="email" onChange={onChange} />
  </label>
);
