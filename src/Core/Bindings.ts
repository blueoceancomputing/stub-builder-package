import 'reflect-metadata';
import { ContainerModule } from 'inversify';

const databaseBindings = new ContainerModule((bind) => {
  require('./Database/Bindings')(bind);
});

export { databaseBindings };
