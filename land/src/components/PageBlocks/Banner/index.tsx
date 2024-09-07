import { MouseEvent, useEffect, useState } from "react";
import MainButton from "../../UI/Buttons/MainButton";
import "./styles.css";
import Modal from "./components/Modal";

const Banner = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      handleClick();
    }
  };
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const toggleModal = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsModalOpen((prev) => !prev);
  };
  const handleClick = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
  return (
    <div className="banner">
      <div className="banner__header">
        <div className="banner__header-navigation sub--title">
          <button
            className="btn-active"
            onClick={() => scrollToSection("#about")}
          >
            Про нас
          </button>
          <button onClick={() => scrollToSection("#cases")}>Кейси</button>
          <button onClick={() => scrollToSection("#contacts")}>Контакти</button>
        </div>
        <button className="burger-icon" onClick={toggleModal}>
          ☰
        </button>
        <div className="banner__header-logo">
          <span className=" logo">COMMIT</span>
        </div>
        <div>
          <MainButton text="Зв’язатися з нами" />
        </div>
      </div>
      <div className="banner__text--container">
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
      <Modal
        scrollToSection={scrollToSection}
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
      />
    </div>
  );
};
export default Banner;
