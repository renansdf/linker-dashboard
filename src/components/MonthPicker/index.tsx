import React from 'react';
import { format, addMonths, subMonths } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Container } from './styles';

interface MonthPickerProps {
  date: Date;
  onChange: (newDate: Date) => void;
}

const MonthPicker: React.FC<MonthPickerProps> = ({ date, onChange }) => {
  const handleNextDate = () => {
    const newDate = addMonths(date, 1);
    onChange(newDate);
  }

  const handlePreviousDate = () => {
    const newDate = subMonths(date, 1);
    onChange(newDate);
  }

  return (
    <Container>
      <FiChevronLeft size={24} color="#306292" onClick={handlePreviousDate}/>
      <span>
        {format(date, 'MMMM', {
          locale: ptBR,
        })}
      </span>
      <FiChevronRight size={24} color="#306292" onClick={handleNextDate}/>
    </Container>
  )
}

export default MonthPicker;