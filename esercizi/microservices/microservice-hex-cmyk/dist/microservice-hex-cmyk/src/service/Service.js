"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const color_convert_1 = __importDefault(require("color-convert"));
//TODO
function convert(color) {
    const colorToConvert = color;
    const convertedColor = color_convert_1.default.hex.cmyk(colorToConvert.hex);
    return { cyan: convertedColor[0], magenta: convertedColor[1], yellow: convertedColor[2], black: convertedColor[3] };
}
exports.convert = convert;
//# sourceMappingURL=Service.js.map