export const ok = <TData>(data: TData) => ({
  status: 200,
  data: data,
});

export const badRequest = (codeError: string) => ({
  status: 400,
  data: codeError,
});
