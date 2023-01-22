import { injectable } from "inversify";
import { DialectContract } from "../DialectContract";

@injectable()
class MysqlDialect implements DialectContract {

}

export { MysqlDialect }