// @flow
/**
 * Helper functions
 * @module Helpers
 */
export function generatePages(num: Number): Array<Number> {
  const roundNum = Math.ceil(num);
  return Array.from(Array(roundNum).keys(), n => n + 1);
}

export function convertStatus(num: Number): string {
  if (num === '1') return 'New';
  if (num === '2') return 'In-use';
  if (num === '3') return 'Stopped';
  return 'Unknown';
}

export function formatString(str: string, type: string): string {
  if (type === 'truck_plate')
    return str.replace(new RegExp('^([0-9]{2}[a-zA-Z]{1})([-]?)(\\d{4,})$'), '$1-$3').toUpperCase();
  if (type === 'price') return str.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  return str;
}

export function validateFormat(str: string, type: string): boolean {
  if (type === 'truck_plate') return new RegExp('^([0-9]{2}[a-zA-Z]{1})([-]?)(\\d{4,})$').test(str);
  return true;
}

export function sortArray(array: Array<any>, field: string, asc: boolean): Array<any> {
  if (asc) {
    return array.sort((a, b) => {
      if (a[field] < b[field]) return -1;
      if (a[field] > b[field]) return 1;
      return 0;
    });
  }
  return array.sort((a, b) => {
    if (b[field] < a[field]) return -1;
    if (b[field] > a[field]) return 1;
    return 0;
  });
}

export function saveData(object: Object, key: string) {
  localStorage.setItem(key, JSON.stringify(object));
}

export function getData(key: string): any {
  const items = localStorage.getItem(key);
  return JSON.parse(items);
}

export function appendData(object: Object, key: string) {
  const items = getData(key) || [];
  items.push(object);
  localStorage.setItem(key, JSON.stringify(items));
}

export function deleteData(index: number, key: string) {
  const items = getData(key) || [];
  if (items.length - 1 < index) return;
  items.splice(index, 1);
  localStorage.setItem(key, JSON.stringify(items));
}

export function updateData(object: Object, key: string, index: number) {
  const items = getData(key) || [];
  if (items.length - 1 < index) return;
  items[index] = object;
  localStorage.setItem(key, JSON.stringify(items));
}

export function validateFields(val: Object): Object {
  const isValidTrunkPlate = val.truck_plate && validateFormat(val.truck_plate, 'truck_plate');
  const isValidStatus = val.status;
  const isValidPrice = val.price;
  const isValidCargoType = val.cargo_type && val.cargo_type.length > 0;
  const isValidDriver = val.driver && val.driver.length > 0;

  return {
    truck_plate: {
      error: !isValidTrunkPlate,
      message: !isValidTrunkPlate ? 'Invalid Truck Plate' : '',
    },
    status: {
      error: !isValidStatus,
      message: !isValidStatus ? 'Invalid Status' : '',
    },
    price: {
      error: !isValidPrice,
      message: !isValidPrice ? 'Invalid Price' : '',
    },
    cargo_type: {
      error: !isValidCargoType,
      message: !isValidCargoType ? 'Invalid Cargo Type' : '',
    },
    driver: {
      error: !isValidDriver,
      message: !isValidDriver ? 'Invalid Driver' : '',
    },
    error:
      !isValidTrunkPlate || !isValidStatus || !isValidPrice || !isValidCargoType || !isValidDriver,
  };
}

export function validateResults(errors: Object, field: string): Object {
  if (errors[field]) {
    return {
      className: errors[field].error ? 'is-invalid' : 'is-valid',
      message: errors[field].message,
    };
  }
  return {
    className: null,
    message: null,
  };
}
