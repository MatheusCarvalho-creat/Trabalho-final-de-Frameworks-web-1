import { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";

const Posts = () => {
  const [posts, setPosts] = useState([]);       // Armazena os posts existentes
  const [loading, setLoading] = useState(true); // Controla carregamento
  const [title, setTitle] = useState("");       // Título do novo post
  const [body, setBody] = useState("");         // Conteúdo do novo post
  const [error, setError] = useState(null);     // Mensagem de erro

  // Função para buscar posts
  const getPosts = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(response.data);
    } catch (err) {
      console.error("Erro ao buscar posts:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  // Função para criar novo post
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !body) return;

    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        { title, body, userId: 1 }
      );

      // Adiciona o novo post no topo da lista
      setPosts([response.data, ...posts]);
      setTitle("");
      setBody("");
      setError(null);
    } catch (err) {
      console.error("Erro ao criar post:", err);
      setError("Erro ao criar post. Tente novamente.");
    }
  };

  return (
    <div className="posts-container">
      {/* ===== Seção: Criar novo post ===== */}
      <div className="new-post-section">
        <h2>Criar Novo Post</h2>
        <form onSubmit={handleSubmit} className="new-post-form">
      <label>Título:</label>
      <input
        type="text"
        placeholder="Título do post"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <label>Mensagem:</label>
      <textarea
        placeholder="Escreva sua mensagem..."
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
      />

      <button type="submit">Criar Post</button>
    </form>

        {error && <p className="error">{error}</p>}
      </div>

      {/* ===== Seção: Últimos posts ===== */}
      <div className="latest-posts-section">
        <h2>Últimos Posts</h2>
        {loading ? (
          <p>Carregando...</p>
        ) : posts.length === 0 ? (
          <p>Nenhum post encontrado.</p>
        ) : (
          <div className="posts-list">
            {posts.slice(0, 10).map((post) => (
              <div key={post.id} className="post-card">
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Posts;
