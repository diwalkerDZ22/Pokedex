import { useLocalSearchParams } from "expo-router";
import { View,Text } from "react-native";

export default function Pokemon(){
    const params = useLocalSearchParams()
    return <View>
        <Text>Informations sur le pokémon d'id {params.id}</Text>

    </View>
}