import { useState } from "react";
import styles from "./styles.module.css";
import { Textfields } from "../Textfields";
import { DropDown } from "../DropDown";
import { Button } from "../Button";
import { v4 as uuidv4 } from "uuid";

export const Form = ({
  value,
  registeredEmployee,
  grupos,
  registerTeam,
  corTime,
  nomeTime,
  setCorTime,
  setNomeTime,
}) => {
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
    <div className={styles.formContainer}>
      <form
        className={styles.text__container}
        onSubmit={createCard}
        setCorTime={setCorTime}
        setNomeTime={setNomeTime}
      >
        <h1 className={styles.title__text__field}>
          Preencha os dados para criar o card do colaborador
        </h1>
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
        <Button>Criar card</Button>
      </form>
      <form
        className={styles.text__container}
        onSubmit={(e) => {
          e.preventDefault();
          registerTeam({ name: nomeTime, cor: corTime });
        }}
      >
        <h1 className={styles.title__text__field}>
          Preencha os dados para criar um time
        </h1>
        <Textfields
          value={nomeTime}
          setState={setNomeTime}
          type="text"
          label="Nome"
          placeholder="Digite o nome do time"
        />
        <Textfields
          styles={{
            height: "20px",
          }}
          value={corTime}
          setState={setCorTime}
          type="color"
          label="Cor"
          placeholder="Digete a cor do time"
        />
        <Button>Criar time</Button>
      </form>
    </div>
  );
};
