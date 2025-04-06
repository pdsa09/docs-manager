import * as S from "./styles";
import { Editor } from "@monaco-editor/react";
import { FaSave, FaTimes } from "react-icons/fa";

interface MarkdownEditorProps {
  content: string;
  onChange: (value: string) => void;
  onSave: () => void;
  onCancel: () => void;
  fileName: string;
}

const TextEditor = ({
  content,
  onChange,
  onSave,
  onCancel,
  fileName,
}: MarkdownEditorProps) => {
  return (
    <>
      <S.EditorHeader>
        <h3>Editando: {fileName}</h3>
        <S.ButtonDiv>
          <S.Button onClick={onSave}>
            <FaSave style={{ marginRight: "8px" }} />
            Salvar Localmente
          </S.Button>
          <S.Button onClick={onCancel} $type="cancel">
            <FaTimes style={{ marginRight: "8px" }} />
            Cancelar
          </S.Button>
        </S.ButtonDiv>
      </S.EditorHeader>
      <S.EditorContainer>
        <Editor
          height="100%"
          defaultLanguage="markdown"
          defaultValue={content}
          onChange={(value) => onChange(value || "")}
          options={{
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            wordWrap: "on",
            lineNumbers: "on",
            fontSize: 14,
          }}
        />
      </S.EditorContainer>
    </>
  );
};

export default TextEditor;
