import 'reflect-metadata';
import { ContainerModule } from 'inversify';

const ModuleBindings = new ContainerModule((bind) => {
  require('./Commands/Bindings')(bind);
  require('./Matchers/Bindings')(bind);
});

export default ModuleBindings