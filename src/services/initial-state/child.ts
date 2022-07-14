export type TStateChild = {
  child: {
    name: string
    date: string,
    gender: string,
    length: number | null,
    weight: number | null,
    sizeComparableTo: {
      asFruits: string,
      asAnimals: string,
      asSweets: string
    }
  },
  createDateChildRequest: boolean,
  createDateChildFailed: boolean,

  readDateChildRequest: boolean,
  readDateChildFailed: boolean,

  updateDateChildRequest: boolean,
  updateDateChildFailed: boolean,

  deleteDateChildRequest: boolean,
  deleteDateChildFailed: boolean,
};

export const stateChild: TStateChild = {
  child: {
    name: '',
    date: '',
    gender: '',
    length: null,
    weight: null,
    sizeComparableTo: {
      asFruits: '',
      asAnimals: '',
      asSweets: ''
    }
  },
  createDateChildRequest: false,
  createDateChildFailed: false,

  readDateChildRequest: false,
  readDateChildFailed: false,

  updateDateChildRequest: false,
  updateDateChildFailed: false,

  deleteDateChildRequest: false,
  deleteDateChildFailed: false,
};
