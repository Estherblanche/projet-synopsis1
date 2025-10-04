import AppBar from "@/components/AppBar";
import { useLoader } from "@/components/LoaderContext";
import Button from "@/components/ui copy/button";
import DatePicker from "@/components/ui copy/datepicker";
import Input from "@/components/ui copy/Input";
import { useToast } from "@/contexts/ToastContext";
import { Calendar, SendHorizontal } from 'lucide-react-native';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index2() {
 const { start, stop } = useLoader();
 const { show } = useToast();

  const handleSubmit = async () => {
     start("Envoi en cours...");

    try {
      await new Promise(resolve => setTimeout(resolve, 5000)); 
      show({
           message: "Votre demande a été envoyée avec succès.",
           type: "success",
});
    } catch (error) {
      show({
           message: "Une erreur est survenue lors de l'envoi de la demande.",
           type: "error",
});

    } finally {
      stop();
    }
  };
    const [selectedDate, setSelectedDate] = useState< Date | null>(null);
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  return (
    <SafeAreaView>
        <AppBar title="Nouvelle demande" />
        <ScrollView style={styles.container1}>
          <View style={styles.container}>
            <Text style={styles.label}>Motif</Text>
            <Input placeholder="Selectionner une option" />
         <View style={styles.Container0}>
            <View>
                 <Text style={styles.label}>De</Text>  
                   <TouchableOpacity onPress={() => setDatePickerVisible(true)} style={styles.dateInput} >
                     <Text style={styles.placeholderText}>JJ/MM/AAAA</Text>
                     <Calendar size={20} color="#999"/>
                   </TouchableOpacity>

                <DatePicker
                isVisible={isDatePickerVisible}
                onRequestClose={() => setDatePickerVisible(false)}
                value={selectedDate || new Date}
                onValueChange={(date) => {
                setSelectedDate(date);
                setDatePickerVisible(false);
                }}
                mode="date"
                label="choix"/>
            </View>
            <View>
                <Text style={styles.label}>A</Text>  
                <TouchableOpacity onPress={() => setDatePickerVisible(true)} style={styles.dateInput} >
                    <Text style={styles.placeholderText}>JJ/MM/AAAA</Text>
                    <Calendar size={20} color="#999"/>
                </TouchableOpacity>
               <DatePicker
               isVisible={isDatePickerVisible}
               onRequestClose={() => setDatePickerVisible(false)}
               value={selectedDate || new Date}
               onValueChange={(date) => {
               setSelectedDate(date);
               setDatePickerVisible(false);
               }}
               mode="date"
               label="Date"/>
            </View>
        </View>
        <View style={styles.place}>
            <Input placeholder="Justifier votre demande ici"  />
        </View>
      </View>
        <Button text="Envoyer" iconPosition="left" icon={()=><SendHorizontal style={styles.icon1}/> } variant="primary" onPress={handleSubmit}/>
        </ScrollView>
                
    </SafeAreaView>
  )
}
const styles = StyleSheet.create ({
  Container0:{
     flexDirection: 'row',
     justifyContent: 'space-between',
     textAlign:'center',
    },

  label :{
    color:'#000',
    fontSize: 14,
 },
 place : {
    width: '100%', 
    marginBottom: 16,
    height: 120,
 },
 textInput: {
    width: '100%',       
    height: 120,         
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    textAlignVertical: 'top', 
    backgroundColor: '#fff',
  },
  container: {

    padding: 20,
  },
  container1: {
    backgroundColor: '#FFF',
    padding: 14,
  },
  dateInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    backgroundColor: '#fff',
    marginBottom: 16,
  },
   placeholderText: {
    fontSize: 16,
    color: '#999',
  },
  //button
  icon1: {
    width: 30,
    height: 30,
    backgroundColor: '#fff',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    color: '#fff',
},
});