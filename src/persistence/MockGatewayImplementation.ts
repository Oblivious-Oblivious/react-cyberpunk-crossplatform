import {PersistenceGateway} from "./PersistenceGateway.i";
import {Work} from "../app/uc1_works_loader/Work";

export class MockGatewayImplementation implements PersistenceGateway {
  works: Work[] = [];

  loadWorks(): Promise<Work[]> {
    throw new Error("Method not implemented.");
  }
}
