"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const agents_1 = __importDefault(require("./agents"));
const agents = agents_1.default.map((agent) => ({ name: agent.name, img: agent.img, unlocked: false }));
function addCurrentAgents(oldAgents, newAgents) { }
console.log(agents);
