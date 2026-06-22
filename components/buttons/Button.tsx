import { Pressable, StyleSheet, Text, View } from "react-native";

interface ButtonProps {
  text: string,
  textWidth: number;
  textColor: string;
  bgWidth: number;
  bgHeight: number;
  bgColor: string;
  OnPress: () => void;
}

export default function Button({ OnPress, bgColor, bgHeight, bgWidth, textColor, textWidth, text }: ButtonProps) {
  return (
    <Pressable onPress={OnPress}>
      <View style={{
        backgroundColor: bgColor,
        width: bgWidth,
        height: bgHeight,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        
      }}>
        <Text style={{
          fontWeight: "700",
          color: textColor,
          fontSize: textWidth,
          
        }}>{text}</Text>
      </View>
    </Pressable>
  )
}

const style = StyleSheet.create({

})

