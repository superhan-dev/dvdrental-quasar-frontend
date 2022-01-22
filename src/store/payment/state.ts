export interface Pagination {
  soryBy: string;
  page: number;
  descending: boolean;
  rowsPerPage: number;
  rowsNumber: number;
}

export interface Payment {
  id: number;
}

export interface PaymentStateInterface {
  pagination: Pagination;
  list: Payment[];
}

const pagination = {
  soryBy: "",
  page: 0,
  descending: false,
  rowsPerPage: 0,
  rowsNumber: 0,
};

export function state(): PaymentStateInterface {
  return {
    pagination,
    list: [],
  };
}

// export default state;
