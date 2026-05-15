import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { HabitContext } from '../HabitContext';

export default function ProgressScreen() {
  const { habits } = useContext(HabitContext);

  // Sort habits by highest streak first
  const sortedHabits = [...habits].sort((a, b) => b.streak - a.streak);

  return (
    <View style={{ flex: 1, backgroundColor: '#0f172a', padding: 20 }}>
      <Text style={{ color: 'white', fontSize: 26, fontWeight: 'bold', marginBottom: 20 }}>
        Leaderboard 📊
      </Text>

      {sortedHabits.length === 0 ? (
        <Text style={{ color: 'gray', marginTop: 20, fontSize: 16, textAlign: 'center' }}>
          No habits yet 😴
        </Text>
      ) : (
        sortedHabits.map((h, i) => (
          <View key={i} style={{ 
              flexDirection: 'row', 
              justifyContent: 'space-between', 
              backgroundColor: '#1e293b',
              padding: 15,
              borderRadius: 10,
              marginBottom: 10
          }}>
            <Text style={{ color: 'white', fontSize: 16, fontWeight: i === 0 ? 'bold' : 'normal' }}>
              {i === 0 ? '👑 ' : ''}{h.name}
            </Text>
            <Text style={{ color: '#38bdf8', fontWeight: 'bold', fontSize: 16 }}>
              {h.streak} 🔥
            </Text>
          </View>
        ))
      )}

    </View>
  );
}
