import { useState } from 'react';
import './App.css';
import styled from 'styled-components';

// comp
import AddList from './components/AddList';

// interface TaskProps {
//   title: string;
//   task: string;
//   isDone: boolean;
// }

function App() {
  // const [list, setList] = useState<TaskProps[] | null>(null);

  return (
    <AppStyle>
      <div className='area-input'>{/* <AddList setList={setList} /> */}</div>
      <div className='area-show'></div>
    </AppStyle>
  );
}

export default App;

const AppStyle = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 300px auto;
  grid-template-rows: auto;

  div {
    border: 1px solid #000;
  }
`;
