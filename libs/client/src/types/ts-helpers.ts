// GENERIC TS HELPERS

export type Primitive = string | boolean | number;

export type RecursiveObject<T> = {
  [key: string]: T | RecursiveObject<T>;
};

export type RecursiveArray<T> = Array<T | RecursiveArray<T>>;

export type AllPrimitiveTypes =
  | Primitive
  | RecursiveObject<Primitive>
  | RecursiveArray<Primitive>;

export type Tail<T extends unknown[]> = T extends [infer Head, ...infer Tail]
  ? Tail
  : never;
