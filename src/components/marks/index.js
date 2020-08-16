import BoldMark from "./BoldMark";
import ItalicMark from "./ItalicMark";
import CodeMark from "./CodeMark";

import {bold} from 'react-icons-kit/feather/bold';
import {italic} from 'react-icons-kit/feather/italic';
import {code} from 'react-icons-kit/feather/code';

const marksMap = {
    'bold': {markComponent: BoldMark, icon: bold},
    'italic': {markComponent: ItalicMark, icon: italic},
    // 'stroke': {markComponent: StrokeMark, icon: italic},
    'code': {markComponent: CodeMark, icon: code},
};

export const keyMap = {
    'b': 'bold',
    'i': 'italic',
    // 'd': 'stroke',
    'c': 'code',
}

export default marksMap;