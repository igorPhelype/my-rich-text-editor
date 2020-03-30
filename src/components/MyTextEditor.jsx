import React from 'react';
import { Editor } from 'slate-react';
import { Value } from 'slate';
import { initialValue } from './utils/initialValue';
import marksMap, {keyMap} from './marks';

class MyTextEditor extends React.Component {
    state = {
        value: Value.fromJSON(initialValue)
    }

    onChange = ({value}) => {
        this.setState({value})
    }

    onKeyDown = (e, editor, next) => {
        if(!e.ctrlKey){
            return next();
        }
        e.preventDefault();
        if(Boolean(keyMap[e.key])){
            editor.toggleMark(keyMap[e.key]);
            return true;
        }
        return false;
    }

    renderMark = (props) => {
        return marksMap[props.mark.type](props)
    }

    render() {
        return (
            <div>
                <Editor
                    value={this.state.value}
                    onChange={this.onChange}
                    onKeyDown={this.onKeyDown}
                    renderMark={this.renderMark}
                />
            </div>
        );
    }
}

export default MyTextEditor;