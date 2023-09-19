import { proxy } from 'valtio';

const state = proxy({
  selectedCell: null,
});

export default state;
