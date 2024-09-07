import { FC } from "react";
import "./styles.css";
interface InfoBlock {
  textMain: string;
  textSecond: string;
}
const InfoBlock: FC<InfoBlock> = ({ textMain, textSecond }) => {
  return (
    <div className="aboutUs__stats--info-block">
      <p className="textRed">{textMain}</p>
      <p className="textBlack">{textSecond}</p>
    </div>
  );
};
export default InfoBlock;
