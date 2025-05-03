import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NumberButton from "./components/NumberButton";
import { useEffect, useRef, useState } from "react";
import { evaluate } from "mathjs";
import { round } from "../utils/functions";

export default function Index() {
  const [countingLine, setCountingLine] = useState<string | "">("");
  const [onMainScreen, setOnMainScreen] = useState<string | "">("");
  const [onTopScreen, setOnTopScreen] = useState<string | null>(null);
  const [currentResult, setCurrentResult] = useState<number | null>(null);
  const scrollViewRef = useRef<ScrollView>(null);
  const topScrollRef = useRef<ScrollView>(null);

  const numbersRow0: string[] = ["+/-", "%", "÷"];
  const numbersRow1: string[] = ["1", "2", "3", "×"];
  const numbersRow2: string[] = ["4", "5", "6", "-"];
  const numbersRow3: string[] = ["7", "8", "9", "+"];
  const numbersRow4: string[] = ["#", "0", "."];

  function handleResult() {
    const result = round(evaluate(countingLine));
    setOnTopScreen(onMainScreen);
    setOnMainScreen(result.toString());
    setCountingLine(result.toString());
  }

  useEffect(() => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  }, [onMainScreen]);
  useEffect(() => {
    topScrollRef.current?.scrollToEnd({ animated: true });
  }, [onTopScreen]);
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.main}>
        <ScrollView
          horizontal={true}
          ref={topScrollRef}
          style={styles.answerScreen}
          contentContainerStyle={{
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "flex-end",
            paddingRight: 10,
          }}
        >
          <Text style={[styles.countingLineText, { minWidth: 1000 }]}>
            {onTopScreen && onTopScreen}
          </Text>
        </ScrollView>
        <ScrollView
          horizontal={true}
          ref={scrollViewRef}
          style={styles.answerScreen}
          contentContainerStyle={{
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "flex-end",
            paddingRight: 10,
          }}
        >
          <Text style={[styles.ScreenText, { minWidth: 1000 }]}>
            {!currentResult ? onMainScreen : currentResult}
          </Text>
        </ScrollView>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonsRow}>
            <TouchableOpacity
              style={styles.buttonAC}
              onPress={() => {
                setOnMainScreen("");
                setCurrentResult(null);
                setCountingLine("");
                setOnTopScreen(null);
              }}
            >
              <Text style={styles.h1}>AC</Text>
            </TouchableOpacity>
            {numbersRow0.map((number: string) => (
              <NumberButton
                key={number}
                number={number}
                setOnMainScreen={setOnMainScreen}
                onMainScreen={onMainScreen}
                setCountingLine={setCountingLine}
              />
            ))}
          </View>

          <View style={styles.buttonsRow}>
            {numbersRow1.map((number: string) => (
              <NumberButton
                key={number}
                number={number}
                setOnMainScreen={setOnMainScreen}
                onMainScreen={onMainScreen}
                setCountingLine={setCountingLine}
              />
            ))}
          </View>

          <View style={styles.buttonsRow}>
            {numbersRow2.map((number: string) => (
              <NumberButton
                key={number}
                number={number}
                setOnMainScreen={setOnMainScreen}
                onMainScreen={onMainScreen}
                setCountingLine={setCountingLine}
              />
            ))}
          </View>

          <View style={styles.buttonsRow}>
            {numbersRow3.map((number: string) => (
              <NumberButton
                key={number}
                number={number}
                setOnMainScreen={setOnMainScreen}
                onMainScreen={onMainScreen}
                setCountingLine={setCountingLine}
              />
            ))}
          </View>
          <View style={styles.buttonsRow}>
            {numbersRow4.map((number: string) => (
              <NumberButton
                key={number}
                number={number}
                setOnMainScreen={setOnMainScreen}
                onMainScreen={onMainScreen}
                setCountingLine={setCountingLine}
              />
            ))}
            <TouchableOpacity style={styles.buttonEqual} onPress={handleResult}>
              <Text style={styles.h1}>=</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "black",
  },
  main: {
    backgroundColor: "#000000",
    height: "95%",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
  },
  answerScreen: {
    height: "15%",
    minWidth: "100%",
  },
  countingLineText: {
    fontFamily: "mainFont",
    fontSize: 46,
    color: "grey",
    flexShrink: 0,
    textAlign: "right",
  },
  ScreenText: {
    fontFamily: "mainFont",
    fontSize: 88,
    color: "white",
    flexShrink: 0,
    textAlign: "right",
  },
  h1: {
    fontFamily: "mainFont",
    fontSize: 58,
    color: "white",
    textAlign: "center",
  },

  buttonsContainer: {
    width: "98%",
    height: "65%",
  },
  buttonsRow: {
    height: "20%",
    // borderWidth: 3,
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  buttonAC: {
    backgroundColor: "#5C5C60",
    alignItems: "center",
    margin: 1,
    justifyContent: "center",
    height: 87,
    width: 87,
    borderRadius: 90,
  },
  buttonEqual: {
    backgroundColor: "#FF9F0A",
    alignItems: "center",
    margin: 1,
    justifyContent: "center",
    height: 87,
    width: 87,
    borderRadius: 90,
  },
});
