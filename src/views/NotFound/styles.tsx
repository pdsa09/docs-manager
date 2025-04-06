import styled from "styled-components";
import { Link } from "react-router-dom";

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  color: #666;
  margin-bottom: 1.5rem;
`;

export const HomeLink = styled(Link)`
  padding: 0.5rem 1rem;
  background-color: #0066cc;
  color: white;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0052a3;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 2rem;
  max-height: 300px;
`;
