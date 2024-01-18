export enum taskState {
  Backlog = 1,
  InProgress,
  Review,
  Test,
  Done,
  Blocked,
}

export interface task {
  title: string;
  description: string;
  id?: string;
  status: taskState;
  priority: number;
}
