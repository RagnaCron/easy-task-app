export interface TaskModel {
  id: string;
  title: string;
  userId: string;
  summary: string;
  dueDate: string;
}

export interface TaskInput {
  title: string;
  summary: string;
  dueDate: string;
}
