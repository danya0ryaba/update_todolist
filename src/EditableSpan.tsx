import React, { ChangeEvent, useState } from "react";


type EditableSpanPropsType = {
    title: string
    onchange: (newValue: string) => void
}
export const EditableSpan = (props: EditableSpanPropsType) => {

    let [title, setTitle] = useState("")
    let [editMode, setEditMode] = useState<boolean>(false)

    const activateEditMode = () => {
        setEditMode(true)
        setTitle(props.title)
    }
    const activateViewMode = () => {
        setEditMode(false);
        props.onchange(title)
    }

    const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)

    return editMode ?
        <input onBlur={activateViewMode} onChange={onChangeTitleHandler} value={title} autoFocus />
        : <span onDoubleClick={activateEditMode}>{props.title}</span>
}