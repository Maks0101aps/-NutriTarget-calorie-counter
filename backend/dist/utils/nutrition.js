"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateMacros = exports.calculateTDEE = exports.calculateBMR = void 0;
// Calculate Basal Metabolic Rate (BMR) using Mifflin-St Jeor equation
const calculateBMR = (gender, weightKg, heightCm, age) => {
    if (gender === 'MALE') {
        return 10 * weightKg + 6.25 * heightCm - 5 * age + 5;
    }
    else {
        return 10 * weightKg + 6.25 * heightCm - 5 * age - 161;
    }
};
exports.calculateBMR = calculateBMR;
// Calculate Total Daily Energy Expenditure (TDEE) based on activity level
const calculateTDEE = (bmr, activityLevel) => {
    const activityMultipliers = {
        SEDENTARY: 1.2, // Little or no exercise
        LIGHTLY_ACTIVE: 1.375, // Light exercise/sports 1-3 days/week
        MODERATELY_ACTIVE: 1.55, // Moderate exercise/sports 3-5 days/week
        VERY_ACTIVE: 1.725, // Hard exercise/sports 6-7 days/week
        EXTRA_ACTIVE: 1.9, // Very hard exercise/sports & physical job
    };
    return Math.round(bmr * activityMultipliers[activityLevel]);
};
exports.calculateTDEE = calculateTDEE;
// Calculate macronutrient distribution based on goal
const calculateMacros = (tdee, goal) => {
    let calorieTarget;
    let proteinPercentage;
    let fatPercentage;
    let carbsPercentage;
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
exports.calculateMacros = calculateMacros;
//# sourceMappingURL=nutrition.js.map