import {FirebaseGatewayImplementation} from "../../persistence/FirebaseGatewayImplementation";
import {JSONGatewayImplementation} from "../../persistence/JSONGatewayImplementation";
import {MockGatewayImplementation} from "../../persistence/MockGatewayImplementation";
import {RedisGatewayImplementation} from "../../persistence/RedisGatewayImplementation";

export const WorkLoaderFactory = (type = 'firebase') => {
  const firebaseGateway = new FirebaseGatewayImplementation();
  const jsonGateway = new JSONGatewayImplementation();
  const mockGateway = new MockGatewayImplementation();
  const redisGateway = new RedisGatewayImplementation();

  switch (type) {
    case 'firebase':
      return firebaseGateway;
    case 'json':
      return jsonGateway;
    case 'mock':
      return mockGateway;
    case 'redis':
      return redisGateway;
    default:
      return mockGateway;
  }
};
