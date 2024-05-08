// App.tsx
import React, { useState, useEffect } from 'react';
import { getAllProcesses, createProcess, deleteProcess } from './services/processService';
import ProcessForm from './components/ProcessForm';
import ProcessList from './components/ProcessList';
import { Process } from '../type';

const App: React.FC = () => {
  const [processes, setProcesses] = useState<Process[]>([]);

  useEffect(() => {
    fetchProcesses();
  }, []);

  const fetchProcesses = async () => {
    try {
      const processesData = await getAllProcesses();
      console.log(processesData)
      setProcesses(processesData);
    } catch (error) {
      console.error(error?.message );
    }
  };

  const handleCreateProcess = async (newProcess: Process) => {
    try {
      await createProcess(newProcess);
      fetchProcesses();
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleDeleteProcess = async (pid: number) => {
    try {
      await deleteProcess(pid);
      setProcesses(processes?.filter(process => process.pid !== pid));
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <h1>Process Management</h1>
      <ProcessForm onCreateProcess={handleCreateProcess} />
      <ProcessList processes={processes} onDeleteProcess={handleDeleteProcess} />
    </div>
  );
};

export default App;
