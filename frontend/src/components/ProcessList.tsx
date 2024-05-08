import React from 'react';
import formatDate from '../utils/formatDate';
import { ProcessListProps } from '../../type';



const ProcessList: React.FC<ProcessListProps> = ({ processes, onDeleteProcess }) => {
  return (
    <ul>
      {/* {processes?.map(process => (
        <li key={process.pid}>
          PID: {process.pid} | Created At: {formatDate(process.createTime)}
          <button onClick={() => onDeleteProcess(process.pid)}>Delete</button>
        </li>
      ))} */}
    </ul>
  );
};

export default ProcessList;
