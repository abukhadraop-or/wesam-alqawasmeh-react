import debounce from './debounce';

describe('#debounce', () => {
  it('Invoke func properly after 50ms', async () => {
    const func = jest.fn();
    debounce(func, 50);
    setTimeout(() => expect(func).toBeCalled(), 50);
  });

  it('Calls clearTimeout', () => {
    jest.useFakeTimers();
    jest.spyOn(global, 'clearTimeout');
    debounce(() => {}, 50);
    setTimeout(() => expect(clearTimeout).toBeCalled(), 50);
  });

  it('Calls setTimeout with the right arguments', () => {
    const func = jest.fn();
    debounce(func, 50);
    setTimeout(() => expect(func).toBeCalledWith(), 50);
  });
});
