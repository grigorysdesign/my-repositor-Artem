import Heading from "./Components/Heading";
import General from "./Components/General/General";
import Addresses from "./Components/Addresses/Addresses";
function AboutCompany() {
  return (
    <div class="container px-5">
      <Heading /> {/* Заголовок и кнопка справа */}
      <div className="d-flex gap-2 mt-5">
        <div className="col-6">
          <General />{" "}
          {/* Основная информация вроде названия, типа и телефона */}
        </div>
        <Addresses /> {/* Список доступных адресов заведений */}
      </div>
    </div>
  );
}

export default AboutCompany;
