

import { API } from './API'
import container from './Container/Container'
import Types from './Container/Types'

const api = container.get<API>(Types.Api);

api.buildFromTableDefintion({ application: 'hubseeder', database: 'test' })
  .then((result) => {
    console.log(result)
    process.exit(0)
  })
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })