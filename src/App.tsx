import { useState } from 'react';
import './App.css';
import styled from 'styled-components';

// comp
import AddList from './components/AddList';
import ShowList from './components/ShowList';

// interface TaskProps {
//   title: string;
//   task: string;
//   isDone: boolean;
// }

function App() {
  // const [list, setList] = useState<TaskProps[] | null>(null);

  return (
    <AppStyle>
      <AddList />

      <ShowList />
    </AppStyle>
  );
}

export default App;

const AppStyle = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 300px auto;
  grid-template-rows: auto;

  & > div {
    border: 1px solid #000;
  }
`;
