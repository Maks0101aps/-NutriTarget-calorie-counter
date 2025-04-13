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
const statsController = __importStar(require("../controllers/stats"));
const router = express_1.default.Router();
// Get user goals
// @ts-ignore - Suppress Express 5 type issue
router.get('/', auth_1.authenticate, (req, res) => {
    statsController.getUserGoals(req, res);
});
// Get daily stats
// @ts-ignore - Suppress Express 5 type issue
router.get('/daily', auth_1.authenticate, (req, res) => {
    statsController.getDailyStats(req, res);
});
// Get weekly stats
// @ts-ignore - Suppress Express 5 type issue
router.get('/weekly', auth_1.authenticate, (req, res) => {
    statsController.getWeeklyStats(req, res);
});
// The following endpoints are not currently implemented in the controller
// Returning 501 Not Implemented for now
// Get monthly stats
// @ts-ignore - Suppress Express 5 type issue
router.get('/monthly', auth_1.authenticate, (req, res) => {
    res.status(501).json({ message: 'Not implemented yet' });
});
// Get daily calories for current user
// @ts-ignore - Suppress Express 5 type issue
router.get('/daily-calories', auth_1.authenticate, (req, res) => {
    res.status(501).json({ message: 'Not implemented yet' });
});
// Get weekly calories for current user
// @ts-ignore - Suppress Express 5 type issue
router.get('/weekly-calories', auth_1.authenticate, (req, res) => {
    res.status(501).json({ message: 'Not implemented yet' });
});
// Get monthly calories for current user
// @ts-ignore - Suppress Express 5 type issue
router.get('/monthly-calories', auth_1.authenticate, (req, res) => {
    res.status(501).json({ message: 'Not implemented yet' });
});
// Get nutrition breakdown for current user
// @ts-ignore - Suppress Express 5 type issue
router.get('/nutrition-breakdown', auth_1.authenticate, (req, res) => {
    res.status(501).json({ message: 'Not implemented yet' });
});
// Get nutrition stats by date range
// @ts-ignore - Suppress Express 5 type issue
router.get('/nutrition', auth_1.authenticate, (req, res) => {
    res.status(501).json({ message: 'Not implemented yet' });
});
// Get calorie intake stats by date range
// @ts-ignore - Suppress Express 5 type issue
router.get('/calories', auth_1.authenticate, (req, res) => {
    res.status(501).json({ message: 'Not implemented yet' });
});
// Get weight progress stats
// @ts-ignore - Suppress Express 5 type issue
router.get('/weight', auth_1.authenticate, (req, res) => {
    res.status(501).json({ message: 'Not implemented yet' });
});
// Get progress towards goals
// @ts-ignore - Suppress Express 5 type issue
router.get('/goals', auth_1.authenticate, (req, res) => {
    res.status(501).json({ message: 'Not implemented yet' });
});
exports.default = router;
//# sourceMappingURL=stats.js.map