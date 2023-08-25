import "./styles.modules.css";

export const Card = ({ bColor, name, post, image }) => {
  return (
    <div className="colaborador">
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
