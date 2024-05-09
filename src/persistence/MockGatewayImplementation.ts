import {Work} from '../app/uc1_works_loader/Work';
import {PersistenceGateway} from './PersistenceGateway.i';

export class MockGatewayImplementation implements PersistenceGateway {
  works: Work[] = [];

  loadWorks(): Work[] {
    this.works = [];
    return this.works;
  }
}
