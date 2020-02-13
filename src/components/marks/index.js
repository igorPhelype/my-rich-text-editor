import BoldMark from "./BoldMark";
import ItalicMark from "./ItalicMark";

const marksMap = {
    'bold': BoldMark,
    'italic': ItalicMark
};

export const keyMap = {
    'b': 'bold',
    'i': 'italic'
}

export default marksMap;