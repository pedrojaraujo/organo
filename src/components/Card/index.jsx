import "./styles.modules.css";
import { AiFillCloseCircle } from "react-icons/ai";

export const Card = ({ cor, name, post, image, deleteUser, id }) => {
  return (
    <div className="colaborador">
      <AiFillCloseCircle
        size={25}
        className="deletar"
        onClick={() => deleteUser(id)}
      />
      <div className="cabecalho" style={{ backgroundColor: cor }}>
        <img src={image} alt="imagem de perfil do funcionário" />
      </div>
      <div className="rodape">
        <h4>{name}</h4>
        <h5>{post}</h5>
      </div>
    </div>
  );
};
