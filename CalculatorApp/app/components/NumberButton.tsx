import { StyleSheet, Text, TouchableOpacity } from "react-native";

type NumberButtonProps = {
  number: string;
  setOnMainScreen: React.Dispatch<React.SetStateAction<any | null>>;
  onMainScreen: string;
  setCountingLine: React.Dispatch<React.SetStateAction<any | null>>;
};
export default function NumberButton({
  number,
  setOnMainScreen,
  onMainScreen,
  setCountingLine,
}: NumberButtonProps) {
  function handleNumber() {
    const lastNumber = onMainScreen.slice(onMainScreen.search(/\d*$/));
    switch (number) {
      case "×":
        if (lastNumber) {
          setCountingLine((prev: string) => (prev ?? "") + "*");
          setOnMainScreen((prev: string) => (prev ?? "") + "×");
          break;
        }
      case "÷":
        if (lastNumber) {
          setCountingLine((prev: string) => (prev ?? "") + "/");
          setOnMainScreen((prev: string) => (prev ?? "") + "÷");
          break;
        }
      case "+":
        if (lastNumber) {
          setCountingLine((prev: string) => (prev ?? "") + "+");
          setOnMainScreen((prev: string) => (prev ?? "") + "+");
          break;
        }
      case "-":
        if (lastNumber) {
          setCountingLine((prev: string) => (prev ?? "") + "-");
          setOnMainScreen((prev: string) => (prev ?? "") + "-");
          break;
        }
      case "+/-":
        if (lastNumber) {
          setCountingLine(
            (prev: string) =>
              (prev.slice(0, prev.length - lastNumber.length) ?? "") +
              `(-${lastNumber})`
          );
          setOnMainScreen(
            (prev: string) =>
              (prev.slice(0, prev.length - lastNumber.length) ?? "") +
              `(-${lastNumber})`
          );
        }
        break;
      default:
        setCountingLine((prev: string) => (prev ?? "") + number);
        setOnMainScreen((prev: string) => (prev ?? "") + number);
    }
  }
  return number === "×" ||
    number === "÷" ||
    number === "+" ||
    number === "-" ? (
    <TouchableOpacity style={styles.operationsButton} onPress={handleNumber}>
      <Text style={styles.h1}>{number}</Text>
    </TouchableOpacity>
  ) : number === "%" || number === "+/-" ? (
    <TouchableOpacity style={styles.functionalButtons} onPress={handleNumber}>
      <Text style={styles.h1}>{number}</Text>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity style={styles.main} onPress={handleNumber}>
      <Text style={styles.h1}>{number}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  main: {
    backgroundColor: "#2B292C",
    alignItems: "center",
    margin: 1,
    justifyContent: "center",
    height: 87,
    width: 87,
    borderRadius: 90,
  },
  h1: {
    fontFamily: "mainFont",
    color: "white",
    fontSize: 58,
  },
  operationsButton: {
    backgroundColor: "#FF9F0A",
    alignItems: "center",
    margin: 1,
    justifyContent: "center",
    height: 87,
    width: 87,
    borderRadius: 90,
  },
  functionalButtons: {
    backgroundColor: "#5C5C60",
    alignItems: "center",
    margin: 1,
    justifyContent: "center",
    height: 87,
    width: 87,
    borderRadius: 90,
  },
});
