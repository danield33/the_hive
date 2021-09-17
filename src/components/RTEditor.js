import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
export function RTEditor() {
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );

    return (
        <div>
            <h1>Create a Post!</h1>
            <div id={"editorContainer"}>
                <Editor
                    editorState={editorState}
                    onEditorStateChange={setEditorState}
                />
            </div>
        </div>
    );
}