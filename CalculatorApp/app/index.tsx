import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import NumberButton from "./components/NumberButton";
import { useState } from "react";
import { plus } from "../utils/mathFunctions";

export default function Index() {
  const numbersRow1: number[] = [1, 2, 3];
  const numbersRow2: number[] = [4, 5, 6];
  const numbersRow3: number[] = [7, 8, 9];
  const numbersRow4: any[] = ["#", 0, "."];
  const [currentNumber, setCurrentNumber] = useState<any>();
  const [firstNumber, setFirstNumber] = useState<number | null>();
  const [mathSign, setMathSign] = useState<any>();
  const [currentResult, setCurrentResult] = useState<number>();
  const [result, setResult] = useState<number | null>();
  console.log(currentNumber, "<<<<<current number");
  console.log(firstNumber, "<<<<<first number");
  if (mathSign === "+" && firstNumber && currentNumber) {
    setCurrentResult(plus(firstNumber, currentNumber));
  }
  return (
    <View style={styles.main}>
      <View style={styles.answerScreen}>
        <Text style={styles.h1}>{result}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonsRow}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setCurrentNumber(null);
              setResult(null);
            }}
          >
            <Text style={styles.h1}>AC</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            {/* not done >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
            <Text style={styles.h1}>+/-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            {/* not done >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
            <Text style={styles.h1}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setMathSign("÷");
            }}
          >
            <Text style={styles.h1}>÷</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonsRow}>
          {numbersRow1.map((number: number) => (
            <NumberButton
              key={number}
              number={number}
              setCurrentNumber={setCurrentNumber}
              currentNumber={currentNumber}
            />
          ))}
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setMathSign("x");
            }}
          >
            <Text style={styles.h1}>x</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonsRow}>
          {numbersRow2.map((number: number) => (
            <NumberButton
              key={number}
              number={number}
              setCurrentNumber={setCurrentNumber}
              currentNumber={currentNumber}
            />
          ))}
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setMathSign("-");
            }}
          >
            <Text style={styles.h1}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonsRow}>
          {numbersRow3.map((number: number) => (
            <NumberButton
              key={number}
              number={number}
              setCurrentNumber={setCurrentNumber}
              currentNumber={currentNumber}
            />
          ))}
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setMathSign("+");
              setFirstNumber(currentNumber);
              setCurrentNumber(null);
            }}
          >
            <Text style={styles.h1}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonsRow}>
          {numbersRow4.map((number: number) => (
            <NumberButton
              key={number}
              number={number}
              setCurrentNumber={setCurrentNumber}
              currentNumber={currentNumber}
            />
          ))}
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setResult(currentResult);
            }}
          >
            <Text style={styles.h1}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "black",
    height: "100%",
    alignItems: "center",
  },
  h1: {
    color: "white",
  },
  answerScreen: {
    margin: "3%",
    borderColor: "orange",
    height: "10%",
    zIndex: 1,
    borderWidth: 3,
    width: "80%",
  },
  buttonsContainer: {
    width: "100%",
    borderColor: "orange",
    height: "80%",
    borderWidth: 3,
  },
  buttonsRow: {
    // borderColor: "orange",
    height: "20%",
    // zIndex: 1,
    // borderWidth: 3,
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    backgroundColor: "grey",
    alignItems: "center",
    margin: 5,
    justifyContent: "center",
    height: 90,
    width: 90,
    borderRadius: 90,
  },
});
