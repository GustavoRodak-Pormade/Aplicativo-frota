import { StyleSheet, View } from "react-native";

export default function Navbar(){
  return(
    <View style={style.container}>

    </View>
  )
}

const style = StyleSheet.create({
  container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 35,
        padding: 13,
        borderBottomWidth: 2,
        borderBottomColor: "#e7e7e7ff"
    },
})