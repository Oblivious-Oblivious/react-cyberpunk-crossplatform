import {Work} from "./Work";
import {context, describe} from "../../../spec_helpers";

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

  context('on name being at least 3 characters', () => {
    it('fails because the name is too short', () => {
      const work1 = Work.create({
        name: `Vu`,
        creator: 'Philip K. Dick',
        year: 1953,
        cover: 'https://cyberpunk-data-host.dreamnotexpiring.com/images/1953VulcansHammer.jpg'
      });
      expect(work1.isValid()).toBe(false);
    });

    it('succeeds when name is exactly 3 characters', () => {
      const work2 = Work.create({
        name: `Vul`,
        creator: 'Philip K. Dick',
        year: 1953,
        cover: 'https://cyberpunk-data-host.dreamnotexpiring.com/images/1953VulcansHammer.jpg'
      });
      expect(work2.isValid()).toBe(true);
    });

    it('suceeds when name is more than 3 characters', () => {
      const work3 = Work.create({
        name: `Vulkan's Hammer`,
        creator: 'Philip K. Dick',
        year: 1953,
        cover: 'https://cyberpunk-data-host.dreamnotexpiring.com/images/1953VulcansHammer.jpg',
      });
      expect(work3.isValid()).toBe(true);
    });
  });

  context('on creator being at least 1 character long', () => {
    it('fails because creator is less than 1 character long', () => {
      const work1 = Work.create({
        name: `Vulkan's Hammer`,
        creator: '',
        year: 1953,
        cover: 'https://cyberpunk-data-host.dreamnotexpiring.com/images/1953VulcansHammer.jpg',
      });
      expect(work1.isValid()).toBe(false);
    });

    it('succeeds when creator is 1 character long or more', () => {
      const work2 = Work.create({
        name: `Vulkan's Hammer`,
        creator: 'V',
        year: 1953,
        cover: 'https://cyberpunk-data-host.dreamnotexpiring.com/images/1953VulcansHammer.jpg',
      });
      expect(work2.isValid()).toBe(true);
    });
  });

  context('on year being at least -5000', () => {
    it('fails because year is less than -5000', () => {
      const work1 = Work.create({
        name: `Vulkan's Hammer`,
        creator: 'Philip K. Dick',
        year: -6000,
        cover: 'https://cyberpunk-data-host.dreamnotexpiring.com/images/1953VulcansHammer.jpg',
      });
      expect(work1.isValid()).toBe(false);
    });

    it('fails when year is -5001', () => {
      const work2 = Work.create({
        name: `Vulkan's Hammer`,
        creator: 'Philip K. Dick',
        year: -5001,
        cover: 'https://cyberpunk-data-host.dreamnotexpiring.com/images/1953VulcansHammer.jpg',
      });
      expect(work2.isValid()).toBe(false);
    });

    it('succeeds if year -5000', () => {
      const work3 = Work.create({
        name: `Vulkan's Hammer`,
        creator: 'Philip K. Dick',
        year: -5000,
        cover: 'https://cyberpunk-data-host.dreamnotexpiring.com/images/1953VulcansHammer.jpg',
      });
      expect(work3.isValid()).toBe(true);
    });

    it('succeeds if year is greater than 1953', () => {
      const work4 = Work.create({
        name: `Vulkan's Hammer`,
        creator: 'Philip K. Dick',
        year: 1953,
        cover: 'https://cyberpunk-data-host.dreamnotexpiring.com/images/1953VulcansHammer.jpg',
      });
      expect(work4.isValid()).toBe(true);
    });
  });

  context('on image being either .png or .jpg', () => {
    it('fails when image is an empty string', () => {
      const work1 = Work.create({
        name: `Vulkan's Hammer`,
        creator: 'Philip K. Dick',
        year: 1953,
        cover: '',
      });
      expect(work1.isValid()).toBe(false);
    });

    it('fails when image does not end with.png or.jpg', () => {
      const work2 = Work.create({
        name: `Vulkan's Hammer`,
        creator: 'Philip K. Dick',
        year: 1953,
        cover: 'gqwgwgqwv',
      });
      expect(work2.isValid()).toBe(false);
    });

    it('fails if image ends with `jpg` without a dot', () => {
      const work4 = Work.create({
        name: `Vulkan's Hammer`,
        creator: 'Philip K. Dick',
        year: 1953,
        cover: 'jpg',
      });
      expect(work4.isValid()).toBe(false);
    });

    it('succeeds on a valid png link', () => {
      const work5 = Work.create({
        name: `Vulkan's Hammer`,
        creator: 'Philip K. Dick',
        year: 1953,
        cover: 'something.png'
      });
      expect(work5.isValid()).toBe(true);
    });

    it('succeeds on a valid jpg link', () => {
      const work6 = Work.create({
        name: `Vulkan's Hammer`,
        creator: 'Philip K. Dick',
        year: 1953,
        cover: 'something.jpg'
      });
      expect(work6.isValid()).toBe(true);
    });
  });
});
