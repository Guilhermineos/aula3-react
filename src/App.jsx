import Cabecalho from "./Cabecalho";
import Saudacao from "./Saudacao";
import Cartao from "./Cartao";
import Rodape from "./Rodape";

function App() {
  const totalAulas = 17;
  const curso = "Análise e Desenvolvimento de Sistemas (3º Semestre)";

  return (
    <>
      <Cabecalho />
      <Saudacao />
      
      <Cartao titulo="Sobre mim">
        <p><strong>Curso:</strong> {curso}</p>
        <p><strong>Hobbies e Interesses:</strong></p>
        <ul>
          <li>Montagem e manutenção de hardware</li>
          <li>Desafios Monotype e VGC em Pokémon</li>
          <li>Estudar JavaScript, CSS, SQL</li>
        </ul>
      </Cartao>

      <Cartao titulo="Minhas Aulas">
        <p>Neste semestre, teremos um total de <strong>{totalAulas}</strong> aulas de React.</p>
      </Cartao>

      <Rodape />
    </>
  );
}

export default App;