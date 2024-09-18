import styles from "./Buttons.module.css";
const Buttons = ({buttonClick}) => {
  
  const buttons = [
    "AC",
    "DEL",
    "%",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    "00",
    ".",
    "=",
  ];
  return (
    <div className={styles.buttons}>
      {buttons.map(button => <button className="mt-4 mx-2" onClick={buttonClick}>{button}</button>)}
    </div>
  );
};

export default Buttons;
