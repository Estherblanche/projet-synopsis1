import AppBar from "@/components/AppBar";
import BottomSheet from "@/components/ui copy/bottomsheet";
import Button from "@/components/ui copy/button";
import Input from '@/components/ui copy/Input';
import { MessageCircle, Pencil, Search, SlidersHorizontal, X } from 'lucide-react-native';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index3() {
     const [visible, setVisible] = useState(false);


    const activities = [
    { type: 'Congés de maternité', date: 'Jeu, 18 Jan 2025', time: '10:20 am', status: 'Rejetée' },
    { type: 'Maladie', date: 'Jeu, 18 Jan 2025', time: '10:20 am', status: 'Rejetée' },
    { type: 'Maladie', date: 'Jeu, 18 Jan 2025', time: '10:20 am', status: 'Rejetée' },
    { type: 'Maladie', date: 'Jeu, 18 Jan 2025', time: '10:20 am', status: 'Rejetée' },
    { type: 'Maladie', date: 'Jeu, 18 Jan 2025', time: '10:20 am', status: 'Approuvée' },
    { type: 'Repos', date: 'Jeu, 18 Jan 2025', time: '10:20 am', status: 'Approuvée' },
    { type: 'Maladie', date: 'Jeu, 18 Jan 2025', time: '10:20 am', status: 'Rejetée' },
    { type: 'Maladie', date: 'Jeu, 18 Jan 2025', time: '10:20 am', status: 'Approuvée' },
    { type: 'repos', date: 'Jeu, 18 Jan 2025', time: '10:20 am', status: 'Rejetée' },
    { type: 'Repos', date: 'Jeu, 18 Jan 2025', time: '10:20 am', status: 'Rejetée' },
    { type: 'Maladie', date: 'Jeu, 18 Jan 2025', time: '10:20 am', status: 'Rejetée' },
    { type: 'Maladie', date: 'Jeu, 18 Jan 2025', time: '10:20 am', status: 'Approuvée' },
  ];
//  Fonction pour afficher les activités
  const renderActivities = () => {
    return activities.map((item, index3) => (
      <View key={index3} style={styles.activityItem}>
        <View style={styles.iconBox}>
          <Text style={styles.icon}>
          
         <MessageCircle style={styles.iconBox} />
      
          </Text>
          
        </View>
        <View style={styles.textContainer}>
            <TouchableOpacity onPress={() => setVisible(true)}>
          <Text style={styles.type}>{item.type}</Text>
          <Text style={styles.date}>{item.date}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.timeStatus}>
          <Text style={styles.time}>{item.time}</Text>
          <Text style={[styles.status, item.status === 'Approuvée' ? styles.onTime : styles.late]}>
            {item.status}
          </Text>
        </View>
      </View>
    ));
  };
