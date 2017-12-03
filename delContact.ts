import {NO_CONTENT} from 'http-status-codes';
import {Next, Request, Response} from 'restify';
import {BadRequestError, NotFoundError} from 'restify-errors';
import {contacts} from './data';

export function delContact(req: Request, res: Response, next: Next): void {
  const id = parseInt(req.params.id);
  if (id) {
    const personIndex = contacts.findIndex(c => c.id === id);
    if (personIndex !== (-1)) {
      contacts.splice(personIndex, 1);
      res.send(NO_CONTENT);
      next();
    } else {
      next(new NotFoundError('Person not found'));
    }
  } else {
    next(new BadRequestError('Invalid ID supplied'));
  }
}