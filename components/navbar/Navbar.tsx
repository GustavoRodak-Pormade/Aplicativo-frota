import { Image, StyleSheet, Text, View } from "react-native";

import LogoPCar from "../../assets/Logo_png.png";
import DashIcon from "../../assets/dashboard.svg";
import NotifyIcon from "../../assets/Notification.svg";
import PeopleIcon from "../../assets/PeopleIcon.svg";
import CarIcon from "../../assets/Car.svg";

export default function Navbar() {
  return (
    <View style={style.container}>
      {/* Avatar com nome */}
      <View style={style.perfil}>
        <View style={style.avatar}><Image /></View>
        <View style={style.textAvatar}>
          <Text style={style.name}>
            Nome
          </Text>
        </View>
      </View>
      {/* Icones de navegação */}
      <View style={style.navigateIcons}>
        <DashIcon />
        <NotifyIcon />
        <PeopleIcon />
        <CarIcon />
      </View>
      {/* Logo */}
      <View style={style.logo}>
        <Image source={LogoPCar} style={style.logoImg} />
      </View>
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
  perfil: {
    display: "flex",
    flexDirection: "row",
    height: 30,
    justifyContent: "center",
    alignItems: "center"

  },
  avatar: {
    display: "flex",
    width: 30,
    height: 30,
    backgroundColor: "#D9D9D9",
    borderRadius: 999
  },
  textAvatar: {
    display: "flex",
    flexDirection: "row",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5
  },
  name: {
    textAlign: "center",
    fontSize: 13,
    fontWeight: "bold"
  },
  navigateIcons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 180,
    height: 30,
  },
  logo: {
    width: 70,
    height: 30
  },
  logoImg: {
    width: 80,
    height: 30
  }

})