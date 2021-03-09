import styled from "styled-components";
import media from "./styles/media";

// eslint-disable-next-line import/prefer-default-export
export const TitleStyled = styled.h1`
  margin-top: ${(props) => props.theme.spacing.medium};
  font-size: ${(props) => props.theme.font.size.large};
  border: 1px solid ${(props) => props.theme.colors.primary};
  @media only screen and ${media.device.medium} {
    border: 1px solid ${(props) => props.theme.colors.white};
  }
`;
