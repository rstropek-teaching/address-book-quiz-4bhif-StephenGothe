import {CREATED, OK} from 'http-status-codes';
import {Next, Request, Response} from 'restify';
import {BadRequestError} from 'restify-errors';
import {contacts, IPerson} from './data';

export function addContact(req: Request, res: Response, next: Next): void {
  if (!req.body.id || !req.body.firstName || !req.body.lastName || !req.body.email) {
    next(new BadRequestError('Invalid input (e.g. required field missing or empty)'));
  } else {
    const newCustomerId = parseInt(req.body.id);
    if (!newCustomerId) {
      next(new BadRequestError('ID has to be a numeric value'));
    } else {
      const newPerson: IPerson = { id: newCustomerId,
        firstName: req.body.firstName, lastName: req.body.lastName, email: req.body.email};
      contacts.push(newPerson);
      res.send(CREATED, newPerson, {Location: `${req.path()}/${req.body.id}`});
    }
  }
}