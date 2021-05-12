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

export async function addMachine(machine) {
  const response = await request.post(URL).send(machine);
  return response.body;
}

export async function deleteMachine(id) {
  const response = await request.delete(`${URL}/${id}`);
  return response.body;
}