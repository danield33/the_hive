import React, { Component, useState } from 'react';
import {EditorState, convertToRaw} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

export function RTEditor() {

    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const onEditorStateChange = (editorState) => {
        setEditorState(editorState)
    }

    return (
        <div style={{flex: 1}}>
            <Editor
                editorState={editorState}
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                onEditorStateChange={onEditorStateChange}
            />
            <textarea
                value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
            />
        </div>
    );
};