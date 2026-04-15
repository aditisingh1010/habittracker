import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { HabitContext } from '../HabitContext';

export default function ProgressScreen() {
  const { habits } = useContext(HabitContext);

  return (
    <View style={{ flex: 1, backgroundColor: '#0f172a', padding: 20 }}>

      <Text style={{ color: 'white', fontSize: 26, fontWeight: 'bold' }}>
        Progress 📊
      </Text>

      {habits.length === 0 ? (
        <Text style={{ color: 'gray', marginTop: 20 }}>
          No habits yet 😴
        </Text>
      ) : (
        habits.map((h, i) => (
          <Text key={i} style={{ color: 'white', marginTop: 10 }}>
            {h.name} → 🔥 {h.streak}
          </Text>
        ))
      )}

    </View>
  );
}