import styled from "styled-components";

export const EditorContainer = styled.div`
  height: 70vh;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const EditorHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ccc;
`;

export const Button = styled.button<{ $type?: "cancel" | "default" }>`
  background-color: ${(props) =>
    props.$type === "cancel" ? "#e53232" : "#0066cc"};
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
  font-weight: 600;
  display: flex;
  align-items: center;
  &:hover {
    background-color: ${(props) =>
      props.$type === "cancel" ? "#AD2727FF" : "#014588FF"};
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
`;
