import "./styles.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__info">
        <div className="footer__info--block">
          <p className="logo">COMMIT</p>
          <p>Комітимо мрії в реальність</p>
        </div>
        <div className="footer__info--block-container">
          <div className="footer__info--block-second">
            <p className="title">Адреса</p>
            <p>Київ, Україна</p>
            <p>ТЦ Мармелад, вул. Борщагівська 154, офіс / блок 4-5</p>
          </div>
          <div className="footer__info--block-second">
            <p className="title">Телефони</p>
            <p>+38 098-001-39-39</p>
            <p>+38 098-001-39-39</p>
            <p>+38 098-001-39-39</p>
          </div>
          <div className="footer__info--block-second">
            <p className="title">Месенджери</p>
            <p>Email: gmail</p>
            <p>Telegram: sales</p>
            <p>Viber: sales</p>
          </div>
        </div>
      </div>
      <hr className="footer__hr" />
      <div className="footer__social--media">
        <span>Copyright © 2022 BRIX Templates | All Rights Reserved </span>
        <span>1</span>
      </div>
    </div>
  );
};
export default Footer;
