export const KEY_TOKEN = "bondy-auth";
export const KEY_USER = "bondy-user";

export const getToken = () => localStorage.getItem(KEY_TOKEN);
export const setToken = (token: string) =>
  localStorage.setItem(KEY_TOKEN, token);
export const removeToken = () => localStorage.removeItem(KEY_TOKEN);

export const getUser = () => {
  const user = localStorage.getItem(KEY_USER);

  return user && JSON.parse(user.toString());
};

export const setUser = (user: { id: string; email: string; company: string }) =>
  localStorage.setItem(KEY_USER, JSON.stringify(user));
export const removeUser = () => localStorage.removeItem(KEY_USER);
