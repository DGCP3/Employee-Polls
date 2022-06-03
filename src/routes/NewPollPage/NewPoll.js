import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import InputField from "../../components/InputField";
import useForm from "../../hooks/useForm";
import useReduxStore from "../../hooks/useStore";
import { PageLayout } from "./style";

export default function NewPoll() {
  const navigate = useNavigate();
  const [form, handleChange, reset] = useForm({
    optionOne: "",
    optionTwo: "",
  });

  const { createQuestionThunk } = useReduxStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    createQuestionThunk(form);
    reset({
      optionOne: "",
      optionTwo: "",
    });
    navigate("/questions");
  };
  return (
    <PageLayout>
      <h1>Create new poll</h1>
      <h2>Would you rather</h2>
      <form onSubmit={handleSubmit}>
        <InputField
          value={form.optionOne}
          label="Option one"
          marginBlock="0"
          name="optionOne"
          onchange={handleChange}
        />
        <InputField
          value={form.optionTwo}
          label="Option two"
          name="optionTwo"
          onchange={handleChange}
        />
        <Button height={"60px"} fontSize={"1.3rem"}>
          Submit
        </Button>
      </form>
    </PageLayout>
  );
}
