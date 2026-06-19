import "./Cartao.css";

function Cartao({ titulo, children }) {
  const totalTopicos = 5;
  const concluidos = 3;
  const porcentagem = Math.round((concluidos / totalTopicos) * 100);

  return (
    <div className="cartao">
      <h3>{titulo}</h3>
      {children}
      <hr />
      <p className="destaque">Progresso da Aula: {porcentagem}%</p>
      <p>Faltam {totalTopicos - concluidos} tópicos.</p>
    </div>
  );
}

export default Cartao;