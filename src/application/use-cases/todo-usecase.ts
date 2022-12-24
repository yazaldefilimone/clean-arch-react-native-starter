export class TodoUseCase {
  private _task: string;
  constructor(task: string) {
    this._task = task;
  }

  public get task(): string {
    return this._task;
  }
}
