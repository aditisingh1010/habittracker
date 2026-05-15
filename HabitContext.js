import React, { createContext, useState } from 'react';

export const HabitContext = createContext();

export const HabitProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);

  const addHabit = (name) => {
    const cleanName = name.trim().toLowerCase();
    setHabits((prev) => {
      const existingIndex = prev.findIndex((h) => h.name.toLowerCase() === cleanName);
      
      // If it exists, just return the previous state (prevents duplicate names)
      if (existingIndex !== -1) return prev;

      // Add new habit (Start with completed: false and streak: 0)
      return [
        ...prev,
        { name: name.trim(), streak: 0, completed: false }
      ];
    });
  };

  const toggleHabit = (index) => {
    setHabits((prev) => {
      const updated = [...prev];
      const isNowCompleted = !updated[index].completed;
      
      updated[index] = {
        ...updated[index],
        completed: isNowCompleted,
        // Increase streak if completed, decrease if un-completed
        streak: isNowCompleted ? updated[index].streak + 1 : Math.max(0, updated[index].streak - 1)
      };
      return updated;
    });
  };

  const deleteHabit = (index) => {
    setHabits((prev) => prev.filter((_, i) => i !== index));
  };

  const resetDailyStatus = () => {
    setHabits((prev) => 
      prev.map(habit => ({ ...habit, completed: false }))
    );
  };

  return (
    <HabitContext.Provider value={{ habits, addHabit, toggleHabit, deleteHabit, resetDailyStatus }}>
      {children}
    </HabitContext.Provider>
  );
};
