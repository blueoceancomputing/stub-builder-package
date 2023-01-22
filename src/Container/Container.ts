import 'reflect-metadata';
import { Container, ContainerModule } from 'inversify';
import ModuleBindings from '@Modules/Bindings';

const container = new Container();

// Api Bindings
const ApiBindings = new ContainerModule((bind) => {
  require('./ApiBindings')(bind);
});

// Dynamic bindings
const bindings: Array<ContainerModule> = [
  ApiBindings,
  ModuleBindings
]

for (const binding of bindings) {
  container.load(binding)
}

export default container;
