import { getImageAlt } from '../../src/services/label-services';
// import { getImageAlt } from '~/services/label-services';


describe('getImageAlt', () => {
  it('return string with the name of the item (album, tract...) and the artists', () => {
    const result = getImageAlt('Pasaporte', [
      'Alexander Abreu',
      "Havana D'Primera",
    ]);
    expect(result).toEqual("Pasaporte - Alexander Abreu, Havana D'Primera");
  });
});
