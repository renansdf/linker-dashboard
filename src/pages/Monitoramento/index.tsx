import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import PhoneHeader from '../../components/PhoneHeader';
import Chart from '../../components/Chart';
import MonthPicker from '../../components/MonthPicker';
import LampImg from '../../images/lampada.png'

import { Container, Header, Wrapper, Balance, Text, Insights } from './styles';

const Monitoramento: React.FC = () => {
  const [activeHeader, setActiveHeader] = useState<'monthly' | 'yearly'>('monthly');
  const [date, setDate] = useState(new Date());

  const data = [
    {week: 1, income: 13000, costs: 10000},
    {week: 2, income: 16500, costs: 17000},
    {week: 3, income: 14250, costs: 6000},
    {week: 4, income: 19000, costs: 12000}
  ]

  return (
    <Container>
      <PhoneHeader>Monitore sua conta</PhoneHeader>
      <Header activeHeader={activeHeader}>
        <button 
          type="button" 
          className="monthly"
          onClick={() => setActiveHeader('monthly')}
        >
          Mensal
        </button>

        <button 
          type="button" 
          className="yearly"
          onClick={() => setActiveHeader('yearly')}
        >
          Anual
        </button>
      </Header>

      <Wrapper>
        <MonthPicker date={date} onChange={(newDate) => setDate(newDate)}/>
      
        <Balance>
          <div>
            <span>Receitas</span>
            <span className="income">R$ 1.000.000,00</span>
          </div>
          <div>
            <span>Custos</span>
            <span className="costs">R$ 300.000,00</span>
          </div>
        </Balance>

        <Chart data={data} date={date}/>

        <Text>
          Que tal ler mais sobre dicas para aumentar a receita?
        </Text>

        <Insights>
          <div>
            <span>Como se adaptar à nova realidade?</span>
          </div>
          <div>
            <span>
              5 dicas para reduzir gastos em tempos de crise
            </span>
          </div>
        </Insights>

        <Link to="/insights">
          <img src={LampImg} alt="Lampada"/>
          MAIS INSIGHTS
        </Link>
      </Wrapper>
    </Container>
  );
}

export default Monitoramento;