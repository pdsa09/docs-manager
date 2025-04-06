import styled from "styled-components";

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const Spinner = styled.div<{
  size?: string;
  color?: string;
  thickness?: string;
}>`
  border: ${(props) => props.thickness || "4px"} solid rgba(0, 0, 0, 0.1);
  border-top: ${(props) => props.thickness || "4px"} solid
    ${(props) => props.color || "#3498db"};
  border-radius: 50%;
  width: ${(props) => getSizeValue(props.size)};
  height: ${(props) => getSizeValue(props.size)};
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

function getSizeValue(size = "md") {
  const sizes = {
    xs: "16px",
    sm: "24px",
    md: "32px",
    lg: "48px",
    xl: "64px",
  };
  const sizeKey = size as keyof typeof sizes;
  return sizes[sizeKey] || sizes.md;
}

interface LoadingProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  color?: string;
  thickness?: string;
}

export function Loading({
  size = "md",
  color = "#3498db",
  thickness = "4px",
}: LoadingProps) {
  return (
    <LoadingContainer>
      <Spinner size={size} color={color} thickness={thickness} />
    </LoadingContainer>
  );
}
