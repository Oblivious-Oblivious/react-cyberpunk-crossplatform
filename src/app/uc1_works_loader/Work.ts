export class Work {
  name: string;
  creator: string;
  year: number;
  cover: string;

  constructor(name: string, creator: string, year: number, cover: string) {
    this.name = name;
    this.creator = creator;
    this.year = year;
    this.cover = cover;
  }

  static create({name = '', creator = '', year = 0, cover = ''} = {}): Work {
    return new Work(name, creator, year, cover);
  }

  isValid(): boolean {
    return this.name.length > 2 &&
      this.creator.length > 0 &&
      this.year >= -5000 &&
      this.cover.length > 0 &&
      (this.cover.endsWith('.png') || this.cover.endsWith('.jpg'));
  }
};
