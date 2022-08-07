import style from './PlaceButton.module.css';

const PlaceButton = ({ text, icon: Icon, pressed, onClick, ...props }) => {
  return (
    <button
      className={style.button}
      aria-pressed={pressed === text}
      onClick={() => {
        onClick(text);
      }}
      {...props}
    >
      <Icon width='1.5rem' />
      <span>{text}</span>
    </button>
  );
};

export default PlaceButton;
