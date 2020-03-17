import colorConverter from 'color-convert'
import { TtfHex, TtfCmyk } from '../../../commons/src/model/Color';

//TODO
export function convert(color: TtfHex): TtfCmyk {
    const colorToConvert: TtfHex = color;
    const convertedColor = colorConverter.hex.cmyk(colorToConvert.hex);
    return {black: convertedColor[0], cyan: convertedColor[1], magenta: convertedColor[2], yellow: convertedColor[3]} as TtfCmyk;
}