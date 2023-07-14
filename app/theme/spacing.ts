import { Dimensions } from "react-native"

/**
  Use these spacings for margins/paddings and other whitespace throughout your app.
 */
export const spacing = {
  micro: 2,
  tiny: 4,
  extraSmall: 8,
  small: 12,
  medium: 16,
  large: 24,
  extraLarge: 32,
  huge: 48,
  massive: 64,
} as const

export const Device = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
}

export type Spacing = keyof typeof spacing
