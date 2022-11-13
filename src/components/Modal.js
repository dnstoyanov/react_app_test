import { BsArrowRightSquareFill, BsArrowLeftSquareFill } from "react-icons/bs";

const Modal = ({
  clickedImg,
  setClickedImg,
  onRotationRightPress,
  onRotationLeftPress,
}) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("dismiss")) {
      setClickedImg(null);
    }
  };

  return (
    <>
      <div className="overlay dismiss" onClick={handleClick}>
        <img src={clickedImg} alt="bigger pic" />
        <div onClick={onRotationLeftPress} className="overlay-arrows_left">
          <div>
            <BsArrowLeftSquareFill />
          </div>
        </div>
        <div onClick={onRotationRightPress} className="overlay-arrows_right">
          <div>
            <BsArrowRightSquareFill />
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
