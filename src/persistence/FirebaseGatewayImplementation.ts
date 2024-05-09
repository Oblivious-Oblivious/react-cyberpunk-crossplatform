import {Work} from '../app/uc1_works_loader/Work';
import {PersistenceGateway} from './PersistenceGateway.i';

export class FirebaseGatewayImplementation implements PersistenceGateway {
  works: Work[] = [];

  loadWorks(): Promise<Work[]> {
    throw new Error('Method not implemented.');
  }
}
