 import Button from "@/components/ui copy/button";
import { router } from "expo-router";
import { BookmarkMinus, BookmarkPlus } from 'lucide-react-native';
import { Text, View } from "react-native";

export default function ServicesScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 22, marginBottom: 20 }}> Liste des Services</Text>
<Button text="Gestion Présence" iconPosition="left" icon={()=><BookmarkPlus/> } variant="primary" onPress={()=> router.push("/screens/services/Gestion presence")}/>
<View style={{ marginBottom: 16 }}></View>
<Button text="Gestion Congés" iconPosition="left"  icon={()=><BookmarkMinus/> } variant="primary" onPress={()=>  router.push("/screens/services/Gestion conges")}/>
      {/* <Link href="/screens/services/Gestion presence" asChild>
        <TouchableOpacity style={{ padding: 15, backgroundColor: "blue", borderRadius: 8 }}>
          <Text style={{ color: "#fff", fontWeight: "bold" }}> Gestion Présence</Text>
        </TouchableOpacity>
      </Link>
      <Link href="/screens/services/Gestion conges" asChild>
    <TouchableOpacity style={{ padding: 15, backgroundColor: "blue", borderRadius: 8 }}>
          <Text style={{ color: "#fff", fontWeight: "bold" }}> Gestion conges</Text>
        </TouchableOpacity>
      </Link> */}
    </View>
  );
}
  