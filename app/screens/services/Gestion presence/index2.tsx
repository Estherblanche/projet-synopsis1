import AppBar from "@/components/AppBar";
import Input from '@/components/ui copy/Input';
import { LogIn, Search, SlidersHorizontal } from 'lucide-react-native';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

export default function index2() {

    const activities = [
    { type: 'Entrée', date: 'Jeu, 18 Jan 2025', time: '10:20 am', status: 'En retard' },
    { type: 'Entrée', date: 'Jeu, 18 Jan 2025', time: '10:20 am', status: 'En retard' },
    { type: 'Entrée', date: 'Jeu, 18 Jan 2025', time: '10:20 am', status: 'En retard' },
    { type: 'Entrée', date: 'Jeu, 18 Jan 2025', time: '10:20 am', status: 'À heure' },
    { type: 'Entrée', date: 'Jeu, 18 Jan 2025', time: '10:20 am', status: 'À heure' },
    { type: 'Entrée', date: 'Jeu, 18 Jan 2025', time: '10:20 am', status: 'À heure' },
    { type: 'Entrée', date: 'Jeu, 18 Jan 2025', time: '10:20 am', status: 'À heure' },
    { type: 'Entrée', date: 'Jeu, 18 Jan 2025', time: '10:20 am', status: 'À heure' },
    { type: 'Entrée', date: 'Jeu, 18 Jan 2025', time: '10:20 am', status: 'En retard' },
    { type: 'Entrée', date: 'Jeu, 18 Jan 2025', time: '10:20 am', status: 'En retard' },
    { type: 'Entrée', date: 'Jeu, 18 Jan 2025', time: '10:20 am', status: 'En retard' },
    { type: 'Entrée', date: 'Jeu, 18 Jan 2025', time: '10:20 am', status: 'À heure' },
  ];
//  Fonction pour afficher les activités
  const renderActivities = () => {
    return activities.map((item, index2) => (
      <View key={index2} style={styles.activityItem}>
        <View style={styles.iconBox}>
          <Text style={styles.icon}> <LogIn style={styles.iconBox}/></Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.type}>{item.type}</Text>
          <Text style={styles.date}>{item.date}</Text>
        </View>
        <View style={styles.timeStatus}>
          <Text style={styles.time}>{item.time}</Text>
          <Text style={[styles.status, item.status === 'À heure' ? styles.onTime : styles.late]}>
            {item.status}
          </Text>
        </View>
      </View>
    ));
  };
return (
    <SafeAreaView>
        <AppBar title="Présences" />
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
                    <BottomSheet visible={false} onClose={()=> router.push("../components/ui copy/bottomsheet")} title="Filtrer par"/> */}
                          
                   
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
    color: '#ee1023f1',
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