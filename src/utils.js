"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateShortCode = void 0;
const shortid_1 = __importDefault(require("shortid"));
// Generate a random 10 character code
function generateShortCode() {
    return shortid_1.default.generate().substring(0, 10);
}
exports.generateShortCode = generateShortCode;
