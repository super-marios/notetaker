import { useState } from 'react';
interface AddListProps {}

const AddList = () => {
  const [title, setTitle] = useState<String>('');
  const [task, setTask] = useState<String>('');

  // todo add dispatch
  const addListEvent = () => {
    console.log('jel');
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
