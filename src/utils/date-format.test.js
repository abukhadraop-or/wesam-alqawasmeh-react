import formatDate from './date-format';

describe('#formatDate', () => {
  it('Formatting date properly', () => {
    const formattedDate = formatDate('2021-12-17');
    expect(formattedDate).toEqual('December 17, 2021');
  });
});
