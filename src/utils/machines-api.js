import request from 'superagent';

const URL = '/api/machines';

export async function getMachines() {
  const response = await request.get(URL);
  return response.body;
}

export async function getMachine(id) {
  const response = await request.get(`${URL}/${id}`);
  return response.body;
}