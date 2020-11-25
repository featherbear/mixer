export const AUX = {
  AUX1: 'Mix 1',
  AUX2: 'Mix 2',
  AUX3: 'Mix 3',
  AUX4: 'Mix 4',
  AUX5: 'Mix 5',
  AUX6: 'Mix 6',
  AUX7: 'Mix 7',
  AUX8: 'Mix 8',
  AUX9: 'Mix 9',
  AUX10: 'Mix 10',
  AUX11: 'Mix 11',
  AUX12: 'Mix 12',
  AUX13: 'Mix 13',
  AUX14: 'Mix 14',
  AUX15: 'Mix 15',
  AUX16: 'Mix 16'
}

export const FX = {
  FXA: 'FX A',
  FXB: 'FX B',
  FXC: 'FX C',
  FXD: 'FX D'
}

export const MAIN = 'Main Mix'

export const ALL = {
  MAIN,
  ...AUX,
  ...FX
}

export default ALL
