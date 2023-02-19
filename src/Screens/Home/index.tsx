import { useState } from "react";
import { Text, TextInput, View, Image } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { getPostalCode } from "../../api/findPostalCode";
import { styles } from "./styles";

type postalCodeProps = {
  cep: string
  ddd: string
  localidade: string
  uf: string
}

export default function Home() {
  const [info, setInfo] = useState<postalCodeProps>({
    cep: "",
    ddd: "",
    localidade: "",
    uf: ""
  });

  const [code, setCode] = useState<any>('')

  async function searchPostalCode() {
    const dataInfo = await getPostalCode(code)
    setInfo(dataInfo)
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.logo}>
          <Image source={require('../../../assets/place.png')} style={{ width: 40, height: 40 }} />
          <Text style={styles.title}>FindMe</Text>
        </View>
        <TextInput value={code} onChangeText={((text: any) => setCode(text))} placeholderTextColor={"white"} placeholder="Digite um CEP" style={styles.input} />
        <RectButton onPress={searchPostalCode} style={styles.button}><Text style={styles.buttonTitle}>Buscar</Text></RectButton>
      </View>
      <View>
        {code && (
          <View style={{ alignItems: "center", justifyContent: "center", marginTop: 32 }}>
            <Text style={styles.postalCodeInfoTitle}>O CEP {info.cep} possui estes dados:</Text>
            <Text style={styles.postalCodeInfoTitle}>Cidade</Text>
            <Text style={{ color: "white", fontSize: 20 }}>{info.localidade}</Text>
            <Text style={styles.postalCodeInfoTitle}>Estado</Text>
            <Text style={{ color: "white", fontSize: 20 }}>{info.uf}</Text>
            <Text style={styles.postalCodeInfoTitle}>DDD</Text>
            <Text style={{ color: "white", fontSize: 20 }}>({info.ddd})</Text>
          </View>
        )}
      </View>
    </View>
  )
}