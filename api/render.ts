import {
    renderToString
} from '../hydrate';
import fs from 'fs';
import path from 'path';


const indexHtml = fs.readFileSync(path.resolve('./src/index.html'), 'utf8');

export default async (_req: any, res: any) => {

    let x = await renderToString(indexHtml, {

    });
    console.log('render', x);

    res.json(x);
}