import AppBar from "@/components/AppBar";
import Button from "@/components/ui copy/button";
import { router } from "expo-router";
import { LogIn, MessageCircle, SquarePlus } from 'lucide-react-native';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

export default function index() {
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
const renderActivities = () => {
    return activities.map((item, index2) => (
      <View key={index2} style={styles.activityItem}>
        <View style={styles.iconBox1}>
          <Text style={styles.icon}> <MessageCircle style={styles.iconBox1}/></Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.type}>{item.type}</Text>
          <Text style={styles.date}>{item.date}</Text>
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
        <SafeAreaView style={{ flex: 1 }}>
            <AppBar title="Congés" />
                {/* CONTENU  */}   
               <View style={styles.entryExitContainer}>
                          <View style={[styles.card1, { marginRight: 10 }]}>
                            <Text style={styles.label}>Toute les demandes</Text>
                            
                             <View style={{ padding: 8,borderRadius: 8,justifyContent:'space-between',flexDirection:'row', alignItems:'center',}}>
                                <Text style={styles.numeric}>0</Text>
                                  <LogIn style={styles.iconBox}/>
                              </View>
                          </View>
                
                          <View style={styles.card2}>
                            <Text style={styles.label}>Demandes approuvées</Text>
                            <View style={{ padding: 8,borderRadius: 8,justifyContent:'space-between',flexDirection:'row', alignItems:'center',}}>
                                <Text style={styles.numeric}>0</Text>
                                  <LogIn color='#fff' style={{backgroundColor:'#06bb52f5' }}/>
                              </View>
                          </View>
                </View>
                <View style={styles.entryExitContainer1}>
                          
                         <View style={[styles.card , { marginRight: 10 }]}>
                            <Text style={styles.label}>Demandes en attente</Text>
                            <View style={{ padding: 8,borderRadius: 8,justifyContent:'space-between',flexDirection:'row', alignItems:'center',}}>
                                <Text style={styles.numeric}>0</Text>
                                  <LogIn color='#fff' style={{backgroundColor:'#F28C5A' }}/>
                              </View>
                          </View>
                           <View style={styles.card}>
                            <Text style={styles.label}>Demandes rejetee</Text>
                            <View style={{ padding: 8,borderRadius: 8,justifyContent:'space-between',flexDirection:'row', alignItems:'center',}}>
                                <Text style={styles.numeric}>0</Text>
                                  <LogIn color='#fff' style={{backgroundColor:'#f71212ec' }}/>
                              </View>
                          </View>
                </View>
                
                        <ScrollView style={styles.container1}>
                          <View style={styles.activityContainer0}>
                            <Text style={styles.activityTitle}>Dernière Demande</Text>
                            <Text style={styles.activityTitle1} onPress={()=> router.push("/screens/services/Gestion conges/index3")}>voir tout</Text>
                          </View>
                          <View style={styles.activityContainer1}>
                                    <View style={styles.activityHeader1}>
                                    </View>
                                    {renderActivities()}
                                  </View>

                         </ScrollView>
               <Button text="Nouvelle Demande" iconPosition="left" icon={()=><SquarePlus style={styles.icon1}/> } variant="primary" onPress={()=> router.push("/screens/services/Gestion conges/index2")}/> 
           </SafeAreaView>
            )
}
const styles = StyleSheet.create({
  //BLOCS
    container: {
    backgroundColor: '#eff3f3fb',
    padding: 16,
    },
    header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingTop: 10,
  },
  container1: {
    backgroundColor: '#d5d9ddff',
    padding: 16,
    
    },
  iconBox: {
    width: 50,
    height: 50,
    backgroundColor: '#2a0ee4ff',
    borderRadius: 15,
    alignItems: 'center',
    marginRight: 10,
    color: '#f2f1f8f1',
  },
  backArrow: {
    fontSize: 24,
    color: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  rightSection: {
    flexDirection: 'row',
    gap: 3,
  },
  em: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  language: {
    fontSize: 14,
    color: '#fff',
  },
entryExitContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  entryExitContainer1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  card1: {
    flex: 1,
    backgroundColor: '#d0d2f7ff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    borderColor: '#1266f8ff',
    marginTop: 23,
  },
  card2: {
    flex: 1,
    backgroundColor: '#ccf5e0ff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    borderColor: '#5df0a6ff',
    marginTop: 23,
  },
  card: {
    flex: 1,
    backgroundColor: '#f5cbcdff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    borderColor: '#f0979bff',
    marginTop: 23,
    

  },
  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  numeric: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    //marginBottom: 5,
  },
  // DEMANDE
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
  activityHeader1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

   activityTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  activityTitle1 :{
    color:'#F28C5A',
    textDecorationLine: 'underline',
    justifyContent:'space-between',
    flexDirection:'row',
    
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
   activityContainer0: {
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'center',
    padding: 5,
    borderRadius: 10,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
   },
icon1: {
    width: 30,
    height: 30,
    backgroundColor: '#FFE0CC',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    color: '#F28C5A',
},
    iconBox1: {
    width: 40,
    height: 40,
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
    fontSize: 18,
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
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  status: {
    fontSize: 12,
    color: '#FF5757',
  },
  date: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  
});