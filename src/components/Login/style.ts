import styled from 'styled-components/macro';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
`;

export const LoginCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 40px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: transparent;
  border: none;
  font-size: 32px;
  line-height: 1;
  color: #999;
  cursor: pointer;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s;

  &:hover {
    color: #1b1a20;
  }
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  color: #1b1a20;
  margin: 0 0 8px 0;
  text-align: center;
`;

export const Subtitle = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0 0 32px 0;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #1b1a20;
`;

export const Input = styled.input`
  padding: 12px 16px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #667eea;
  }

  &::placeholder {
    color: #999;
  }
`;

export const SubmitButton = styled.button`
  padding: 14px 24px;
  background: #1b1a20;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  margin-top: 8px;

  &:hover {
    background: #2a2930;
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const Hint = styled.p`
  font-size: 12px;
  color: #999;
  text-align: center;
  margin: 8px 0 0 0;
  font-style: italic;
`;

