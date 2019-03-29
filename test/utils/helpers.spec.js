import {
  convertStatus,
  generatePages,
  formatString,
  validateFormat,
  sortArray,
  saveData,
  getData,
  appendData,
  deleteData,
  updateData,
  validateFields,
  validateResults,
} from 'utils/helpers';

describe('helpers', () => {
  describe('convertStatus', () => {
    it('should return New status for num is 1', () => {
      const result = convertStatus('1');
      expect(result).toEqual('New');
    });
    it('should return In-use status for num is 2', () => {
      const result = convertStatus('2');
      expect(result).toEqual('In-use');
    });
    it('should return Stopped status for num is 3', () => {
      const result = convertStatus('3');
      expect(result).toEqual('Stopped');
    });
    it('should return Unknown status for num is not 1 2 or 3', () => {
      const result = convertStatus('4');
      expect(result).toEqual('Unknown');
    });
  });

  describe('generatePages', () => {
    it('should return array of 2 pages', () => {
      const result = generatePages(2);
      expect(result).toEqual([1, 2]);
    });
  });

  describe('formatString', () => {
    it('should return correct string with type equal truck_plate', () => {
      const result = formatString('30A9898988', 'truck_plate');
      expect(result).toEqual('30A-9898988');
    });

    it('should return correct string with type equal price', () => {
      const result = formatString('2000000000', 'price');
      expect(result).toEqual('2,000,000,000');
    });

    it('should return correct string with type other type', () => {
      const result = formatString('2000000000', 'other');
      expect(result).toEqual('2000000000');
    });
  });

  describe('validateFormat', () => {
    it('should return true when truck plate is correct', () => {
      const result = validateFormat('30A9898988', 'truck_plate');
      expect(result).toEqual(true);
    });

    it('should return false when truck plate is incorrect', () => {
      const result = validateFormat('309898988', 'truck_plate');
      expect(result).toEqual(false);
    });

    it('should return true string with type is not truck_plate', () => {
      const result = validateFormat('309898988', 'truck_plate1');
      expect(result).toEqual(true);
    });
  });

  describe('saveData', () => {
    beforeEach(() => {
      jest.spyOn(Storage.prototype, 'setItem');
    });

    afterEach(() => {
      localStorage.setItem.mockClear();
      localStorage.setItem.mockClear();
      localStorage.clear();
    });

    it('should saved data to localStorage', () => {
      const inputs = [{ test: 'test' }];
      saveData(inputs, 'data');
      expect(localStorage.setItem).toHaveBeenCalledWith('data', JSON.stringify([{ test: 'test' }]));
    });
  });

  describe('appendData', () => {
    afterEach(() => {
      localStorage.clear();
      localStorage.setItem.mockClear();
    });
    it('should get and saved data to localStorage with empty data', () => {
      const inputs = { test: 'test' };
      appendData(inputs, 'data');
      expect(localStorage.getItem).toHaveBeenCalledWith('data');
      expect(localStorage.setItem).toHaveBeenCalledWith('data', JSON.stringify([{ test: 'test' }]));
    });

    it('should get and saved data to localStorage', () => {
      const inputs = { test: 'test' };
      appendData(inputs, 'data');
      appendData(inputs, 'data');
      expect(localStorage.getItem).toHaveBeenCalledWith('data');
      expect(localStorage.setItem).toHaveBeenCalledWith(
        'data',
        JSON.stringify([{ test: 'test' }, { test: 'test' }]),
      );
    });
  });

  describe('deleteData', () => {
    afterEach(() => {
      localStorage.clear();
      localStorage.setItem.mockClear();
    });

    it('should delete data to localStorage', () => {
      const inputs = { test: 'test' };
      appendData(inputs, 'data');
      deleteData(0, 'data');
      expect(localStorage.getItem).toHaveBeenCalledWith('data');
      expect(localStorage.setItem).toHaveBeenCalledWith('data', JSON.stringify([]));
    });

    it('should  not delete data to localStorage when data is empty', () => {
      deleteData(0, 'data');
      expect(localStorage.getItem).toHaveBeenCalledWith('data');
      expect(localStorage.setItem).not.toHaveBeenCalled();
    });
  });

  describe('updateData', () => {
    afterEach(() => {
      localStorage.clear();
      localStorage.setItem.mockClear();
    });

    it('should update data to localStorage', () => {
      const inputs = { test: 'test' };
      appendData(inputs, 'data');
      updateData({ test: 'test2' }, 'data', 0);
      expect(localStorage.getItem).toHaveBeenCalledWith('data');
      expect(localStorage.setItem).toHaveBeenCalledWith(
        'data',
        JSON.stringify([{ test: 'test2' }]),
      );
    });

    it('should not update data to localStorage when data is empty', () => {
      const inputs = { test: 'test' };
      updateData({ test: 'test2' }, 'data', 0);
      expect(localStorage.getItem).toHaveBeenCalledWith('data');
      expect(localStorage.setItem).not.toHaveBeenCalled();
    });
  });

  describe('getData', () => {
    beforeEach(() => {
      jest.spyOn(Storage.prototype, 'getItem');
    });

    afterEach(() => {
      localStorage.getItem.mockClear();
      localStorage.setItem.mockClear();
    });

    it('should get correct data from localStorage', () => {
      const data = getData('data');
      expect(localStorage.getItem).toHaveBeenCalledWith('data');
    });
  });

  describe('sortArray', () => {
    it('should return correct sorted array for desc', () => {
      const inputs = [
        { key: 'test1', value: 'test1' },
        { key: 'test2', value: 'test2' },
        { key: 'test3', value: 'test3' },
        { key: 'test3', value: 'test4' },
        { key: '1test3', value: 'test4' },
      ];
      const result = sortArray(inputs, 'key', false);
      expect(result).toEqual([
        { key: 'test3', value: 'test3' },
        { key: 'test3', value: 'test4' },
        { key: 'test2', value: 'test2' },
        { key: 'test1', value: 'test1' },
        { key: '1test3', value: 'test4' },
      ]);
    });

    it('should return correct sorted array for asc', () => {
      const inputs = [
        { key: 'test1', value: 'test1' },
        { key: 'test2', value: 'test2' },
        { key: 'test3', value: 'test3' },
        { key: 'test3', value: 'test4' },
        { key: '1test3', value: 'test4' },
      ];
      const result = sortArray(inputs, 'key', true);
      expect(result).toEqual([
        { key: '1test3', value: 'test4' },
        { key: 'test1', value: 'test1' },
        { key: 'test2', value: 'test2' },
        { key: 'test3', value: 'test3' },
        { key: 'test3', value: 'test4' },
      ]);
    });
  });

  describe('validateResults', () => {
    it('should return  result for invalid validation incorrect for errors', () => {
      const expected = {
        className: 'is-invalid',
        message: 'Test',
      };
      const inputs = {
        key: {
          error: true,
          message: 'Test',
        },
      };
      const result = validateResults(inputs, 'key');
      expect(result).toEqual(expected);
    });

    it('should return  result for valid validation correct for errors', () => {
      const expected = {
        className: 'is-valid',
        message: '',
      };
      const inputs = {
        key: {
          error: false,
          message: '',
        },
      };
      const result = validateResults(inputs, 'key');
      expect(result).toEqual(expected);
    });

    it('should return result null for validation correct for errors', () => {
      const expected = {
        className: null,
        message: null,
      };
      const inputs = {};
      const result = validateResults(inputs, 'key');
      expect(result).toEqual(expected);
    });
  });

  describe('validateFields', () => {
    it('should return correct errors object when items is empty', () => {
      const expected = {
        truck_plate: {
          error: true,
          message: 'Invalid Truck Plate',
        },
        status: {
          error: true,
          message: 'Invalid Status',
        },
        price: {
          error: true,
          message: 'Invalid Price',
        },
        cargo_type: {
          error: true,
          message: 'Invalid Cargo Type',
        },
        driver: {
          error: true,
          message: 'Invalid Driver',
        },
        error: true,
      };
      const inputs = {
        truck_plate: '',
        status: '',
        price: '',
        cargo_type: [],
        driver: [],
      };
      const result = validateFields(inputs);
      expect(result).toEqual(expected);
    });

    it('should return correct errors object when items is invalid format', () => {
      const expected = {
        truck_plate: {
          error: true,
          message: 'Invalid Truck Plate',
        },
        status: {
          error: true,
          message: 'Invalid Status',
        },
        price: {
          error: true,
          message: 'Invalid Price',
        },
        cargo_type: {
          error: true,
          message: 'Invalid Cargo Type',
        },
        driver: {
          error: true,
          message: 'Invalid Driver',
        },
        error: true,
      };
      const inputs = {
        truck_plate: '30A',
        status: '',
        price: '',
        cargo_type: [],
        driver: [],
      };
      const result = validateFields(inputs);
      expect(result).toEqual(expected);
    });

    it('should return correct errors object when status is invalid', () => {
      const expected = {
        truck_plate: {
          error: false,
          message: '',
        },
        status: {
          error: true,
          message: 'Invalid Status',
        },
        price: {
          error: false,
          message: '',
        },
        cargo_type: {
          error: false,
          message: '',
        },
        driver: {
          error: false,
          message: '',
        },
        error: true,
      };
      const inputs = {
        truck_plate: '30A-98908',
        status: '',
        price: '25000',
        cargo_type: ['test'],
        driver: ['test'],
      };
      const result = validateFields(inputs);
      expect(result).toEqual(expected);
    });

    it('should return correct errors object when price is invalid', () => {
      const expected = {
        truck_plate: {
          error: false,
          message: '',
        },
        status: {
          error: false,
          message: '',
        },
        price: {
          error: true,
          message: 'Invalid Price',
        },
        cargo_type: {
          error: false,
          message: '',
        },
        driver: {
          error: false,
          message: '',
        },
        error: true,
      };
      const inputs = {
        truck_plate: '30A-98908',
        status: '1',
        price: '',
        cargo_type: ['test'],
        driver: ['test'],
      };
      const result = validateFields(inputs);
      expect(result).toEqual(expected);
    });

    it('should return correct errors object when cargo_type is invalid', () => {
      const expected = {
        truck_plate: {
          error: false,
          message: '',
        },
        status: {
          error: false,
          message: '',
        },
        price: {
          error: false,
          message: '',
        },
        cargo_type: {
          error: true,
          message: 'Invalid Cargo Type',
        },
        driver: {
          error: false,
          message: '',
        },
        error: true,
      };
      const inputs = {
        truck_plate: '30A-98908',
        status: '1',
        price: '25000',
        cargo_type: [],
        driver: ['test'],
      };
      const result = validateFields(inputs);
      expect(result).toEqual(expected);
    });

    it('should return correct errors object when cargo_type is invalid', () => {
      const expected = {
        truck_plate: {
          error: false,
          message: '',
        },
        status: {
          error: false,
          message: '',
        },
        price: {
          error: false,
          message: '',
        },
        cargo_type: {
          error: false,
          message: '',
        },
        driver: {
          error: true,
          message: 'Invalid Driver',
        },
        error: true,
      };
      const inputs = {
        truck_plate: '30A-98908',
        status: '1',
        price: '25000',
        cargo_type: ['test'],
        driver: [],
      };
      const result = validateFields(inputs);
      expect(result).toEqual(expected);
    });
  });
});
