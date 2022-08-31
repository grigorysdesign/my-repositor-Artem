import Clickable from "./Clickable";
import styled from "styled-components";

function SecondaryButton(props) {
  // Здесь устанавливается минимальная ширина для кнопки
  let minWidth = props.minWidth === undefined ? "217px" : props.minWidth;
  const Button = styled.div`
    border-radius: 24px;
    border: 1px solid #64748b;
    box-shadow: inset 0px 1px 2px rgba(10, 15, 26, 0.08);
    min-width: ${minWidth};
    color: #64748b;
    &:hover {
      border: 0px;
    }
    &:active {
      background: #dfdfdf;
    }
  `;
  return (
    <Clickable>
      <Button className="p-2 text-md">{props.children}</Button>
    </Clickable>
  );
}

export default SecondaryButton;
