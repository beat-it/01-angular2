export function delay<T>(value:T):Promise<T> {
  new Promise<T>(
    resolve =>
      // posli vysledok o pol sekundy
      window.setTimeout(() => resolve(value), 500));
}
