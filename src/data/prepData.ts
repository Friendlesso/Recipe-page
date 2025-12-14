// We use this stracture so in the future
// If we were to add a option for users to input their own recipes
// they could input exact time and unit for that recipe
export const prepInfo = [
  {
    title: 'Total:',
    approximate: true,
    time: {
      value: 10,
      unit: 'minutes'
    }
  },
  {
    title: 'Preparation:',
    time: {
      value: 5,
      unit: 'minutes'
    }
  },
  {
    title: 'Cooking:',
    time: {
      value: 5,
      unit: 'minutes'
    }
  },
] 