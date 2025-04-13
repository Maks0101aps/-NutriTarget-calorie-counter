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
const userController = __importStar(require("../controllers/user"));
const router = express_1.default.Router();
// Get current user profile
// @ts-ignore - Suppress Express 5 type issue
router.get('/profile', auth_1.authenticate, (req, res) => {
    userController.getUserProfile(req, res);
});
// Update user profile
// @ts-ignore - Suppress Express 5 type issue
router.put('/profile', auth_1.authenticate, (req, res) => {
    userController.updateUserProfile(req, res);
});
// The following endpoints have not been implemented in controllers yet
// Returning 501 Not Implemented for now
// Set user goals
// @ts-ignore - Suppress Express 5 type issue
router.post('/goals', auth_1.authenticate, (req, res) => {
    res.status(501).json({ message: 'Not implemented yet' });
});
// Get user goals
// @ts-ignore - Suppress Express 5 type issue
router.get('/goals', auth_1.authenticate, (req, res) => {
    res.status(501).json({ message: 'Not implemented yet' });
});
// Update user password
// @ts-ignore - Suppress Express 5 type issue
router.put('/password', auth_1.authenticate, (req, res) => {
    res.status(501).json({ message: 'Not implemented yet' });
});
// Add weight tracking entry
// @ts-ignore - Suppress Express 5 type issue
router.post('/weight', auth_1.authenticate, (req, res) => {
    res.status(501).json({ message: 'Not implemented yet' });
});
// Get weight tracking history
// @ts-ignore - Suppress Express 5 type issue
router.get('/weight', auth_1.authenticate, (req, res) => {
    res.status(501).json({ message: 'Not implemented yet' });
});
exports.default = router;
//# sourceMappingURL=user.js.map