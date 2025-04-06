import * as S from "./styles";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
interface MarkdownRendererProps {
  text: string;
}

const MarkdownRenderer = ({ text }: MarkdownRendererProps) => {
  return (
    <S.MarkdownRendererContainer>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{text}</ReactMarkdown>
    </S.MarkdownRendererContainer>
  );
};

export default MarkdownRenderer;
