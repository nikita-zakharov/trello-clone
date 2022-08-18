import { useState, KeyboardEvent } from "react";
import { NewItemFormContainer, NewItemButton, NewItemInput } from "./styles";
import { useFocus } from "./utils/useFocus";

type NewItemFormProps = {
  onAdd(text: string): void;
};

export const NewItemForm = ({ onAdd }: NewItemFormProps) => {
  const [text, setText] = useState("");
  const inputRef = useFocus();

  const handleAddText = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onAdd(text);
    }
  };

  return (
    <NewItemFormContainer>
      <NewItemInput
        onChange={(e) => setText(e.target.value)}
        value={text}
        ref={inputRef}
        onKeyDown={handleAddText}
      />
      <NewItemButton onClick={() => onAdd(text)}>Create</NewItemButton>
    </NewItemFormContainer>
  );
};
