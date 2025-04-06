import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as S from "./styles";
import TextEditor from "../../components/TextEditor";
import MarkdownRenderer from "../../components/MarkdownRenderer";
import { useDocumentContext } from "../../contexts/DocumentsContext";
import { formatFileName } from "../../utils/utils";
import { FaEdit, FaEraser, FaPencilAlt, FaSyncAlt } from "react-icons/fa";
import { Loading } from "../../components/Loading";
import NotFound from "../NotFound";

const DocumentView: React.FC = () => {
  const { "*": path } = useParams<{ "*": string }>();
  const { currentDocument, loadDocument, saveEditedLocals, isLoading, error } =
    useDocumentContext();
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState("");

  useEffect(() => {
    const docPath = path || "homepage.md";
    loadDocument(docPath);
  }, [path]);

  useEffect(() => {
    if (currentDocument) {
      setEditContent(currentDocument.localContent || currentDocument.content);
    }
  }, [currentDocument]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    if (currentDocument) {
      saveEditedLocals(editContent);
      setIsEditing(false);
    }
  };

  const handleCancelClick = () => {
    if (currentDocument) {
      setEditContent(currentDocument.localContent || currentDocument.content);
    }
    setIsEditing(false);
  };

  if (isLoading) {
    return (
      <S.Container>
        <Loading size="xl" />
      </S.Container>
    );
  }

  if (error) {
    return (
      <S.Container>
        <NotFound />
      </S.Container>
    );
  }

  if (!currentDocument) {
    return <S.Container>No document found</S.Container>;
  }

  return (
    <S.Container>
      <S.Header>
        {!isEditing && (
          <S.Button onClick={handleEditClick}>
            <FaEdit style={{ marginRight: "5px", marginBottom: "2px" }} />{" "}
            Editar
          </S.Button>
        )}
        {currentDocument.isModified && !isEditing && (
          <S.Button
            onClick={() => {
              if (currentDocument) {
                saveEditedLocals("");
              }
            }}
          >
            <FaEraser style={{ marginRight: "5px", marginBottom: "2px" }} />
            Limpar
          </S.Button>
        )}
      </S.Header>

      {isEditing ? (
        <TextEditor
          content={editContent}
          onChange={setEditContent}
          onSave={handleSaveClick}
          onCancel={handleCancelClick}
          fileName={formatFileName(currentDocument.path)}
        />
      ) : (
        <S.MarkdownContainer>
          <MarkdownRenderer
            text={currentDocument.localContent || currentDocument.content}
          />
          <S.ButtonsEditor>
            <S.StatusBadge
              modified={currentDocument.isModified}
              title={
                currentDocument.isModified
                  ? "Documento Modificado"
                  : "Documento Sincronizado"
              }
            >
              {currentDocument.isModified ? (
                <>
                  <FaPencilAlt />
                </>
              ) : (
                <>
                  <FaSyncAlt />
                </>
              )}
            </S.StatusBadge>
          </S.ButtonsEditor>
        </S.MarkdownContainer>
      )}
    </S.Container>
  );
};

export default DocumentView;
