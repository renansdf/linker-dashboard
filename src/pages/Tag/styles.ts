import styled from 'styled-components';

interface IButtonProps {
  background: string;
}

export const Container = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;

  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
  }
`;

export const Content = styled.div`
  padding: 0 28px;
`;

export const CardBlock = styled.div`
  width: 100%;
  height: 86px;
  margin-top: 18px;
  margin-bottom: 29px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .selected-card {
    border: 3px solid #FA6D6C;
  }
`;

export const Card = styled.div`
  width: 145px;
  height: 86px;
  padding: 8px 13px;

  background: #FFFFFF;
  box-sizing: border-box;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  cursor: pointer;

  display: flex;
  align-items: flex-end;
  justify-content: right;

  p {
    color: #306292;
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
  }
`;

export const Input = styled.input`
  width: 318px;
  height: 49px;
  margin-top: 15px;
  padding: 15px 13px;

  font-weight: 500;
  font-size: 18px;
  line-height: 22px;


  background: #FFFFFF;
  border: 1px solid #ACACAC;
  box-sizing: border-box;
  border-radius: 8px;

  -webkit-appearance: none;
`;

export const Span = styled.span`
  margin-top: 15px;
  display: flex;
  align-items: center;

  .help-image {
    margin-right: 5px;
  }
`;

export const TagsBlock = styled.div`
  margin-top: 21px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;

  div {
    height: 44px;

    font-weight: 700;
    font-size: 16px;
    line-height: 20px;

    color: #306292;

    background: #FFFFFF;
    border: 3px solid #386896;
    box-sizing: border-box;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .tag-selected {
    border-color: #FA6D6C;
  }
`;

export const ButtonBlock = styled.div`
  margin-top: 60px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.button<IButtonProps>`
  height: 50px;
  width: 150px;
  border-radius: 15px;
  border: 0;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);
  outline: 0;

  background-color: ${props => props.background};
  transition: opacity 0.2s;

  font-size: 18px;
  font-weight: 700;
  color: #FFF;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.9;
  }
`;