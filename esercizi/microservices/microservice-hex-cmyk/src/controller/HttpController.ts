import {convert} from '../service/Service';
import {Express} from 'express';
import { TtfHex, TtfCmyk } from '../../../commons/src/model/Color';

//TODO
class HttpController {
    constructor(server: Express) {
        server.get('/', (req, res) => {
            const color = JSON.parse(req.query.color) as TtfHex;
            const convertedColor: TtfCmyk = convert(color);

            res.send(convertedColor);
        });
    }
}

export default HttpController;
