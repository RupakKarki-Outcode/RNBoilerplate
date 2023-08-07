import React, { FC } from "react"
import { ViewStyle } from "react-native"
import { AppStackScreenProps } from "../navigators"
import { Screen, Text } from "../components"
// import { useNavigation } from "@react-navigation/native"

// STOP! READ ME FIRST!
// To fix the TS error below, you'll need to add the following things in your navigation config:
// - Add `Test: undefined` to AppStackParamList
// - Import your screen, and add it to the stack:
//     `<Stack.Screen name="Test" component={TestScreen} />`
// Hint: Look for the 🔥!

interface TestScreenProps extends AppStackScreenProps<"Test"> {}

export const TestScreen: FC<TestScreenProps> = () => {
  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={$root} preset="scroll">
      <Text text="test" />
    </Screen>
  )
}

const $root: ViewStyle = {
  flex: 1,
}
