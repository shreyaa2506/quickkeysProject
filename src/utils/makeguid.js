const createguid = () => {
  const func = () => {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return (
    func() +
    func() +
    "-" +
    func() +
    "-" +
    func() +
    "-" +
    func() +
    "-" +
    func() +
    func() +
    func()
  );
};

export default createguid;
