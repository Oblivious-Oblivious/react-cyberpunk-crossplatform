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

  it('checks whether the first work is vulkans hammer', async () => {
    const w = new WorkLoader();
    await w.loadWorks();
    expect(w.works[0].name).toBe('Vulcan\'s Hammer');
    expect(w.works[0].creator).toBe('Philip K. Dick');
    expect(w.works[0].year).toBe(1953);
    expect(w.works[0].cover).toBe('https://cyberpunk-data-host.dreamnotexpiring.com/images/1953VulcansHammer.jpg');
  });
});
