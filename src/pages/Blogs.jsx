import React from 'react';
import './pagesCSS/Blogs.css';
const Blogs = () => {
    const articles = [
        {
            id: 1,
            title: "Como Melhorar sua Produtividade com JavaScript",
            content: "JavaScript é uma linguagem poderosa, mas muitas vezes subutilizada. Neste artigo, exploramos técnicas avançadas para otimizar seu código e workflow...",
            author: "João Vitor",
            date: "18 de Outubro de 2024"
        },
        {
            id: 2,
            title: "Introdução ao Vue.js: Um Guia Completo",
            content: "Vue.js é uma alternativa interessante ao React para a construção de interfaces de usuário. Vamos explorar como começar a usar Vue.js e suas principais funcionalidades...",
            author: "João Vitor",
            date: "10 de Outubro de 2024"
        },
        {
            id: 3,
            title: "GraphQL vs REST: Qual Escolher?",
            content: "Entender as diferenças entre GraphQL e REST é essencial para qualquer desenvolvedor backend moderno. Neste artigo, abordamos os prós e contras de cada abordagem...",
            author: "João Vitor",
            date: "5 de Outubro de 2024"
        }
    ];

    return (
        <div className="blogs-container">
            <h1>Blog Articles</h1>
            <ul className="articles-list">
                {articles.map((article) => (
                    <li key={article.id} className="article-item">
                        <h2>{article.title}</h2>
                        <p><strong>Autor:</strong> {article.author}</p>
                        <p><strong>Data:</strong> {article.date}</p>
                        <p>{article.content}</p>
                        <a href="#" className="read-more">Leia mais</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Blogs;
