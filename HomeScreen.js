import React, { useContext } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { HabitContext } from '../HabitContext';

export default function HomeScreen({ navigation }) {
  const { habits, toggleHabit } = useContext(HabitContext);

  return (
    <LinearGradient colors={['#0f172a', '#1e293b']} style={{ flex: 1, padding: 20 }}>

      <Text style={{ fontSize: 28, color: '#38bdf8', marginBottom: 20 }}>
        Habit Tracker ✨
      </Text>

      <FlatList
        data={habits}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => toggleHabit(index)}
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
          style={{
            flex: 1,
            backgroundColor: '#3b82f6',
            paddingVertical: 16,
            borderRadius: 20,
            marginLeft: 5
          }}
          onPress={() => navigation.navigate('Progress')}
        >
          <Text style={{
            textAlign: 'center',
            color: 'white',
            fontWeight: 'bold'
          }}>
            Progress 📊
          </Text>
        </TouchableOpacity>

      </View>

    </LinearGradient>
  );
}