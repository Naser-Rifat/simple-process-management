import axios from 'axios';
import { Process } from '../../type';

const baseURL = 'http://localhost:5000/api/process';


const getAllProcesses = async (): Promise<Process[]> => {
  try {
    const response = await axios.get<Process[]>(baseURL);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching processes');
  }
};

const createProcess = async (pid: number): Promise<Process> => {
  try {
    const response = await axios.post<Process>(baseURL, { pid });
    return response.data;
  } catch (error) {
    throw new Error('Error creating process');
  }
};

const deleteProcess = async (pid: number): Promise<void> => {
  try {
    await axios.delete(`${baseURL}/${pid}`);
  } catch (error) {
    throw new Error('Error deleting process');
  }
};

export { getAllProcesses, createProcess, deleteProcess };
