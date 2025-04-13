// Define types locally since Prisma client might not be generated yet
export type Gender = 'MALE' | 'FEMALE' | 'OTHER';
export type ActivityLevel = 'SEDENTARY' | 'LIGHTLY_ACTIVE' | 'MODERATELY_ACTIVE' | 'VERY_ACTIVE' | 'EXTRA_ACTIVE';
export type Goal = 'LOSE_WEIGHT' | 'MAINTAIN_WEIGHT' | 'GAIN_WEIGHT';

// Calculate Basal Metabolic Rate (BMR) using Mifflin-St Jeor equation
export const calculateBMR = (
  gender: Gender,
  weightKg: number,
  heightCm: number,
  age: number
): number => {
  if (gender === 'MALE') {
    return 10 * weightKg + 6.25 * heightCm - 5 * age + 5;
  } else {
    return 10 * weightKg + 6.25 * heightCm - 5 * age - 161;
  }
};

// Calculate Total Daily Energy Expenditure (TDEE) based on activity level
export const calculateTDEE = (bmr: number, activityLevel: ActivityLevel): number => {
  const activityMultipliers: Record<ActivityLevel, number> = {
    SEDENTARY: 1.2, // Little or no exercise
    LIGHTLY_ACTIVE: 1.375, // Light exercise/sports 1-3 days/week
    MODERATELY_ACTIVE: 1.55, // Moderate exercise/sports 3-5 days/week
    VERY_ACTIVE: 1.725, // Hard exercise/sports 6-7 days/week
    EXTRA_ACTIVE: 1.9, // Very hard exercise/sports & physical job
  };

  return Math.round(bmr * activityMultipliers[activityLevel]);
};

// Calculate macronutrient distribution based on goal
export const calculateMacros = (tdee: number, goal: Goal) => {
  let calorieTarget: number;
  let proteinPercentage: number;
  let fatPercentage: number;
  let carbsPercentage: number;

  switch (goal) {
    case 'LOSE_WEIGHT':
      calorieTarget = tdee * 0.8; // 20% deficit
      proteinPercentage = 0.35; // Higher protein for satiety and muscle preservation
      fatPercentage = 0.3;
      carbsPercentage = 0.35;
      break;
    case 'MAINTAIN_WEIGHT':
      calorieTarget = tdee;
      proteinPercentage = 0.3;
      fatPercentage = 0.3;
      carbsPercentage = 0.4;
      break;
    case 'GAIN_WEIGHT':
      calorieTarget = tdee * 1.1; // 10% surplus
      proteinPercentage = 0.25;
      fatPercentage = 0.25;
      carbsPercentage = 0.5; // Higher carbs for energy
      break;
    default:
      calorieTarget = tdee;
      proteinPercentage = 0.3;
      fatPercentage = 0.3;
      carbsPercentage = 0.4;
  }

  // Round to the nearest whole number
  const calories = Math.round(calorieTarget);
  
  // 4 calories per gram of protein, 9 per gram of fat, 4 per gram of carbs
  const protein = Math.round((calorieTarget * proteinPercentage) / 4);
  const fat = Math.round((calorieTarget * fatPercentage) / 9);
  const carbs = Math.round((calorieTarget * carbsPercentage) / 4);

  return { calories, protein, fat, carbs };
}; 