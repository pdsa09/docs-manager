export interface Document {
  path: string;
  content: string;
  localContent?: string;
  lastEdited?: Date;
  isModified: boolean;
}

export interface DocumentContextData {
  currentDocument: Document | null;
  loadDocument: (path: string) => Promise<void>;
  saveEditedLocals: (content: string) => void;
  editedDocuments: Document[];
  isLoading: boolean;
  error: string | null;
}
