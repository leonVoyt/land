import { FC } from "react";
import "./styles.css";
interface MainButtonProps {
  text: string;
}
const MainButton: FC<MainButtonProps> = ({ text }) => {
  return <button className="mainButtonWhite">{text}</button>;
};
export default MainButton;