return (
    <SafeAreaView>
        <AppBar title="Mes Demandes" />
        <BottomSheet
                                            visible={visible}
                                                onClose={() => setVisible(false)}
                                                title="Details de la Demande"
                                            >
                                                <View>
                                                <Text style={{ marginBottom: 10,color:"#9b9a9aff" }}> Motifs</Text>
                                                 <Text style={{ marginBottom: 10, fontSize:18, fontWeight: 'bold' }}> Congés de maternité</Text>
                                                </View>
                                                <View style={{marginBottom: 10,flexDirection: 'row', justifyContent: 'space-between',}}>
                                                  <View>
                                                    <Text  style={{ color:"#9b9a9aff" }}>De</Text>
                                                    <Text>jeu, 20 Jan 2025 </Text>
                                                  </View>
                                                  <View>
                                                    <Text style={{ color:"#9b9a9aff" }}>A</Text>
                                                    <Text>jeu, 20 Jan 2025 </Text>
                                                  </View>
                                                </View> 
                                                <View>
                                                   <Text style={{ marginBottom: 10, color:"#9b9a9aff" }}>Description </Text>
                                                   <Text style={{ marginBottom: 10 }}>Je sollicite un congé pour raison médicales. Si 
                                                     necessaire, je peux fournir un certificat medical.
                                                     Merci pour votre comprehension.
                                                     </Text>
                                                  </View> 
                                                  <View>
                                                    <Text style={{ marginBottom: 10, color:"#9b9a9aff" }}>Envoyé le</Text>
                                                    <Text>Lun, 20 oct 2024 </Text>
                                                    </View> 
                                                    <View>
                                                    <Text style={{margin:10,marginBottom: 10, color:"#9b9a9aff" }}>Statut</Text>
                                                    <Text  style={{color:'orange'}}>En attente </Text>
                                                    </View>
                                                    <View style={styles.icon2}> 
                                                    <Button text="Suprimer" iconPosition="left" icon={()=><X  style={styles.icon1}/> } variant="danger" onPress={() => {}}/>
                                                    <Button text="Modifier" iconPosition="left" icon={()=><Pencil style={styles.icon1} color="#3b82f6"/> } variant="primary" onPress={() => {}}/>
                                                </View>
                                       </BottomSheet>

        <View style={{ flexDirection: 'row', alignItems: 'center', margin: 16 }}>
                <Search color="#000" size={20} style={{ marginRight: 10 }} />
                   <View style={{ flex: 1, marginRight: 10 }}>
                     <Input placeholder="Rechercher ici" />
                   </View>
                    <View style={{backgroundColor: '#f5bca0ff', padding: 8,borderRadius: 8,}}>
                        <SlidersHorizontal color="#F28C5A" size={24} />
                    </View>
                     {/* <TouchableOpacity 
                       onPress={() => router.push({
                       pathname: '../components/ui copy/bottomsheet',
                       params: { title: 'Filtrer par' }
                       })}>
                        <SlidersHorizontal color="#F28C5A" size={24} />
                    </TouchableOpacity> 
                    <BottomSheet visible={false} onClose={()=> router.push("../components/ui copy/bottomsheet")} title="Filtrer par"/>  */}
                    
            </View>
            
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={styles.item1} >
                            <Text>Tout</Text>
                        </View>
                        <View style={styles.item}>
                            <Text>Maternité</Text>
                        </View>
                        <View style={styles.item}>
                            <Text>Maladie</Text>
                        </View>
                        <View style={styles.item}>
                            <Text>Accident</Text>
                        </View>
                        <View style={styles.item}>
                            <Text>Voyage</Text>
                        </View>
                        <View style={styles.item}>
                            <Text>Autre</Text>
                        </View>
                </ScrollView>  
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                                       
                            </View> 
                  
        <ScrollView>
            {/*ACTIVITÉS RÉCENTES  */}
               
                    <View style={styles.activityContainer01}>
                    </View>
                    <View style={styles.activityContainer1}>
                      <View style={styles.activityHeader1}>
                      </View>
                      {renderActivities()}
                    </View>
                
        </ScrollView>
        
    </SafeAreaView>
    
)

}
const styles = StyleSheet.create({
   icon2: {
    margin:10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
   
},
  icon1: {
    width: 30,
    height: 30,
    backgroundColor: '#fff',
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 10,
    color: '#fff',
},
     item: {
     width: 70, 
    height: 30,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10, 
    borderRadius: 8,
    marginBottom: 15,
  },
   item1: {
    width: 70, 
    height: 30,
    color:'#F28C5A',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10, 
    borderRadius: 8,
    marginBottom: 15,
  
  },
    // Activités
  activityContainer1: {
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  activityContainer01: {
    padding: 10,
    borderRadius: 10,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  activityHeader1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  activityTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  seeAll: {
    fontSize: 14,
    color: '#f16975ff',
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  iconBox: {
    width: 50,
    height: 50,
    backgroundColor: '#f0b0b5ff',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    color: '#F28C5A',
  },
  icon: {
    fontSize: 14,
    color: '#fd6b6bff',
  },
  textContainer: {
    flex: 1,
  },
  type: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  timeStatus: {
    alignItems: 'flex-end',
  },
 
  late: {
    color: '#FF5757',
  },
  onTime: {
    color: '#4CAF50',
  },
   time: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  status: {
    fontSize: 12,
    color: '#FF5757',
  },
  date: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
})