import React from "react";
import styled from "styled-components";
const Container = styled.div`
  position: relative;
  padding: 30px 0px;
`;

const Border = styled.div`
  width: 100%;
  top: 1.5rem;
  z-index: -1;
  border-bottom: 1px solid rgb(210, 210, 210);
`;

const Label = styled.div`
  position: absolute;
  padding: 1rem;
  margin-left: 1rem;
  top: 0.5rem;
`;

export default function BorderLabel({ label = "Border Label" }) {
  return (
    <Container>
      <Border />
      {label.trim().length !== 0 && (
        <Label className="badge badge-pill badge-primary">{label}</Label>
      )}
    </Container>
  );
}
