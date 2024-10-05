import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({ onButtonClick }) => {
  const buttonNames = [
    "AC", // Clear All
    "DEL", // Delete (new)
    "1",
    "2",
    "+",
    "3",
    "4",
    "5",
    "-",
    "6",
    "7",
    "8",
    "*",
    "/",
    "=",
    "9",
    "0",
    ".",
    "%", // Percentage (new)
    "x²", // Square (new)
    "√", // Square Root (new)
  ];

  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map((buttonName, index) => (
        <button
          key={index}
          className={styles.button}
          onClick={() => onButtonClick(buttonName)}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
