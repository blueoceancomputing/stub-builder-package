# Contributing guide
This will detail how to contribute to this repository

## Applications
Application will define what stubs are required to build for any given application. It will detail how to confiure a new application.

### Adding a new application
1.  Add the new application name to the enum (src/Applications/Applications.ts)

```ts
  HUBSEEDER='hubseeder'
```
2. Add the application contract to the defintions (src/Applications/Definitions). This format of the file is "{{ApplicationName}}Application.ts" (eg. "HubseederApplication")

``` ts
import { injectable } from "inversify";
import { ApplicationContract } from "../ApplicationContract";

@injectable()
class HubseederApplication implements ApplicationContract {
  
}

export { HubseederApplication }
```

3. Register the binding in "src/Applications/Bindings"

```ts
bind<ApplicationContract>(Types.Application)
  .to(HubseederApplication)
  .whenTargetNamed(Applications.HUBSEEDER)
```
