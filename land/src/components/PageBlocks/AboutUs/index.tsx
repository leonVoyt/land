import { manPicture } from "../../../assets/images";
import BlockHeader from "../../BlockHeader";
import InfoBlock from "./components/InfoBlock";
import StatsLogo from "./components/StatsLogo";
import "./styles.css";

const AboutUs = () => {
  return (
    <section id="about">
      <BlockHeader
        mainText={
          "Індивідуальний підхід та гнучкість для створення цифрових рішень"
        }
        subMainText={
          "Наша команда працює над тим, щоб кожне рішення було максимально адаптивним, інтуїтивним і орієнтованим на вашого кінцевого користувача."
        }
        title={"Про нас"}
      />

      <div className="aboutUs__stats">
        <div className="aboutUs__stats-left">
          <StatsLogo />
          <div className="aboutUs__stats--info">
            <InfoBlock textMain={"1250+"} textSecond={"виконаних проектів"} />
            <InfoBlock textMain={"1250+"} textSecond={"виконаних проектів"} />
            <InfoBlock textMain={"1250+"} textSecond={"виконаних проектів"} />
            <InfoBlock textMain={"1250+"} textSecond={"виконаних проектів"} />
          </div>
        </div>

        <div className="aboutUs__stats-right">
          <img src={manPicture} alt="manPicture" />
        </div>
      </div>
    </section>
  );
};
export default AboutUs;
