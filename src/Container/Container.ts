import 'reflect-metadata';
import { Container, ContainerModule } from 'inversify';
import ModuleBindings from '@Modules/Bindings';

const container = new Container();

// Api Bindings
const ApiBindings = new ContainerModule((bind) => {
  require('./ApiBindings')(bind);
});

const ApplicationBindings = new ContainerModule((bind) => {
  require('../Applications/Bindings')(bind);
});

// Dynamic bindings
const bindings: Array<ContainerModule> = [
  ApiBindings,
  ApplicationBindings,
  ModuleBindings,
]

for (const binding of bindings) {
  container.load(binding)
}

export default container;