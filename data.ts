export interface IPerson {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
  }
  
  export const contacts: IPerson[] = [
    {id: 1, firstName: 'Donald', lastName: 'Duck', email: 'd.duck@duckmail.com'},
    {id: 2, firstName: 'Mickey', lastName: 'Mouse', email: 'mic.Mouse@duckmail.com'},
    {id: 3, firstName: 'Minnie', lastName: 'Mouse', email: 'min.Mouse@duckmail.com'},
    {id: 4, firstName: 'Scrooge', lastName: 'McDuck', email: 's.Mcduck@duckmail.com'}
  ];