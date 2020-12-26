export type Swap<T, U extends { [K in keyof T]?: any }> = Omit<T, keyof U> &
  Pick<U, keyof T>;
