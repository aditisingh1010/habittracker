import React, { useState, useContext } from 'react';
import { TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { HabitContext } from '../HabitContext';

export default function AddHabitScreen({ navigation }) {
  const [habit, setHabit] = useState('');
  const { addHabit } = useContext(HabitContext);

  return (
    <LinearGradient colors={['#0f172a', '#1e293b']} style={{ flex: 1, padding: 20 }}>

      <Text style={{ color: 'white', fontSize: 26, fontWeight: 'bold', marginBottom: 20 }}>
        New Habit ✨
      </Text>

      <TextInput
        placeholder="Enter habit name..."
        placeholderTextColor="gray"
        value={habit}
        onChangeText={setHabit}
        style={{
          backgroundColor: '#1e293b',
          color: 'white',
          padding: 15,
          borderRadius: 15,
          fontSize: 16
        }}
      />

      <TouchableOpacity
        style={{
          backgroundColor: '#22c55e',
          padding: 15,
          borderRadius: 15,
          marginTop: 20
        }}
        onPress={() => {
          // THE SAFETY CHECK:
          if (habit.trim() === '') {
            Alert.alert("Hold up!", "Please enter a habit name first.");
            return; 
          }
          
          addHabit(habit);
          navigation.goBack();
        }}
      >
        <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 16 }}>
          Save Habit
        </Text>
      </TouchableOpacity>

    </LinearGradient>
  );
}
