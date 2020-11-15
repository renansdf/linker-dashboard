import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 8px 16px;
  margin: 16px 0;

  color: #fff;
  font-size: 18px;
  font-weight: 600;

  background: #FA6D6C;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 15px;

  span {
    text-transform: capitalize;
  }
`;