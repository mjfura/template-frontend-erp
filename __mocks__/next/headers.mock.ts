export const headers = jest.fn().mockImplementation(() => ({
  get: (key:'host') => ''
}))
