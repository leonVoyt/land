import { FC, MouseEvent } from "react";
import "./styles.css";

interface ModalProps {
  scrollToSection: (sectionId: string) => void;
  toggleModal: (e: MouseEvent<HTMLButtonElement>) => void;
  isModalOpen: boolean;
}

const Modal: FC<ModalProps> = ({
  scrollToSection,
  toggleModal,
  isModalOpen,
}) => {
  return (
    isModalOpen && (
      <div className="modal">
        <div className="modal__content" onClick={(e) => e.stopPropagation()}>
          <div className="modal__header-navigation sub--title">
            <div className="modal__logo--container">
              <button className="modal__close" onClick={toggleModal}>
                &times;
              </button>
              <div className="modal__logo">
                <span className=" logo">COMMIT</span>
              </div>
            </div>
            <div className="modal_navigation">
              <button
                className="btn-active"
                onClick={() => {
                  scrollToSection("#about");
                }}
              >
                Про нас
              </button>
              <button
                onClick={() => {
                  scrollToSection("#cases");
                }}
              >
                Кейси
              </button>
              <button
                onClick={() => {
                  scrollToSection("#contacts");
                }}
              >
                Контакти
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
export default Modal;
