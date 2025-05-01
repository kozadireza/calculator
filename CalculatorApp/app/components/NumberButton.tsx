import { StyleSheet, Text, TouchableOpacity } from "react-native";

type NumberButtonProps = {
  number: number;
  setCurrentNumber: React.Dispatch<React.SetStateAction<number | null>>;
  currentNumber: number | null;
};
export default function NumberButton({
  number,
  setCurrentNumber,
  currentNumber,
}: NumberButtonProps) {
  function handleNumber() {
    if (!currentNumber) {
      setCurrentNumber(number);
    } else {
      setCurrentNumber(null);
    }
  }
  return (
    <TouchableOpacity style={styles.main} onPress={handleNumber}>
      <Text style={styles.h1}>{number}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  main: {
    backgroundColor: "pink",
    alignItems: "center",
    margin: 5,
    justifyContent: "center",
    height: 90,
    width: 90,
    borderRadius: 90,
  },
  h1: {
    color: "white",
  },
});
