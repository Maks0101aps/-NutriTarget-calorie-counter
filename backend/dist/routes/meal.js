"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("../middlewares/auth");
const mealController = __importStar(require("../controllers/meal"));
const router = express_1.default.Router();
// Get all meals for current user
// @ts-ignore - Suppress Express 5 type issue
router.get('/', auth_1.authenticate, (req, res) => {
    mealController.getMealsByDate(req, res);
});
// Get meal by ID
// @ts-ignore - Suppress Express 5 type issue
router.get('/:id', auth_1.authenticate, (req, res) => {
    mealController.getMealById(req, res);
});
// Create new meal
// @ts-ignore - Suppress Express 5 type issue
router.post('/', auth_1.authenticate, (req, res) => {
    mealController.createMeal(req, res);
});
// Update meal
// @ts-ignore - Suppress Express 5 type issue
router.put('/:id', auth_1.authenticate, (req, res) => {
    mealController.updateMeal(req, res);
});
// Delete meal
// @ts-ignore - Suppress Express 5 type issue
router.delete('/:id', auth_1.authenticate, (req, res) => {
    mealController.deleteMeal(req, res);
});
// Add food to meal
// @ts-ignore - Suppress Express 5 type issue
router.post('/:mealId/foods', auth_1.authenticate, (req, res) => {
    // mealController.addFoodToMeal(req, res); - Not implemented yet
    res.status(501).json({ message: 'Not implemented yet' });
});
// Remove food from meal
// @ts-ignore - Suppress Express 5 type issue
router.delete('/:mealId/foods/:foodId', auth_1.authenticate, (req, res) => {
    // mealController.removeFoodFromMeal(req, res); - Not implemented yet
    res.status(501).json({ message: 'Not implemented yet' });
});
exports.default = router;
//# sourceMappingURL=meal.js.map