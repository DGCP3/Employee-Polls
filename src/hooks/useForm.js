import { useState } from "react";

const useForm = (initial) => {
  const [form, setForm] = useState(initial);
  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const reset = () => {
    setForm(initial);
  };

  return [form, onChange, reset];
};

export default useForm;
