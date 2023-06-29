import { useState } from 'react';

export const useForm = (initialValues) => {
  const [formData, setFormData] = useState(initialValues);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return { formData, handleChange };
};
