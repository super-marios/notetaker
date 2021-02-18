// lib
import styled from 'styled-components';
import { useSelector } from 'react-redux';

// types
import { ListState } from '../store/types';

interface ShowListProps {
  lists: any[];
}

const ShowList = () => {
  const lists = useSelector((state: ShowListProps) => state.lists);

  const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  return (
    <ShowListStyle>
      {lists.map((el, i) => {
        console.log(el);
        return (
          <div key={i}>
            <div>
              <span>ID : </span>
              {el.id}
            </div>
            <div>
              <span>TITLE : </span>
              {el.title}
            </div>
            <div>
              <span>TASK : </span>
              {el.task}
            </div>
            <div>
              <span>COMPLETED</span>
              <input
                type='checkbox'
                checked={el.isDone}
                onChange={handleCheckbox}
              />
            </div>
          </div>
        );
      })}
    </ShowListStyle>
  );
};

export default ShowList;

const ShowListStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;

  & > div {
    border: 1px solid red;
    padding: 15px;
  }
`;
