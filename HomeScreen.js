import React, { useContext } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import { HabitContext } from '../HabitContext';

export default function HomeScreen({ navigation }) {
  const { habits, toggleHabit, deleteHabit, resetDailyStatus } = useContext(HabitContext);

  return (
    <LinearGradient colors={['#0f172a', '#1e293b']} style={{ flex: 1, padding: 20 }}>

      {/* HEADER WITH NEW DAY BUTTON */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <Text style={{ fontSize: 28, color: '#38bdf8', fontWeight: 'bold' }}>
          Habit Tracker ✨
        </Text>
        
        <TouchableOpacity onPress={resetDailyStatus} style={{ backgroundColor: '#1e293b', padding: 8, borderRadius: 8 }}>
          <Text style={{ color: '#94a3b8', fontSize: 12 }}>New Day 🌅</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={habits}
        keyExtractor={(item, index) => index.toString()}
        
        {/* EMPTY STATE MESSAGE */}
        ListEmptyComponent={
          <View style={{ alignItems: 'center', marginTop: 40, padding: 20, backgroundColor: '#1e293b', borderRadius: 15 }}>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Clean Slate! ✨</Text>
            <Text style={{ color: '#94a3b8', marginTop: 10, textAlign: 'center' }}>
              You have no habits right now. Tap "+ Add" below to start tracking.
            </Text>
          </View>
        }
        
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => toggleHabit(index)}
            onLongPress={() => {
              Alert.alert(
                "Delete Habit",
                `Are you sure you want to delete "${item.name}"?`,
                [
                  { text: "Cancel", style: "cancel" },
                  { text: "Delete", onPress: () => deleteHabit(index), style: "destructive" }
                ]
              );
            }}
            style={{
              backgroundColor: item.completed ? '#22c55e' : '#1e293b',
              padding: 15,
              borderRadius: 15,
              marginBottom: 10
            }}
          >
            <Text style={{ color: 'white', fontSize: 16 }}>
              {item.name}
            </Text>

            <Text style={{ color: '#94a3b8', marginTop: 5 }}>
              🔥 Streak: {item.streak}
            </Text>
          </TouchableOpacity>
        )}
      />

      {/* SIDE BY SIDE BUTTONS */}
      <View style={{ flexDirection: 'row', marginTop: 20 }}>

        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: '#22c55e',
            paddingVertical: 16,
            borderRadius: 20,
            marginRight: 5
          }}
          onPress={() => navigation.navigate('AddHabit')}
        >
          <Text style={{
            textAlign: 'center',
            color: 'white',
            fontWeight: 'bold'
          }}>
            + Add
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
