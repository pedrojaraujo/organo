import "./styles.modules.css";
import { AiFillCloseCircle } from "react-icons/ai";

export const Card = ({ bColor, name, post, image, deleteUser }) => {
  return (
    <div className="colaborador">
      <AiFillCloseCircle size={25} className="deletar" onClick={deleteUser} />
      <div className="cabecalho" style={{ backgroundColor: bColor }}>
        <img src={image} alt="imagem de perfil do funcionário" />
      </div>
      <div className="rodape">
        <h4>{name}</h4>
        <h5>{post}</h5>
      </div>
    </div>
  );
};
