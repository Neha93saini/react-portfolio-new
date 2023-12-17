import React from 'react';
import { ErrorMessage, useField } from 'formik';

const TextField1 = ({ label, ...props }) => { // eslint-disable-line
  const [field, meta] = useField(props); // eslint-disable-line

  return (
    <div className="mb-2 ml-4 ">
      <label className="mt-3" htmlFor={field.name}>{label}</label>
      <input
        className={`form-control shadow-none  ${meta.touched && meta.error && 'is- invalid'}`}
        {...field} {...props} // eslint-disable-line
        autoComplete="off"
      />
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  );
};

export default TextField1;
