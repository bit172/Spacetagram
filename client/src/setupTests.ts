import '@testing-library/jest-dom';
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
const navigatorMock = {
  clipboard: {
    writeText: jest.fn(),
  },
};

global.localStorage = localStorageMock as any;
global.navigator = navigatorMock as any;
