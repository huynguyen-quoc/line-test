import { createSerializer } from 'enzyme-to-json';
import 'jest-localstorage-mock';
import 'jest-enzyme';
import 'jest-extended';
import 'jest-chain';

expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));

const localStorageMock = {
  getItem: jest.fn(() => []),
  setItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;
