import { StyleSheet, Text, View } from "react-native";

interface ButtonProps {
  text: string,
  textWeight: string;
  textWidth: number;
  textColor: string;
  bgWidth: number;
  bgHeight: number;
  bgColor: string;
  OnPress: () => void;
}

export default function Button({ OnPress, bgColor, bgHeight, bgWidth, textWeight, textColor, textWidth, text }: ButtonProps) {
  return (
    <View >
      <Text >{text}</Text>
    </View>
  )
}

