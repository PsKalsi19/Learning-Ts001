import { FC } from "react";

type HeaderProps = {
  title: string;
};
const Header: FC<HeaderProps> = ({ title }) => <h1>{title}</h1>;

export default Header;
