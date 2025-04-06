/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import { DocumentContextData, Document } from "./types";
import { fetchFile } from "../services/bitbucketService";

const DocumentsContext = createContext<DocumentContextData>(
  {} as DocumentContextData
);

export const DocumentsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentDocument, setCurrentDocument] = useState<Document | null>(null);
  const [editedDocuments, setEditedDocuments] = useState<Document[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const storedDocuments = localStorage.getItem("editedDocuments");
    if (storedDocuments) {
      const parsedDocs = JSON.parse(storedDocuments);
      const docsDates = parsedDocs.map((doc: { lastEdited: string }) => ({
        ...doc,
        lastEdited: doc.lastEdited ? new Date(doc.lastEdited) : undefined,
      }));
      setEditedDocuments(docsDates);
    }
  }, []);

  const loadDocument = async (path: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const content = await fetchFile(path);
      const editedDoc = editedDocuments.find((doc) => doc.path === path);
      setCurrentDocument({
        path,
        content,
        localContent: editedDoc?.localContent,
        lastEdited: editedDoc?.lastEdited,
        isModified: !!editedDoc?.localContent,
      });
    } catch (error: unknown) {
      setError("Failed to load document");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const saveEditedLocals = async (content: string) => {
    if (!currentDocument) return;

    const now = new Date();
    const updatedDoc = {
      ...currentDocument,
      localContent: content,
      lastEdited: now,
      isModified: true,
    };

    setCurrentDocument(updatedDoc);
    const updatedDocs = editedDocuments.some(
      (doc) => doc.path === currentDocument.path
    )
      ? editedDocuments.map((doc) =>
          doc.path === currentDocument.path ? updatedDoc : doc
        )
      : [...editedDocuments, updatedDoc];

    setEditedDocuments(updatedDocs);
    localStorage.setItem("editedDocuments", JSON.stringify(updatedDocs));
  };

  return (
    <DocumentsContext.Provider
      value={{
        currentDocument,
        loadDocument,
        saveEditedLocals,
        editedDocuments,
        isLoading,
        error,
      }}
    >
      {children}
    </DocumentsContext.Provider>
  );
};

export const useDocumentContext = () => useContext(DocumentsContext);
