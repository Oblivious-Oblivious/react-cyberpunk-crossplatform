import {PersistenceGateway} from './PersistenceGateway.i';
import {Work} from '../app/uc1_works_loader/Work';

export class MockGatewayImplementation implements PersistenceGateway {
  works: Work[] = [];

  loadWorks(): Work[] {
    this.works = [];
    return this.works;
  }
}
