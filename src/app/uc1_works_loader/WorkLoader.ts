import {Loader} from "./Loader.i";
import {Work} from "./Work";
import axios from 'axios';

export class WorkLoader implements Loader {
  works: Work[] = [];

  async loadWorks(): Promise<Work[]> {
    try {
      const response = (await axios.get("https://cyberpunk-data-host.dreamnotexpiring.com"));
      response.data.cyberpunk_works.forEach((work: any) => {
        this.works.push(Work.create({
          name: work.name,
          creator: work.creator,
          year: work.year,
          cover: work.cover,
        }));
      });
    } catch (err) {
      console.log("ERROR: " + err);
    }

    return this.works;
  }
}
