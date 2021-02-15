import { Dispatch, SetStateAction, useState } from 'react';
interface AddListProps {
  setList: Dispatch<SetStateAction<{}>>;
}

const AddList = ({ setList }: AddListProps) => {
  const [title, setTitle] = useState<String>('');
  const [task, setTask] = useState<String>('');

  const addListEvent = () => {
    setList({
      title: title,
      task: task,
      isDone: false,
    });
  };

  return (
    <div>
      <div>
        <strong>Title</strong>
        <input type='text' />
      </div>
      <div>
        <textarea name='stuff' id='stuff'></textarea>
      </div>
      <button onClick={addListEvent}>Add</button>
    </div>
  );
};

export default AddList;
