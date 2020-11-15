import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

import PhoneHeader from '../../components/PhoneHeader';
import Chart from '../../components/Chart';
import MonthPicker from '../../components/MonthPicker';
import LampImg from '../../images/lampada.png'

import formatValue from '../../utils/formatValue';
import api from '../../services/api';

import { Container, Header, Wrapper, Balance, Text, Insights } from './styles';
import Menu from '../../components/Menu';

interface IData {
  week: number;
  income: number;
  costs: number;
}

interface ICharts {
  month: string;
  monthlyBalance: Array<IData>;
}

interface IBalance {
  monthlyIncome: number;
  monthlyCosts: number;
}

const Monitoramento: React.FC = () => {
  const [activeHeader, setActiveHeader] = useState<'monthly' | 'yearly'>('monthly');
  const [date, setDate] = useState(new Date());
  const [data, setData] = useState<IData[]>([]);
  const [balance, setBalance] = useState<IBalance>({} as IBalance);

  useEffect(() => {
    const formatedDate = format(date, 'MMMM');

    api.get(`/charts?month=${formatedDate}`).then(response => {
      const chartArray = response.data.map((data: ICharts) => data.monthlyBalance);

      const chartData = chartArray[0].map((data: IData) => data);

      setBalance(response.data[0]);

      setData(chartData);
    });
  }, [date]);
  
  console.log(balance);
  return (
    <Container>
      <PhoneHeader background="#fcfcfe" color="#316094">
        <Menu menuBarColor="#316094" />
        <h1>monitoramento</h1>
      </PhoneHeader>

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
            <span className="income">{formatValue(balance.monthlyIncome)}</span>
          </div>
          <div>
            <span>Custos</span>
            <span className="costs">{formatValue(balance.monthlyCosts)}</span>
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