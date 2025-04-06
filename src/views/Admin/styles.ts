import styled from "styled-components";

export const AdminContainer = styled.div`
  margin-left: 250px;
  padding: 20px;
`;

export const Title = styled.p`
  margin-bottom: 20px;
  font-size: 25px;
  font-weight: 600;
  margin: 0;
`;

export const EditedFilesList = styled.div`
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
`;

export const FileItem = styled.div<{ selected: boolean }>`
  padding: 15px;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? "#f0f7ff" : "white")};

  &:hover {
    background-color: ${(props) => (props.selected ? "#f0f7ff" : "#f5f5f5")};
  }
`;

export const FileTitle = styled.p`
  margin: 0 0 5px 0;
  font-weight: 500;
`;

export const FileDate = styled.p`
  margin: 0;
  color: #6767;
  font-size: 14px;
`;

export const EmptyState = styled.div`
  color: #414653ff;
  margin-left: 18px;
`;

export const DiffContainer = styled.div`
  width: 100%;
`;

export const FileDemoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 22px;
`;

export const ImageContainer = styled.div`
  padding-inline: 200px;
  margin-top: 50px;
`;

export const ShowMoreButton = styled.div`
  display: flex;
  justify-content: end;
  padding: 15px;
  cursor: pointer;
  color: #57729dff;
  &:hover {
    color: #364763ff;
  }
`;
