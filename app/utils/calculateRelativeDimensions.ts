import { Device } from "../theme"

export const calculateRelativeHeight = (height: number) => {
  const scale = height / 844

  return Device.height * scale
}

export const calculateRelativeWidth = (width: number) => {
  const scale = width / 390

  return Device.width * scale
}
