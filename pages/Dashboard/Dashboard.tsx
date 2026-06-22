import { Image, StyleSheet, Text, View } from "react-native";
import Navbar from "../../components/navbar/Navbar";

import CarImg from "../../assets/Carro.png";
import Button from "../../components/buttons/Button";

export default function Dashboard() {
  return (
    <View style={style.container}>
      <Navbar />
      <View style={style.button}>
        <Button
          OnPress={() => ""}
          bgColor="#C8DBC5"
          bgHeight={28}
          bgWidth={126}
          textColor="#111"
          text="Cadastrar alterações"
          textWidth={12}
        />
      </View>
      {/* dasboard */}
      <View style={style.dash}>
        {/* info carro */}
        <View style={style.containerImg}>
          <Image source={CarImg} style={style.ImgCar} />
        </View>
        <View style={style.containerInfos}>
          <Text style={style.textCar}>Opala</Text>
          <View style={style.statusBg}>
            <Text style={style.textStatus}>• Em viajem</Text>
          </View>
          <View>
            <Text style={style.textPlaca}>Placa:</Text>
            <Text style={style.textPlate}>ABC-1234</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
  },
  dash: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  ImgCar: {
    width: 230,
    height: 120,
    borderRadius: 10,
  },
  containerImg: {
    width: 250,
    height: 120
  },
  containerInfos: {
    width: 120,
    height: 120,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around"
  },
  textCar: {
    fontWeight: "900",
    fontSize: 24,
  },
  statusBg: {
    backgroundColor: "#D8E8F8",
    width: 100,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  textStatus: {
    fontWeight: "800",
    color: "#3A8DDE"
  },
  textPlaca: {
    color: "#898989",
    fontWeight: "500"
  },
  textPlate: {
    fontWeight: "700"
  },
  button: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 5,
    paddingRight: 10,

  }

})