import AppBar from "@/components/AppBar";
import Button from "@/components/ui copy/button";
import { router } from "expo-router";
import { LogIn, SquarePlus } from 'lucide-react-native';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
export default function index() {
  
  const days = [
    { day: 'Mar', date: '06', isToday: false },
    { day: 'Mer', date: '06', isToday: false },
    { day: 'Jeu', date: '06', isToday: true },
    { day: 'Ven', date: '07', isToday: false },
    { day: 'Sam', date: '07', isToday: false },
  ];

  const activities = [
    { type: 'Entrée', date: 'Jeu, 18 Jan 2025', time: '10:20 am', status: 'En retard' },
    { type: 'Entrée', date: 'Jeu, 18 Jan 2025', time: '10:20 am', status: 'En retard' },
    { type: 'Entrée', date: 'Jeu, 18 Jan 2025', time: '10:20 am', status: 'En retard' },
    { type: 'Entrée', date: 'Jeu, 18 Jan 2025', time: '10:20 am', status: 'À heure' },
  ];

  // Fonction pour afficher les jours du calendrier 
  const renderDays = () => {
    return days.map((item, index) => (
      <View key={index} style={[ styles.dayBox, item.isToday && styles.todayBox, ]} >
        <Text style={[styles.date, item.isToday && styles.todayDate]}>
          {item.date}
        </Text>
        <Text style={[styles.day, item.isToday && styles.todayDay]}>
          {item.day}
        </Text>
      </View>
    ));
  };

  //  Fonction pour afficher les activités
  const renderActivities = () => {
    return activities.map((item, index) => (
      <View key={index} style={styles.activityItem}>
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
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* HEADER  */}
      <AppBar title="Présences" />
        {/* <View style={styles.header}>
          <TouchableOpacity>
            <Text style={styles.backArrow}><MoveLeft style={styles.bar} /></Text>
          </TouchableOpacity>
          <Text style={styles.title}>Présences</Text>
          <View style={styles.rightSection}>
            <Text style={styles.em}>EM</Text>
            <Text style={styles.language}>Français </Text>
          </View>
        </View> */}

      
        

        {/*CALENDRIER  */}
      <View style={styles.container}> 
        <View style={styles.calendarContainer}>
          <Text style={styles.month}>Janvier, 2025</Text>
        </View>
        <View style={styles.calendarContainer}>
          <View style={styles.daysRow}>
            {renderDays()}
          </View>
        </View>

        {/* ENTRÉE/SORTIE  */}
         <View style={styles.entryExitContainer}>
          <Text style={styles.au}>Aujourd'hui</Text>
        </View>
        <View style={styles.entryExitContainer}>
          <View style={[styles.card, { marginRight: 8 }]}>
            <Text style={styles.label}> <LogIn style={styles.iconBox}/>   Entrée</Text>
            <Text style={styles.time}>10:20 am</Text>
            <Text style={styles.status}>En retard</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.label}><LogIn/>   Sortie</Text>
            <Text style={styles.time}>--:-- --</Text>
            <Text style={styles.status}>À heure</Text>
          </View>
        </View>

        {/* TEMPS DE TRAVAIL  */}
        <View style={styles.workTimeContainer}>
          <Text style={styles.workTitle}>Temps de travail</Text>
          <View style={styles.statsRow}>
            <View style={styles.statBox}>
              <Text style={[styles.value, { color: '#333' }]}>70 j</Text>
              <Text style={styles.label}>Total</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={[styles.value, { color: '#F28C5A' }]}>70 j</Text>
              <Text style={styles.label}>À heure</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={[styles.value, { color: '#4CAF50' }]}>70 j</Text>
              <Text style={styles.label}>En retard</Text>
            </View>
          </View>
        </View>
        </View> 

        {/*ACTIVITÉS RÉCENTES  */}
        <View style={styles.activityContainer0}>
          
            <Text style={styles.activityTitle}>Mon activité</Text>
            <Text style={styles.activityTitle1} onPress={()=> router.push("/screens/services/Gestion presence/index2")}>voir tout</Text>
        </View>

      <ScrollView style={styles.container}>
        
        <View style={styles.activityContainer}>
          <View style={styles.activityHeader}>
          </View>
          {renderActivities()}
        </View>

        {/*BOUTON */}
      
        {/* <Link href="/screens/services/Gestion presence/index2" asChild>
                <TouchableOpacity >
                  <View style={styles.addButtonContainer}>
                    <Text style={styles.addButtonText}>+ Nouvelle activité</Text>
                  </View>
                </TouchableOpacity>
              </Link> */}
      </ScrollView>
      <Button text="Nouvelle Activité" iconPosition="left" icon={()=><SquarePlus style={styles.iconBox}/> } variant="primary" onPress={()=> router.push("/screens/services/Gestion presence/index2")}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eaedeeff',
    padding: 20,
  },

  // Header
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    //marginBottom: 80,
    paddingTop: 30,
    backgroundColor: '#F28C5A',
  },
  backArrow: {
    fontSize: 20,
    color: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: -170,
  },
  bar:{
    color:'#fff',
    paddingLeft: 70,
  },
  rightSection: {
    flexDirection: 'row',
    gap: 10,
  },
  em: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  language: {
    fontSize: 14,
    color: '#ece5e5ff',
  },

  // Calendrier
  calendarContainer: {
    marginBottom: 7,
  },
  month: {
    fontSize: 16,
    color: '#000',
    marginBottom: 10,
    //fontWeight: 'bold',
  },
  daysRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  dayBox: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  todayBox: {
    backgroundColor: '#F28C5A',
    borderColor: '#F28C5A',
  },
  date: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  todayDate: {
    color: '#fff',
  },
  day: {
    fontSize: 12,
    color: '#666',
  },
  todayDay: {
    color: '#fff',
  },

  // Entrée / Sortie
  entryExitContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 3
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    marginTop: 5,
    marginBottom: 5,
    marginHorizontal: 2,
  justifyContent: 'space-between',
  },
  au: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'#000'
  },
  label: {
    fontSize: 18,
    color: '#000',
    marginBottom: 5,
    
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

  // Temps de travail
  workTimeContainer: {
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 10,
    marginBottom: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  workTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statBox: {
    alignItems: 'center',
  },
  value: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  // Activités
  activityContainer: {
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  activityContainer0: {
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'center',
    padding: 5,
    borderRadius: 10,
    marginBottom: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  activityHeader: {
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
  seeAll: {
    fontSize: 14,
    color: '#F28C5A',
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  iconBox: {
    width: 40,
    height: 40,
    backgroundColor: '#FFE0CC',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    color: '#F28C5A',
  },
  icon: {
    fontSize: 14,
    color: '#F28C5A',
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

  // Bouton 
  addButtonContainer: {
    marginTop: 20,
    backgroundColor: '#F28C5A',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  
});
