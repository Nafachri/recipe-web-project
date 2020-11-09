const url = "https://5fa790be9def160016adaf1c.mockapi.io/api/v1/";

const getAllUser = async () => {
  const response = await fetch(`${url}/users`);
  const data = await response.json();

  return data;
};

const getOneUser = async (id) => {
  const response = await fetch(`${url}/users/${id}`);
  const data = await response.json();

  return data;
};

export { getAllUser, getOneUser };
