import React, { useState, useContext } from 'react';
import { TextInput, TouchableOpacity, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { HabitContext } from '../HabitContext';

export default function AddHabitScreen({ navigation }) {
  const [habit, setHabit] = useState('');
  const { addHabit } = useContext(HabitContext);

  return (
    <LinearGradient colors={['#0f172a', '#1e293b']} style={{ flex: 1, padding: 20 }}>

      <TextInput
        placeholder="Enter habit..."
        placeholderTextColor="gray"
        value={habit}
        onChangeText={setHabit}
        style={{
          backgroundColor: '#1e293b',
          color: 'white',
          padding: 15,
          borderRadius: 15
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
          addHabit(habit);
          navigation.goBack();
        }}
      >
        <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold' }}>
          Save Habit
        </Text>
      </TouchableOpacity>

    </LinearGradient>
  );
}