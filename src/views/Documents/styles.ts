import styled from "styled-components";

export const Container = styled.div`
  margin-left: 250px;
  padding: 20px;
  min-height: 100vh;
  width: calc(100% - 250px);
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
  margin-top: 0;
  position: sticky;
  background-color: white;
`;

export const StatusBadge = styled.span<{ modified: boolean }>`
  background-color: ${(props) => (props.modified ? "#f0ad4e" : "#5cb85c")};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 18px;
  color: white;
`;

export const Button = styled.button`
  background-color: #0066cc;
  color: white;
  border: none;
  padding: 10px;
  height: 40px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #0055aa;
  }
`;

export const MarkdownContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

export const ButtonsEditor = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
