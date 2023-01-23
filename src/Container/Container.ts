import 'reflect-metadata';
import { Container, ContainerModule } from 'inversify';
import CoreBindings from 'Core/Bindings';
import ModuleBindings from 'Modules/Bindings';

const container = new Container();

const MiscBindings = new ContainerModule((bind) => {
  require('./MiscBindings')(bind);
});

const ApplicationBindings = new ContainerModule((bind) => {
  require('../Applications/Bindings')(bind);
});

// Dynamic bindings
const bindings: Array<ContainerModule> = [
  MiscBindings,
  ApplicationBindings,
  CoreBindings,
  ModuleBindings,
]

for (const binding of bindings) {
  container.load(binding)
}

export default container;
