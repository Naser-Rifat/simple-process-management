 export interface ProcessFormProps {
  onCreateProcess: (pid: string) => void;
}
export interface Process {
  pid: number;
  createTime: string;
}

export interface ProcessListProps {
  processes: Process[];
  onDeleteProcess: (pid: number) => void;
}