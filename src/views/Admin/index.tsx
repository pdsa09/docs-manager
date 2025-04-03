import { useEffect, useState } from "react";
import { fetchFile } from "../../services/bitbucketService";
import * as S from "./styles";

const Admin = () => {
  const [file, setFile] = useState("");

  useEffect(() => {
    fetchFile("/adapters-native.md").then((data) => {
      setFile(data);
    });
  }, []);

  return <S.AdminContainer>{file}</S.AdminContainer>;
};

export default Admin;
