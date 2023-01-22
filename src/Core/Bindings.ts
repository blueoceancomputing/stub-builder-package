import 'reflect-metadata';
import { ContainerModule } from 'inversify';

const CoreBindings = new ContainerModule((bind) => {
  require('./Database/Bindings')(bind);
});

export default CoreBindings;
