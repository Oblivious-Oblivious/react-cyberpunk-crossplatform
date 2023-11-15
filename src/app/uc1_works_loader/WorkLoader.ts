import {Loader} from "./Loader.i";
import {Work} from "./Work";

export class WorkLoader implements Loader {
  works: Work[] = [];

  loadWorks(): Work[] {
    this.works.push(Work.create());
    return this.works;
  }
}
