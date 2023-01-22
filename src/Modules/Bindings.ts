import 'reflect-metadata';
import { ContainerModule } from 'inversify';

const ModuleBindings = new ContainerModule((bind) => {
  require('./Commands/Bindings')(bind);
});

export default ModuleBindings