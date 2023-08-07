import {  TextStyle, ViewStyle, StyleSheet } from "react-native"
import { spacing } from "./spacing";
import { colors } from "./colors";

export const $activityIndicator: ViewStyle = { flex: 1, justifyContent: "center" }

export const $screenContentContainer: ViewStyle = {
  paddingHorizontal: spacing.medium,
  paddingVertical: spacing.huge,
  backgroundColor: colors.palette.neutral100,
}

export const $globalViewStyles = {
  /* Column Layouts */
  column: {
    flexDirection: "column",
  },
  columnReverse: {
    flexDirection: "column-reverse",
  },
  colCenter: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  colFirst: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    alignContent: "flex-start",
  },
  colVCenter: {
    flexDirection: "column",
    alignItems: "center",
  },
  colHCenter: {
    flexDirection: "column",
    justifyContent: "center",
  },
  /* Row Layouts */
  row: {
    flexDirection: "row",
  },
  rowReverse: {
    flexDirection: "row-reverse",
  },
  rowCenter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  rowVCenter: {
    flexDirection: "row",
    justifyContent: "center",
  },
  rowHCenter: {
    flexDirection: "row",
    alignItems: "center",
  },
  /* Default Layouts */
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  alignItemsCenter: {
    alignItems: "center",
  },
  alignItemsStart: {
    alignItems: "flex-start",
  },
  alignItemsStretch: {
    alignItems: "stretch",
  },
  justifyContentCenter: {
    justifyContent: "center",
  },
  justifyContentAround: {
    justifyContent: "space-around",
  },
  justifyContentBetween: {
    justifyContent: "space-between",
  },
  justifyEvenly: {
    justifyContent: "space-evenly",
  },
  justifyEnd: {
    justifyContent: "flex-end",
  },
  justifyStart: {
    justifyContent: "flex-start",
  },
  scrollSpaceAround: {
    flexGrow: 1,
    justifyContent: "space-around",
  },
  scrollSpaceBetween: {
    flexGrow: 1,
    justifyContent: "space-between",
  },
  selfStretch: {
    alignSelf: "stretch",
  },
  selfStart: {
    alignSelf: "flex-start",
  },
  selfCenter: {
    alignSelf: "center",
  },
  /* Sizes Layouts */
  fill: {
    flex: 1,
  },
  hairLineWidth: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  fullSize: {
    height: "100%",
    width: "100%",
  },
  fullWidth: {
    width: "100%",
  },
  fullHeight: {
    height: "100%",
  },
  /* Operation Layout */
  mirror: {
    transform: [{ scaleX: -1 }],
  },
  rotate90: {
    transform: [{ rotate: "90deg" }],
  },
  rotate90Inverse: {
    transform: [{ rotate: "-90deg" }],
  },
} satisfies Record<string, ViewStyle>;

export const $globalTextStyles =  {
  // Text alignment styles
  center: {
    textAlign: "center",
  },
  left: {
    textAlign: "left",
  },
  right: {
    textAlign: "right",
  },
  justify: {
    textAlign: "justify",
  },
} satisfies Record<string, TextStyle>;

