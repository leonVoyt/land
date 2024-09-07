import "./styles.css";

const InfoBlock = ({ textMain, textSecond }) => {
  return (
    <div className="aboutUs__stats--info-block">
      <p className="textRed">{textMain}</p>
      <p className="textBlack">{textSecond}</p>
    </div>
  );
};
export default InfoBlock;
