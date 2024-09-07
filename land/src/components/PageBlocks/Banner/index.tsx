import MainButton from "../../UI/Buttons/MainButton";
import "./styles.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__header">
        <div className="banner__header-navigation sub--title">
          <button className="btn-active">Про нас</button>
          <button>Кейси</button>
          <button>Контакти</button>
        </div>
        <div className="banner__header-logo">
          <span className=" logo">COMMIT</span>
        </div>
        <div>
          <MainButton text="Зв’язатися з нами" />
        </div>
      </div>
      <div>
        <div className="banner__title">
          <strong className="title">Сайти, що втілюють ваші ідеї</strong>
        </div>
        <div className="banner__subTitle">
          <p className="">
            Ми спеціалізуємося на розробці, що поєднує передові технології та
            експертизи
          </p>
        </div>
      </div>
    </div>
  );
};
export default Banner;
