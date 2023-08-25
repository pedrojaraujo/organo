import { useState } from "react";
import styles from "./styles.module.css";
import { Textfields } from "../Textfields";
import { DropDown } from "../DropDown";
import { Button } from "../Button";
import { v4 as uuidv4 } from "uuid";

export const Form = ({ title, value, registeredEmployee, grupos }) => {
  const [name, setName] = useState("");
  const [post, setPost] = useState("");
  const [image, setImage] = useState("");
  const [time, setTime] = useState("");

  const createCard = (e) => {
    e.preventDefault();

    if (name !== "" && post !== "" && image !== "") {
      const id = uuidv4();

      registeredEmployee({
        id,
        name,
        post,
        image,
        time,
      });
      setName("");
      setPost("");
      setImage("");
      setTime("");
    }
  };

  return (
    <form className={styles.text__container} onSubmit={createCard}>
      <h1 className={styles.title__text__field}>{title}</h1>
      <Textfields
        value={name}
        setState={setName}
        type="text"
        label="Nome"
        placeholder="Digite seu nome"
      />
      <Textfields
        value={post}
        setState={setPost}
        type="text"
        label="Cargo"
        placeholder="Digite seu cargo"
      />
      <Textfields
        value={image}
        setState={setImage}
        type="url"
        label="Imagem"
        placeholder="Coloque o endereço da imagem"
      />
      <DropDown time={time} grupos={grupos} setTime={setTime} label="Times" />
      <Button /* onClick={submitFunction} */>Criar card</Button>
    </form>
  );
};
