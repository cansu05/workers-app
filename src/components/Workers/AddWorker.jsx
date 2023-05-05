import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";

const AddWorker = (props) => {
  const [enteredWorkerName, setEnteredWorkerName] = useState("");
  const [enteredWarge, setEntereWarge] = useState("");

  const minimumWage = 8500;

  const addWorkerHandler = (e) => {
    e.preventDefault();
    if (
      enteredWorkerName.trim().length === 0 ||
      enteredWarge.trim().length === 0
    ) {
      return;
    }

    if(+enteredWarge < minimumWage) {
      return;
    }

    props.setWorkers((prevState) => [
      {
        id: Math.floor(Math.random() * 1000),
        name: enteredWorkerName,
        wage: enteredWarge
      },
      ...prevState
    ])

    setEnteredWorkerName("");
    setEntereWarge("");

  };

  return (
    <Card className="mt-10">
      <form className="flex flex-col gap-y-2" onSubmit={addWorkerHandler}>
        <label htmlFor="name" className="font-medium">
          Çalışan İsmi
        </label>
        <input
          id="name"
          className="max-w-[40rem] w-full mx-auto border p-2"
          type="text"
          placeholder="Çalışan ismi giriniz"
          onChange={(e) => setEnteredWorkerName(e.target.value)}
          value={enteredWorkerName}
        />

        <label htmlFor="wage" className="font-medium">
          Maaş Miktarı
        </label>
        <input
          id="wage"
          className="max-w-[40rem] w-full mx-auto border p-2"
          type="number"
          placeholder="Maaş giriniz"
          onChange={(e) => setEntereWarge(e.target.value)}
          value={enteredWarge}
        />

        <Button className="mt-2" type="submit">
          Ekle
        </Button>
      </form>
    </Card>
  );
};

export default AddWorker;
