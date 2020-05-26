import styled from "styled-components";

export const BlockHead = styled.p`
  font-size: 0.85rem;
  font-weight: 600;
`;

export const CardSubtitle = styled.div.attrs({ className: "card-subtitle" })`
  font-size: 14px;
  color: gray;
`;

export const Card = styled.div.attrs({ className: "card" })`
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const CardImg = styled.img.attrs({ className: "card-img" })`
  width: 200px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    `${props.reverse ? props.reverse : props.row ? "row" : "column"}`};
  justify-content: ${(props) => `${props.justifyContent || "center"}`};
  align-items: ${(props) => `${props.alignItems || "center"}`};
  @media (max-width: 768px) {
    flex-direction: ${(props) => `${props.smRow ? "row" : "column"}`};
    align-items: ${(props) => `${props.smAlignItems || "center"}`};
    justify-content: ${(props) => `${props.smJustifyContent || "center"}`};
  }
`;
