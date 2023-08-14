import * as React from "react"
import { View, ViewStyle } from "react-native"
import { Spacing, spacing } from "../theme"

export interface SpacerProps {
  /**
   * Spacing sizes
   */
  size: Spacing

  /**
   * A prop that determines if the spacer should be in height or width
   */
  orientation?: "height" | "width"
  /**
   * An optional style override useful for padding & margin.
   */
  width?: number
}

/**
 * Describe your component here
 */
export const Spacer = (props: SpacerProps) => {
  const { size, width, orientation } = props

  const $stylesHeight: ViewStyle = {
    minHeight:
      size === "extraLarge"
        ? spacing.extraLarge
        : size === "extraSmall"
        ? spacing.extraSmall
        : size === "huge"
        ? spacing.huge
        : size === "large"
        ? spacing.large
        : size === "massive"
        ? spacing.massive
        : size === "medium"
        ? spacing.extraMedium
        : size === "extraMedium"
        ? spacing.medium
        : size === "micro"
        ? spacing.micro
        : size === "small"
        ? spacing.small
        : size === "tiny"
        ? spacing.tiny
        : width || 0,
  }

  const $stylesWidth: ViewStyle = {
    minWidth:
      size === "extraLarge"
        ? spacing.extraLarge
        : size === "extraSmall"
        ? spacing.extraSmall
        : size === "huge"
        ? spacing.huge
        : size === "large"
        ? spacing.large
        : size === "massive"
        ? spacing.massive
        : size === "medium"
        ? spacing.extraMedium
        : size === "extraMedium"
        ? spacing.medium
        : size === "micro"
        ? spacing.micro
        : size === "small"
        ? spacing.small
        : size === "tiny"
        ? spacing.tiny
        : width || 0,
  }

  return <View style={orientation === "width" ? $stylesWidth : $stylesHeight} />
}
