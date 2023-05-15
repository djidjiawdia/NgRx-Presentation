export type Task = {
  id: number;
  title: string;
  notes?: string;
  completed: boolean;
  priority: 0 | 1 | 2;
  dueDate?: Date;
};

export type StatsTask = {
  total: number;
  completed: number;
};
