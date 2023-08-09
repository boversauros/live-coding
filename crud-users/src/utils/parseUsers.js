export const parseUsers = (users) => {
  return users.map((user) => {
    const { name, email, picture, login } = user;
    return {
      id: login.uuid,
      name: `${name.first} ${name.last}`,
      email,
      avatar: picture.thumbnail,
    };
  });
};
