import {Work} from "./Work";

export interface Loader {
  loadWorks(): Work[];
}
