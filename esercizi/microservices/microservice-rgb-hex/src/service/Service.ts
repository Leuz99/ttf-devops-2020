import colorConverter from 'color-convert';
import { TtfRgb, TtfHex } from '../../../commons/src/model/Color';

//TODO
export function convert(color: TtfRgb): TtfHex {
    const colorToConvert: TtfRgb = color;
    const convertedColor = colorConverter.rgb.hex([colorToConvert.red, colorToConvert.green, colorToConvert.blue]);
    return { hex: convertedColor } as TtfHex;
}