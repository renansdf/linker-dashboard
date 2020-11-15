import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import Menu from '../../components/Menu';
import PhoneHeader from '../../components/PhoneHeader';

import { Container, Post } from './styles';

interface IPost {
  id: number;
  postUrl: string;
  imgUrl: string;
  title: string;
  category: string;
}

interface IDica {
  dicaText: string;
}

const Insights: React.FC = () => {
  const [posts, setPosts] = useState<IPost[]>();
  const [dica, setDica] = useState<IDica>();

  useEffect(() => {
    //get transactions
    //check if profit this month is smaller

    setDica({
      dicaText: 'Seu lucro tem aumentado, parabéns!'
    });

    api.get('/posts?situation=positive-balance').then(response => {
      setPosts(response.data);
    });
  }, []);

  return (
    <Container>
      <PhoneHeader background="#fcfcfe" color="#316094"><Menu menuBarColor="#316094" /><h1>dicas</h1></PhoneHeader>

      <h2><span>{dica?.dicaText}</span><br />Abaixo algumas dicas pra esse momento da sua empresa.</h2>

      {posts && posts.map(post => (
        <Post key={post.id}>
          <Link to={`/post/${post.id}`}>
            <img src={post.imgUrl} alt={post.title} />
            <div>
              <strong>{post.category}</strong>
              <h3>{post.title}</h3>
            </div>
          </Link>
        </Post>
      ))}
    </Container>
  );
}

export default Insights;