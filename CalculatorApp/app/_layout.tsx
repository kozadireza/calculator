import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {
  useFonts({
    mainFont: require("../assets/fonts/Kanit-Medium.ttf"),
  });
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: "black",
          },
        }}
      />
    </Stack>
  );
}
