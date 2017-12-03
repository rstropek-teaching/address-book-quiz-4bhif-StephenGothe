import {createServer, plugins} from 'restify';

import {addContact} from './addContact';
import {getContacts} from './getContacts';
import {delContact} from './delContact';

var server = createServer();

// Add bodyParser plugin for parsing JSON in request body
server.use(plugins.bodyParser());

// Add routes
server.post('/api/contacts', addContact);
server.get('/api/contacts', getContacts);
server.del('/api/contacts/:id', delContact);

server.listen(8080, () => console.log('API is listening'));