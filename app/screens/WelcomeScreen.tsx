import { useQuery } from "@tanstack/react-query"
import React, { FC } from "react"
import { Image, ImageStyle, TextStyle, View, ViewStyle } from "react-native"
import { Button, Icon, Screen, Text } from "../components"
import { isRTL } from "../i18n"
import ExampleService from "../services/api/example.api"
import { $globalViewStyles, colors, spacing } from "../theme"
import { useSafeAreaInsetsStyle } from "../utils/useSafeAreaInsetsStyle"
import { SearchBar } from "@rneui/themed"
import RNDateTimePicker from "@react-native-community/datetimepicker"
const welcomeLogo = require("../../assets/images/logo.png")
const welcomeFace = require("../../assets/images/welcome-face.png")

export const WelcomeScreen: FC = function WelcomeScreen() {
  const $bottomContainerInsets = useSafeAreaInsetsStyle(["bottom"])

  useQuery(["hello"], () => ExampleService.getTodos(500), {
    onSuccess: (data) => {
      console.log(data)
    },
  })

  return (
    <Screen style={$container} preset="scroll" contentContainerStyle={$globalViewStyles.fill}>
      <View style={$topContainer}>
        <Image style={$welcomeLogo} source={welcomeLogo} resizeMode="contain" />
        <Text
          testID="welcome-heading"
          style={$welcomeHeading}
          tx="welcomeScreen.readyForLaunch"
          preset="heading"
        />
        <Text tx="welcomeScreen.exciting" preset="subheading" />
        <Image style={$welcomeFace} source={welcomeFace} resizeMode="contain" />
      </View>

      <View style={[$bottomContainer, $bottomContainerInsets]}>
        <View style={[$globalViewStyles.row, $globalViewStyles.justifyContentBetween]}>
          <Icon icon="back" />
          <Text text="Hello" />
          <Icon icon="bell" />
        </View>
        <SearchBar platform="ios" />
        <Button text="Click me" preset="reversed" />
        <Text tx="welcomeScreen.postscript" size="md" />
        <RNDateTimePicker value={new Date()} />
      </View>
    </Screen>
  )
}

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background,
}

const $topContainer: ViewStyle = {
  flexShrink: 1,
  flexGrow: 1,
  flexBasis: "57%",
  justifyContent: "center",
  paddingHorizontal: spacing.large,
}

const $bottomContainer: ViewStyle = {
  flexShrink: 1,
  flexGrow: 0,
  flexBasis: "43%",
  backgroundColor: colors.palette.neutral100,
  borderTopLeftRadius: 16,
  borderTopRightRadius: 16,
  paddingHorizontal: spacing.large,
  justifyContent: "space-around",
}
const $welcomeLogo: ImageStyle = {
  height: 88,
  width: "100%",
  marginBottom: spacing.huge,
}

const $welcomeFace: ImageStyle = {
  height: 169,
  width: 269,
  position: "absolute",
  bottom: -47,
  right: -80,
  transform: [{ scaleX: isRTL ? -1 : 1 }],
}

const $welcomeHeading: TextStyle = {
  marginBottom: spacing.medium,
}
