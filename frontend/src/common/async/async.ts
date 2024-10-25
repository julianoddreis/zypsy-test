interface LoadingAsync {
  readonly loading: true;
  readonly failed?: false;
  readonly done?: false;
}

interface FailedAsync {
  readonly loading?: false;
  readonly failed: true;
  readonly done?: false;
  readonly error: Error;
}

interface DoneAsync<T> {
  readonly loading?: false;
  readonly failed?: false;
  readonly done: true;
  readonly value: T;
}

export type Async<T> = LoadingAsync | FailedAsync | DoneAsync<T>;
