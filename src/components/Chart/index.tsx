import React, { useState, useCallback } from 'react';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { VictoryBar, VictoryGroup } from 'victory';

import { Container, Options } from './style';

interface Data {
  week: number;
  income: number;
  costs: number;
}

interface ChartProps {
  data: Array<Data>;
  date: Date;
}

const Chart: React.FC<ChartProps> = ({ data, date }) => {
  const [income, setIncome] = useState(true);
  const [costs, setCosts] = useState(true);

  const handleCheckboxChange = useCallback((event) => {
    if (event.target.name === 'income') {
      setIncome(event.target.checked);
    } else if (event.target.name === 'costs') {
      setCosts(event.target.checked);
    }
  }, [])

  return (
    <Container>
      <h3>
        {format(date, 'MMMM', {
          locale: ptBR,
        })}
      </h3>

      <Options>
        <label htmlFor="income">
          <input 
            name="income" 
            type="checkbox"
            defaultChecked={true}
            onClick={handleCheckboxChange}
          />
          Receitas
        </label>

        <label htmlFor="costs">
          <input 
            name="costs" 
            type="checkbox"
            defaultChecked={true}
            onClick={handleCheckboxChange}
          />
          Custos
        </label>
      </Options>

      <VictoryGroup
          offset={45}
          height={160}
          padding={{ top: 16, right: 75, bottom: 16, left: 75 }}
      >
        {costs && (
          <VictoryBar 
            data={data}
            x="week"
            y="costs"
            style={{ data: { fill: "#DADADA", width: () => income ? 40 : 80 }}}
            animate={{ duration: 1000, onLoad: { duration: 1000 } }}
          />
        )}

        {income && (
          <VictoryBar 
            data={data}
            x="week"
            y="income"
            style={{ data: { fill: "#53DC8D", width: () => costs ? 40 : 80 }}}
            animate={{ duration: 1000, onLoad: { duration: 1000 } }}
          />       
        )}    
      </VictoryGroup>
    </Container>
  )
}

export default Chart;