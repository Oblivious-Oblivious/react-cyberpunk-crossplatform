import { WorkLoader } from "../../../src/app/uc1_works_loader/WorkLoader";
import {describe} from "../../spec_helpers";

describe('WorkLoader', () => {
  it('contains an initally empty works array', () => {
    const w = new WorkLoader();
    expect(w.works.length).toBe(0);
  })

  it('retrieves a json list with all cyberpunk work information', () => {
    const w = new WorkLoader();
    w.loadWorks();
    expect(w.works.length).toBeGreaterThan(0);
  });
});
