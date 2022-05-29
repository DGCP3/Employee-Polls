import { Button } from "../components/QuestionCard";
import styled from "styled-components";
import { useState } from "react";
import useReduxStore from "../hooks/useStore";
export const Form = styled.form`
  border: 2px solid black;
  padding: 20px;
  width: 500px;
`;
export const Input = styled.input`
  margin-block: 10px;
  padding-block: 10px;
  border: 2px solid black;
  width: 100%;
`;

export const Confirmation = styled.dialog``;

export default function NewPoll() {
  const [form, setForm] = useState({
    optionOne: "",
    optionTwo: "",
  });

  const { createQuestionThunk } = useReduxStore();

  const onchange = (e) => {
    setForm((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  const createPoll = (e) => {
    e.preventDefault();
    createQuestionThunk(form);
    setForm({
      optionOne: "",
      optionTwo: "",
    });
  };
  return (
    <div>
      <Confirmation closed>
        <p>Greetings, one and all!</p>
        <form method="dialog">
          <button>OK</button>
        </form>
      </Confirmation>
      <div>Would you rather</div>
      <Form style={{ width: "500px" }} onSubmit={createPoll}>
        <h3>Option one</h3>
        <Input
          onChange={onchange}
          name="optionOne"
          value={form.optionOne}
          type="text"
          required
        />
        <h3>Option two</h3>
        <Input
          onChange={onchange}
          name="optionTwo"
          value={form.optionTwo}
          type="text"
          required
        />
        <Button style={{ marginBlock: "20px", border: "2px solid black" }}>
          Submit
        </Button>
      </Form>
    </div>
  );
}
