import { checkError, client } from './client.js';

export async function getSnips() {
  const response = await client.from('snips').select();
  return checkError(response);
}

export async function createSnip(name, body) {
  const response = await client.from('snips').insert([{ name, body }]).single();
  return checkError(response);
}

export async function heartSnip(id, heart) {
  const newValue = heart ? false : true;
  const response = await client.from('snips').update({ heart: newValue }).match('id', id).single();
  return checkError(response);
}

export async function editSnip(id, newBody) {
  const response = await client.from('snips').update({ body: newBody }).match('id', id).single();
  return checkError(response);
}

export async function deleteSnip(id) {
  const response = await client.from('snips').delete().match(id);
  return checkError(response);
}
