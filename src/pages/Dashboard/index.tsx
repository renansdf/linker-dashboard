import React, { useEffect, useState } from 'react';
import { FiBarChart2, FiCompass, FiTag } from 'react-icons/fi';
import { Link, useParams } from 'react-router-dom';

import Menu from '../../components/Menu';
import PhoneHeader from '../../components/PhoneHeader';

import { Container, NovaTransacao } from './styles';

interface IRouteParams {
  t: string;
}

const Dashboard: React.FC = () => {
  const { t } = useParams<IRouteParams>();
  const [novaTransacao, setNovaTransacao] = useState(true);

  useEffect(() => {
    if (t === 'tag') {
      setNovaTransacao(false);
    }
  }, [t]);

  return (
    <Container>
      <PhoneHeader background="#fcfcfe" color="#316094"><Menu menuBarColor="#316094" /></PhoneHeader>
      <Link to="/tag">
        <div onClick={() => setNovaTransacao(false)}>
          <h3>Categorização de transações</h3>
          <p>categorize transações para ver dicas sobre sua empresa.</p>
        </div>
        <FiTag size={30} />
      </Link>

      {novaTransacao && (
        <NovaTransacao>
          1 nova transação
        </NovaTransacao>
      )}

      <Link to="/monitoramento" className="bgBlue">
        <div>
          <h3>Monitore sua conta</h3>
          <p>gráficos personalizados sobre as transacões da sua conta PJ.</p>
        </div>
        <FiBarChart2 size={30} />
      </Link>

      <Link to="/insights" className="bgGrad">
        <div>
          <h3>Painel de dicas</h3>
          <p>veja notícias do blog da Linker escolhidas a dedo para ajudar seu negócio.</p>
        </div>
        <FiCompass size={30} />
      </Link>

    </Container>
  );
}

export default Dashboard;