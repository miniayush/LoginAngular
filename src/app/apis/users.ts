export interface Users {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface Raw {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Users[];
  support: {
    url: string;
    text: string;
  };
}

export interface createUser {
  fname: '';
  lname: '';
  email: '';
  phone: '';
  dob: '';
}
