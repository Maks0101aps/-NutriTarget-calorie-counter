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
const foodController = __importStar(require("../controllers/food"));
const router = express_1.default.Router();
// Get all foods
// @ts-ignore - Suppress Express 5 type issue
router.get('/', auth_1.authenticate, (req, res) => {
    foodController.getAllFoodItems(req, res);
});
// Search food items - This needs to come before '/:id' route to prevent conflict
// @ts-ignore - Suppress Express 5 type issue
router.get('/search', auth_1.authenticate, (req, res) => {
    foodController.searchFoodItems(req, res);
});
// Get food by ID
// @ts-ignore - Suppress Express 5 type issue
router.get('/:id', auth_1.authenticate, (req, res) => {
    foodController.getFoodItemById(req, res);
});
// Create new food
// @ts-ignore - Suppress Express 5 type issue
router.post('/', auth_1.authenticate, (req, res) => {
    foodController.createFoodItem(req, res);
});
// Update food
// @ts-ignore - Suppress Express 5 type issue
router.put('/:id', auth_1.authenticate, (req, res) => {
    foodController.updateFoodItem(req, res);
});
// Delete food
// @ts-ignore - Suppress Express 5 type issue
router.delete('/:id', auth_1.authenticate, (req, res) => {
    foodController.deleteFoodItem(req, res);
});
exports.default = router;
//# sourceMappingURL=food.js.map