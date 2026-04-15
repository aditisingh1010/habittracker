import React, { createContext, useState } from 'react';

export const HabitContext = createContext();

export const HabitProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);

  const addHabit = (name) => {
  const cleanName = name.trim().toLowerCase();

  setHabits((prev) => {
    const existingIndex = prev.findIndex(
      (h) => h.name.toLowerCase() === cleanName
    );

    // ✅ already exists → increase streak
    if (existingIndex !== -1) {
      const updated = [...prev];
      updated[existingIndex].streak += 1;
      return updated;
    }

    // ✅ new habit
    return [
      ...prev,
      { name: name.trim(), streak: 1, completed: true }
    ];
  });
};

 const toggleHabit = (index) => {
  setHabits((prev) => {
    const updated = [...prev];

    updated[index] = {
      ...updated[index],
      streak: updated[index].streak + 1
    };

    return updated;
  });
};

  return (
    <HabitContext.Provider value={{ habits, addHabit, toggleHabit }}>
      {children}
    </HabitContext.Provider>
  );
};