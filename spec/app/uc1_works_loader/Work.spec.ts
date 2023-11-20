import {Work} from "../../../src/app/uc1_works_loader/Work";
import {describe} from "../../spec_helpers";

describe('Work', () => {
  it('creates a new work with empty information', () => {
    const work = Work.create();
    expect(work.name).toBe('work');
    expect(work.creator).toBe('N.S');
    expect(work.year).toBe(0);
    expect(work.cover).toBe('error.png');
  });

  it('creates a work with title and creator but not year and cover', () => {
    const work = Work.create({name: 'name', creator: 'creator'});
    expect(work.name).toBe('name');
    expect(work.creator).toBe('creator');
    expect(work.year).toBe(0);
    expect(work.cover).toBe('error.png');
  });

  it('creates a work with all valid information', () => {
    const work = Work.create({
      name: 'name',
      creator: 'creator',
      year: 2017,
      cover: 'https://example.com/',
    });
    expect(work.name).toBe('name');
    expect(work.creator).toBe('creator');
    expect(work.year).toBe(2017);
    expect(work.cover).toBe('https://example.com/');
  });

  it('validates whether a work has all information correctly', () => {
    const work = Work.create({
      name: `Vulcan's Hammer`,
      creator: 'Philip K. Dick',
      year: 1953,
      cover: 'https://cyberpunk-data-host.dreamnotexpiring.com/images/1953VulcansHammer.jpg',
    });
    expect(work.isValid()).toBe(true);
  });

  it('makes sure that name should be at least 3 characters', () => {
    const work1 = Work.create({
      name: `Vu`,
      creator: 'Philip K. Dick',
      year: 1953,
      cover: 'https://cyberpunk-data-host.dreamnotexpiring.com/images/1953VulcansHammer.jpg'
    });
    expect(work1.isValid()).toBe(false);

    const work2 = Work.create({
      name: `Vul`,
      creator: 'Philip K. Dick',
      year: 1953,
      cover: 'https://cyberpunk-data-host.dreamnotexpiring.com/images/1953VulcansHammer.jpg'
    });
    expect(work2.isValid()).toBe(true);

    const work3 = Work.create({
      name: `Vulkan's Hammer`,
      creator: 'Philip K. Dick',
      year: 1953,
      cover: 'https://cyberpunk-data-host.dreamnotexpiring.com/images/1953VulcansHammer.jpg',
    });
    expect(work3.isValid()).toBe(true);
  });

  it('makes sure that creator should be at least 1 character long', () => {
    const work1 = Work.create({
      name: `Vulkan's Hammer`,
      creator: '',
      year: 1953,
      cover: 'https://cyberpunk-data-host.dreamnotexpiring.com/images/1953VulcansHammer.jpg',
    });
    expect(work1.isValid()).toBe(false);

    const work2 = Work.create({
      name: `Vulkan's Hammer`,
      creator: 'V',
      year: 1953,
      cover: 'https://cyberpunk-data-host.dreamnotexpiring.com/images/1953VulcansHammer.jpg',
    });
    expect(work2.isValid()).toBe(true);
  });

  it('makes sure that year should be at least -5000', () => {
    const work1 = Work.create({
      name: `Vulkan's Hammer`,
      creator: 'Philip K. Dick',
      year: -6000,
      cover: 'https://cyberpunk-data-host.dreamnotexpiring.com/images/1953VulcansHammer.jpg',
    });
    expect(work1.isValid()).toBe(false);

    const work2 = Work.create({
      name: `Vulkan's Hammer`,
      creator: 'Philip K. Dick',
      year: -5001,
      cover: 'https://cyberpunk-data-host.dreamnotexpiring.com/images/1953VulcansHammer.jpg',
    });
    expect(work2.isValid()).toBe(false);

    const work3 = Work.create({
      name: `Vulkan's Hammer`,
      creator: 'Philip K. Dick',
      year: -5000,
      cover: 'https://cyberpunk-data-host.dreamnotexpiring.com/images/1953VulcansHammer.jpg',
    });
    expect(work3.isValid()).toBe(true);

    const work4 = Work.create({
      name: `Vulkan's Hammer`,
      creator: 'Philip K. Dick',
      year: 1953,
      cover: 'https://cyberpunk-data-host.dreamnotexpiring.com/images/1953VulcansHammer.jpg',
    });
    expect(work4.isValid()).toBe(true);
  });

  it('makes sure that cover is an image of .png, or .jpg', () => {
    const work1 = Work.create({
      name: `Vulkan's Hammer`,
      creator: 'Philip K. Dick',
      year: 1953,
      cover: '',
    });
    expect(work1.isValid()).toBe(false);

    const work2 = Work.create({
      name: `Vulkan's Hammer`,
      creator: 'Philip K. Dick',
      year: 1953,
      cover: 'gqwgwgqwv',
    });
    expect(work2.isValid()).toBe(false);

    const work4 = Work.create({
      name: `Vulkan's Hammer`,
      creator: 'Philip K. Dick',
      year: 1953,
      cover: 'jpg',
    });
    expect(work4.isValid()).toBe(false);

    const work5 = Work.create({
      name: `Vulkan's Hammer`,
      creator: 'Philip K. Dick',
      year: 1953,
      cover: 'something.png'
    });
    expect(work5.isValid()).toBe(true);

    const work6 = Work.create({
      name: `Vulkan's Hammer`,
      creator: 'Philip K. Dick',
      year: 1953,
      cover: 'something.jpg'
    });
    expect(work6.isValid()).toBe(true);
  });
});
