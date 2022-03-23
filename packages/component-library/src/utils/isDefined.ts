// https://stackoverflow.com/a/52097700/2179668
export function isDefined<T>(value: T | undefined | null): value is T {
  return <T>value !== undefined && <T>value !== null;
}
