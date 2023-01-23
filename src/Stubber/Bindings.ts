import { interfaces } from 'inversify';
import Types from 'Container/Types'
import Bind = interfaces.Bind;
import StubBuilder from './StubBuilder';
import { FactoryStubBuilder } from './FactoryStub/FactoryStubBuilder';
import { StubBuilderFactory } from './StubBuilderFactory';

module.exports = (bind: Bind) => {
  bind<interfaces.Factory<StubBuilder>>('Factory<StubBuilder>')
    .toFactory((context: interfaces.Context) => {
      return (stubType: string) => {
        if (!context.container.isBoundNamed(Types.StubBuilder, stubType)) {
          throw new Error(`Stub builder not found for ${stubType}`)
        }

        return context.container.getNamed<StubBuilder>(
          Types.StubBuilder,
          stubType
        );
      };
    });

  bind<StubBuilderFactory>(Types.StubBuilderFactory).to(StubBuilderFactory)

  bind<StubBuilder>(Types.StubBuilder)
    .to(FactoryStubBuilder)
    .whenTargetNamed('FactoryStubBuilder');
}