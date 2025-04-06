import * as S from "./styles";
import ReactDiffViewer from "react-diff-viewer-continued";
import { format } from "date-fns";

interface DiffViewerProps {
  originalContent: string;
  modifiedContent: string;
  fileName: string;
  lastEdited?: Date;
}

const DiffViewer = ({
  originalContent,
  modifiedContent,
  fileName,
  lastEdited,
}: DiffViewerProps) => {
  return (
    <S.DiffViewerContainer>
      <S.DiffViewerHeader>
        <h2>Mudanças do arquivo: {fileName}</h2>
        {lastEdited && (
          <p>Última edição: {format(lastEdited, "dd/MM/yyyy HH:mm")}</p>
        )}
      </S.DiffViewerHeader>
      <ReactDiffViewer
        oldValue={originalContent}
        newValue={modifiedContent}
        splitView={false}
        disableWordDiff={false}
      />
    </S.DiffViewerContainer>
  );
};

export default DiffViewer;
