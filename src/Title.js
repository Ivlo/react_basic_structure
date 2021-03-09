import React from "react";
import { TitleStyled } from "./TitleStyled";

const Title = ({ children, size }) => <TitleStyled size={size}>{children}</TitleStyled>;
export default Title;
