import { DatabaseContract } from "Core/Database/Contracts/DatabaseContract";
import { DatabaseHandle } from "Core/Database/Contracts/DatabaseHandle";
import { injectable } from "inversify";
import { Dictionary } from "./types";

@injectable()
abstract class Repository<TEntity extends Dictionary, TPersistence extends Dictionary = TEntity> {
  /**
   * @var {DatabaseHandle}
   */
  protected readonly handle: DatabaseHandle;

  public constructor(handle: DatabaseHandle) {
    this.handle = handle;
  }
}

export { Repository }