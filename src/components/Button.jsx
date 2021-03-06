import React from "react";
import styled from "styled-components";
import {
  border,
  color,
  space,
  typography,
  layout,
  flexbox,
} from "styled-system";

const StyledButton = styled.a`
  line-height: 1.5;
  text-decoration: none;
  display: inline-block;
  color: ${(props) => props.theme.colors.text};
  background-color: transparent;
  border-style: solid;
  border-radius: 0.25rem;
  user-select: none;
  padding: 0.375rem 0.75rem;
  transition: all 0.15s ease-in-out;
  cursor: pointer;

  ${({ inverted, ...props }) =>
    inverted &&
    `
    color: ${props.theme.colors.background};
    background-color: ${props.theme.colors.text};
  `};

  &:hover {
    color: ${(props) => props.theme.colors.background};
    background-color: ${(props) => props.theme.colors.text};
  };

  &:focus {
    outline: none;
  };

  ${color}
  ${typography}
  ${border}
  ${layout}
  ${space}
  ${flexbox}
`;

export function Button({ href, submit, children, ...props }) {
  return (
    <StyledButton as={submit ? "button" : ""} href={href} {...props}>
      {children}
    </StyledButton>
  );
}

Button.defaultProps = {
  fontFamily: "button",
  fontSize: "1rem",
  fontWeight: "500",
  marginX: "0",
  marginY: "0",
  borderWidth: "1px",
  borderColor: "text",
  color: "text",
};

export default Button;
