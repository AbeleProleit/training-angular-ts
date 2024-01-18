import { taskState } from '../task/task';

export abstract class taskStateValueProvider {
  static taskStateValue() {
    return Object.keys(taskState)
      .filter((value) => !isNaN(Number(value)))
      .map((value) => Number.parseInt(value));
  }
  static taskStateName(taskStateNumber: number) {
    return taskState[taskStateNumber];
  }
}
