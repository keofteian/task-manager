const isEmpty = (value: string) => value.length == 0;

export const email = (value: string) =>
/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+))|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})\s*$/.test(value);

export {
    isEmpty
}