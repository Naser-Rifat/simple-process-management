import React, { useState } from 'react';
import {ProcessFormProps} from "../../type"


const ProcessForm: React.FC<ProcessFormProps> = ({ onCreateProcess }) => {
  const [newProcess, setNewProcess] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreateProcess(newProcess);
    setNewProcess('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Process ID"
        value={newProcess}
        onChange={(e) => setNewProcess(e.target.value)}
      />
      <button type="submit">Create Process</button>
    </form>
  );
};

export default ProcessForm;
