

import { API } from './API'

const api = new API();

api.buildFromTableDefintion({ application: 'test', database: 'test' })
  .then((result) => console.log(result))
  .catch((error) => console.error(error))