import ArrayBufferConverter, { getBuffer } from '../ConverterArrBuf';

const testArrayBuffer = [
  "{'data: {'user: {'id: 1,'name:' Hitman, 'level': 10}}}",
  "{type: 'Magician', name: 'Magus', distance: 0, stoned: false, attack: 100}",
  "{type: 'Magician', name: 'Magus', distance: 1, stoned: false, attack: 100}",
  "{type: 'Magician', name: 'Magus', distance: 2, stoned: false, attack: 100}",
  "{type: 'Magician', name: 'Magus', distance: 3, stoned: false, attack: 100}",
  "{type: 'Magician', name: 'Magus', distance: 4, stoned: false, attack: 100}",
  "{type: 'Magician', name: 'Magus', distance: 0, stoned: true, attack: 100}",
  "{type: 'Magician', name: 'Magus', distance: 1, stoned: true, attack: 100}",
  "{type: 'Magician', name: 'Magus', distance: 2, stoned: true, attack: 100}",
  'Hi, it is me!',
  '[]',
  '{}',
  '',
];

test.each(testArrayBuffer)(('Checking the conversion ArrayBuffer from:'),
  (data) => {
    const buffer = getBuffer(data);
    const project = new ArrayBufferConverter();
    project.load(buffer);
    const received = project.toString();
    expect(received).toBe(data);
  });
