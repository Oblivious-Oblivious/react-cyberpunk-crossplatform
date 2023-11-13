import {f2} from "../../src/app/f2";
import {context, describe, expect, it} from "../spec_helpers";

describe('generic assertion', () => {
  context('when on top level context', () => {
    it('gets the meaning of life', () => {
      expect(f2()).toEqual(42);
    });
  })
});
