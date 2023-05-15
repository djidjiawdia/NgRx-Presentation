import { Task } from 'src/app/models/task.type';

export interface TaskState {
  tasks: Task[];
  currentTask: Task | null;
  loading: boolean;
}

export const initialTaskState: TaskState = {
  tasks: [],
  currentTask: null,
  loading: false,
};
