import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';

import PhoneHeader from '../../components/PhoneHeader';
import Menu from '../../components/Menu';
import Iframe from 'react-iframe';

import { Container } from './styles';

interface IRouteParams {
  id: string;
}

const Post: React.FC = () => {
  const { id } = useParams<IRouteParams>();
  const [postUrl, setPostUrl] = useState<string>();

  useEffect(() => {
    api.get(`/posts/${id}`).then(response => {
      setPostUrl(response.data.postUrl);
    });
  }, [id]);

  return (
    <Container>
      <PhoneHeader background="#fcfcfe" color="#316094"><Menu menuBarColor="#316094" /><h1>dica Linker</h1></PhoneHeader>
      {postUrl && (
        <Iframe url={postUrl} />
      )}
    </Container>
  );
}

export default Post;