import { ChangeEvent, useState } from "react";




type FormEventHandler = (event: ChangeEvent<HTMLInputElement| HTMLTextAreaElement| HTMLSelectElement>) => void;

const HandleForm = (initialState: any) => {
  const [state, setState] = useState(initialState);
  const handleInput: FormEventHandler = (event) => {
    setState((prevState: any) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  const clearForm = () => setState(initialState);
  return [state, handleInput, clearForm] as const;
};

export default HandleForm;
