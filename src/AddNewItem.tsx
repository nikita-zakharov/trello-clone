import { useState } from 'react'
import {AddItemButton} from "./styles";

type AddNewItemProps = {
    onAdd(text: string): void
    toggleButtonText: string
    dark?: boolean
}

export const AddNewItem = ({dark, toggleButtonText}: AddNewItemProps) => {
    const [showForm, setShowForm] = useState(false)

    if (showForm) {
        return <></>
    }
    return (
        <AddItemButton onClick={() => setShowForm(true)} dark={dark}>{toggleButtonText}</AddItemButton>
    )
}
