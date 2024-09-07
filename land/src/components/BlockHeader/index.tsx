const BlockHeader = ({ title, mainText, subMainText }) => {
  return (
    <div className="aboutUs__header">
      <div className="aboutUs__header--title">
        <p className="title">{title}с</p>
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
