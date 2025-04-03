import { api } from "../infra/api";

export const fetchFile = async (path: string): Promise<string> => {
  try {
    const response = await api.get(`/docs/${path}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching file:", error);
    throw error;
  }
};

export const fetchDirectory = async (path: string): Promise<string[]> => {
  try {
    const response = await api.get(`/docs/${path}`);
    return response.data.values.map((item: { path: string }) => item.path);
  } catch (error) {
    console.error("Error fetching directory:", error);
    throw error;
  }
};
