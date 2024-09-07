import { FC } from "react";
import { chevron } from "../../assets/images";
import "./styles.css";

interface BlockHeader {
  title: string;
  subMainText: string;
  mainText: string;
}

const BlockHeader: FC<BlockHeader> = ({ title, mainText, subMainText }) => {
  return (
    <div className="aboutUs__header">
      <div className="aboutUs__header--title">
        <img src={chevron} alt="chevron" />
        <p className="title">{title}</p>
      </div>
      <div className="aboutUs__header--first">
        <p>{mainText}</p>
      </div>
      <div className="aboutUs__header--second">
        <p className="sub--title">{subMainText}</p>
      </div>
    </div>
  );
};
export default BlockHeader;
