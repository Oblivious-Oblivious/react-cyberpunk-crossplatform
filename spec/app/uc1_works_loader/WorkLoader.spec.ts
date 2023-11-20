import {WorkLoader} from "../../../src/app/uc1_works_loader/WorkLoader";
import {describe} from "../../spec_helpers";

describe('WorkLoader', () => {
  it('contains an initally empty works array', () => {
    const w = new WorkLoader();
    expect(w.works.length).toBe(0);
  });

  it('retrieves a json list with all cyberpunk work information', async () => {
    const w = new WorkLoader();
    await w.loadWorks();
    expect(w.works.length).toBeGreaterThan(0);
  });

  it('retrieves at least 50 works', async () => {
    const w = new WorkLoader();
    await w.loadWorks();
    expect(w.works.length).toBeGreaterThanOrEqual(50);
  });
});
