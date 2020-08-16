import React from 'react';
import { Editor } from 'slate-react';
import { Value } from 'slate';
import { initialValue } from './utils/initialValue';
import marksMap, {keyMap} from './marks';
import {FormatToolbar} from './';
import Icon from 'react-icons-kit';

class MyTextEditor extends React.Component {
    state = {
        value: Value.fromJSON(initialValue)
    }
    editor = null;

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

    onMarkClick = (type) => (e = new Event()) => {
        e.preventDefault();
        const change = this.editor.toggleMark(type);
        this.onChange(change);
    }

    renderMark = (props) => {
        return marksMap[props.mark.type].markComponent(props)
    }

    render() {
        return (
            <div className="editor">
                <FormatToolbar>
                    {Object.keys(marksMap).map(item => {
                        return <button onPointerDown={this.onMarkClick(item)} className="tooltip-icon-button"><Icon size="24" icon={marksMap[item].icon} /></button>
                    })}
                </FormatToolbar>
                <Editor
                    placeholder="Digite algo"
                    className="editor-box"
                    value={this.state.value}
                    onChange={this.onChange}
                    onKeyDown={this.onKeyDown}
                    ref={editor => this.editor = editor}
                    renderMark={this.renderMark}
                />
            </div>
        );
    }
}

export default MyTextEditor;