import React, { useEffect, useState } from 'react';
import { FiWifi, FiBattery } from 'react-icons/fi';
import { Container } from './styles';

interface PhoneHeaderProps {
  background?: string;
  color?: string;
}

const PhoneHeader: React.FC<PhoneHeaderProps> = ({ background, color, children }) => {
  const [backgroundColor, setBackgroundColor] = useState<string>('#306292');
  const [fontColor, setFontColor] = useState<string>('#ffffff');
  const [time, setTime] = useState<string>();

  useEffect(() => {
    background ? setBackgroundColor(background) : setBackgroundColor('#306292');
    color ? setFontColor(color) : setFontColor('#ffffff');

    const t = new Date();
    setTime(t.getHours() + ':' + t.getMinutes());
  }, [background, color]);

  return (
    <Container backgroundColor={backgroundColor} fontColor={fontColor}>
      <div>{time}</div>
      <div>
        <FiWifi size={14} />
        <FiBattery size={14} />
      </div>
      <h1>{children}</h1>
    </Container>
  );
}

export default PhoneHeader;