import {Work} from "../app/uc1_works_loader/Work";

export interface PersistenceGateway {
  loadWorks(): Promise<Work[]> | Work[];
}
