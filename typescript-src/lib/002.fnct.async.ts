const loadUser = (): Promise<{ name: string }> => {
  return new Promise<{ name: string }>((resolve, reject) => {
    resolve({ name: 'max' });
  });
};

loadUser()
  .then((user) => console.log(user))
  .catch((err) => console.error(err));
