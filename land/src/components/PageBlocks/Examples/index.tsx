import BlockHeader from "../../BlockHeader";
import Slider from "./components/ReactCarusel";
import "./styles.css";
const Examples = () => {
  return (
    <section className="Examples__container">
      <BlockHeader
        mainText={"Реалізовані ідеї наших клієнтів"}
        subMainText={
          "Мрія створювати індивідуальні рішення, надаючи можливість реалізувати потенціал у цифровому світі, втілилась в наших кейсах. Ми віримо, що кожен бізнес унікальний, і допомагаємо розкрити це через вебсайти та онлайн-платформи."
        }
        title={"кейси"}
      />

      <Slider />
    </section>
  );
};
export default Examples;
