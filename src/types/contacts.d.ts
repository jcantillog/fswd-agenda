type ContactType = {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  birthDate: string;
};

export interface ContactsResponseAPI {
  users: ContactType[];
  total: number;
  skip: number;
  limit: number;
}
