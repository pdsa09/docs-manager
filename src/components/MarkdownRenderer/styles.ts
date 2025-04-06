import styled from "styled-components";

export const MarkdownRendererContainer = styled.div`
  padding: 20px;
  line-height: 1.6;

  h1 {
    font-size: 2em;
    margin-bottom: 1em;
  }

  h2 {
    font-size: 1.5em;
    margin-top: 1.5em;
    margin-bottom: 0.8em;
  }

  p {
    margin-bottom: 1em;
  }

  code {
    background-color: #f0f0f0;
    padding: 2px 4px;
    border-radius: 3px;
  }

  pre {
    background-color: #f5f5f5;
    padding: 15px;
    border-radius: 5px;
  }

  blockquote {
    border-left: 4px solid #ddd;
    padding-left: 15px;
    color: #6767;
  }

  ul,
  ol {
    margin-bottom: 1em;
    padding-left: 2em;
  }

  table {
    border-collapse: collapse;
    width: 100%;
    margin-bottom: 1em;
  }

  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
  }

  th {
    background-color: #f2f2f2;
  }
`;
