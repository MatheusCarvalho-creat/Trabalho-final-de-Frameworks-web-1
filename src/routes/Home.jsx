import { useState, useEffect } from "react"; // Importa hooks do React: useState para estado, useEffect para efeitos colaterais
import axios from "axios"; // Importa axios para fazer requisições HTTP
import './Home.css' // Importa o arquivo CSS para estilização

const Home = () => {
  // Estado para armazenar a lista de Pokémons
  const [pokemons, setPokemons] = useState([]);
  // Estado para controlar o carregamento da página
  const [loading, setLoading] = useState(true);

  // Função assíncrona para buscar Pokémons da API
  const getPokemons = async () => {
    try {
      // Requisição GET para a API do Pokémon
      // limit=50 -> retorna os primeiros 50 Pokémons
      // offset=0 -> começa do primeiro Pokémon
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=50&offset=0"
      );

      // A propriedade results contém o array de Pokémons com {name, url}
      setPokemons(response.data.results); // Salva os Pokémons no estado
    } catch (error) {
      // Caso ocorra algum erro na requisição, exibe no console
      console.error("Erro ao buscar pokémons:", error);
    } finally {
      // Sempre executa: indica que o carregamento terminou
      setLoading(false);
    }
  };

  // useEffect executa a função getPokemons apenas uma vez quando o componente monta
  useEffect(() => {
    getPokemons();
  }, []); // Array vazio significa que o efeito não depende de nenhum estado

  // JSX que será renderizado na tela
  return (
    <div>
      <h1>Lista de Pokémons</h1>

      {loading ? (
        // Se estiver carregando, exibe "Carregando..."
        <p>Carregando...</p>
      ) : (
        // Caso contrário, exibe a lista de Pokémons
        <ul>
          {pokemons.map((pokemon, index) => (
            // Percorre o array de Pokémons
            // key={index} -> chave única para cada item da lista (necessário para o React)
            <li key={index}>
              <h2>{pokemon.name}</h2> {/* Exibe o nome do Pokémon */}

              {/* 
                Exibe a imagem do Pokémon.
                A URL segue o padrão do GitHub do PokeAPI:
                https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{id}.png
                index + 1 é usado porque os Pokémons vêm em ordem da Pokédex
              */}
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
                alt={pokemon.name} // Texto alternativo para acessibilidade
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home; // Exporta o componente para ser usado em outros arquivos
