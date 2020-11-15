import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiHelpCircle } from 'react-icons/fi';
import PhoneHeader from '../../components/PhoneHeader';

import { Container, Content, CardBlock, Card, Input, Span, TagsBlock, ButtonBlock, Button } from './styles';
import { useToast } from '../../hooks/toast';

const Tag: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<number>(1);
  const [selectedTag, setSelectedTag] = useState<number>(1);
  const [value, setValue] = useState<number>();

  const history = useHistory();
  const { addToast } = useToast();

  function handleSubmit() {
    const data = new FormData();

    data.append('value', String(value));
    data.append('tag_type', String(selectedCard)); // Entrada ou Saída
    data.append('tag', String(selectedTag));

    // ENVIAR PARA O SERVER
    addToast({
      title: "transação categorizada!",
      type: "success"
    });
    history.push('/dashboard/tag');
  }

  function handleCancel() {
    history.push('/dashboard/t');
  }

  function handleSelectTag(tag: number) {
    setSelectedTag(tag);
  }

  function handleSelectCard(card: number) {
    setSelectedCard(card);
  }

  return (
    <Container>
      <PhoneHeader
        color="#306292"
        background="#fcfcfe"
      >
        <h1>Categorização</h1>
      </PhoneHeader>

      <Content >
        <span>Como você deseja<br />categorizar esta transação?</span>

        <CardBlock>
          <Card
            className={selectedCard === 1 ? 'selected-card' : ''}
            onClick={() => handleSelectCard(1)
            }>
            <p>Entrada</p>
          </Card>
          <Card
            className={selectedCard === 2 ? 'selected-card' : ''}
            onClick={() => handleSelectCard(2)}
          >
            <p>Saída</p>
          </Card>
        </CardBlock>

        <span>Valor da transação:</span>
        <Input
          type="number"
          placeholder="R$ 2.500,00"
          value={value}
          onChange={event => setValue(Number(event.target.value))}
        />

        <Span>
          Tags:
          <FiHelpCircle className="help-image" size={22} color="#B6B6B6" />
        </Span>

        <TagsBlock>
          <div
            className={selectedTag === 1 ? 'tag-selected' : ''}
            onClick={() => handleSelectTag(1)}
          >
            Aporte
          </div>
          <div
            className={selectedTag === 2 ? 'tag-selected' : ''}
            onClick={() => handleSelectTag(2)}
          >
            Custo fixo
          </div>
          <div
            className={selectedTag === 3 ? 'tag-selected' : ''}
            onClick={() => handleSelectTag(3)}
          >
            Custo variável
          </div>
          <div
            className={selectedTag === 4 ? 'tag-selected' : ''}
            onClick={() => handleSelectTag(4)}
          >
            Receita bruta
          </div>
          <div
            className={selectedTag === 5 ? 'tag-selected' : ''}
            onClick={() => handleSelectTag(5)}
          >
            Receita líquida
          </div>
        </TagsBlock>

        <ButtonBlock>
          <Button onClick={handleCancel} background="#FA6D6C">Cancelar</Button>
          <Button onClick={handleSubmit} background="#306292">Confirmar</Button>
        </ButtonBlock>
      </Content>
    </Container>
  );
}

export default Tag;