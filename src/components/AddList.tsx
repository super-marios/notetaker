import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList, deleteLIst } from '../store/actions';

const AddList = () => {
  const [title, setTitle] = useState<string>('');
  const [task, setTask] = useState<string>('');
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleTextarea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTask(event.target.value);
  };

  // todo add dispatch
  const addListEvent = () => {
    let num = Math.floor(Math.random() * 10);
    let obj = {
      id: num,
      title,
      task,
      isDone: false,
    };
    dispatch(addList(obj));
  };

  return (
    <div>
      <div>
        <strong>Title</strong>
        <input type='text' value={title} onChange={handleChange} />
      </div>
      <div>
        <textarea
          name='stuff'
          value={task}
          id='stuff'
          onChange={handleTextarea}
        ></textarea>
      </div>
      <button onClick={addListEvent}>Add</button>
    </div>
  );
};

export default AddList;
