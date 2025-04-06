import React, { useState } from "react";
import { format } from "date-fns";
import { useDocumentContext } from "../../contexts/DocumentsContext";
import * as S from "./styles";
import DiffViewer from "../../components/DiffViewer";
import { FcDocument } from "react-icons/fc";

const AdminView: React.FC = () => {
  const { editedDocuments } = useDocumentContext();
  const [selectedDoc, setSelectedDoc] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const sortedDocuments = [...editedDocuments].sort((a, b) => {
    const dateA = a.lastEdited ? new Date(a.lastEdited).getTime() : 0;
    const dateB = b.lastEdited ? new Date(b.lastEdited).getTime() : 0;
    return dateB - dateA;
  });

  const selectedDocument = editedDocuments.find(
    (doc) => doc.path === selectedDoc
  );

  return (
    <S.AdminContainer>
      <S.Title>Documentos Modificados</S.Title>
      {sortedDocuments.length === 0 ? (
        <S.EmptyState>
          <p>Nenhum documento foi alterado.</p>
        </S.EmptyState>
      ) : (
        <>
          <S.FileDemoContainer>
            <S.EditedFilesList>
              {sortedDocuments
                .slice(0, showAll ? sortedDocuments.length : 4)
                .map((doc) => (
                  <S.FileItem
                    key={doc.path}
                    selected={selectedDoc === doc.path}
                    onClick={() => setSelectedDoc(doc.path)}
                  >
                    <S.FileTitle>{doc.path}</S.FileTitle>
                    {doc.lastEdited && (
                      <S.FileDate>
                        Edited: {format(new Date(doc.lastEdited), "PPpp")}
                      </S.FileDate>
                    )}
                  </S.FileItem>
                ))}
              {sortedDocuments.length >= 3 && !showAll && (
                <S.ShowMoreButton onClick={() => setShowAll(true)}>
                  Ver mais
                </S.ShowMoreButton>
              )}
            </S.EditedFilesList>
            <S.EmptyState>
              <h2>Selecione um arquivo</h2>
              <p>
                Escolha um arquivo modificado no painel à esquerda para
                verificar as alterações realizadas localmente. Para remover as
                alterações, clique em "Limpar" no ambiente de edição do
                documento.
              </p>
              <S.ImageContainer>
                <FcDocument size={200} />
              </S.ImageContainer>
            </S.EmptyState>
          </S.FileDemoContainer>
          <S.DiffContainer>
            {selectedDocument && (
              <DiffViewer
                originalContent={selectedDocument.content}
                modifiedContent={selectedDocument.localContent || ""}
                fileName={selectedDocument.path}
                lastEdited={selectedDocument.lastEdited}
              />
            )}
          </S.DiffContainer>
        </>
      )}
    </S.AdminContainer>
  );
};

export default AdminView;
