import axios from 'axios';
async function get(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  }
  catch (e) {
    throw e;
  }
}
async function patch(url, data) {
  try {
    const response = await axios.patch(url, data);
    return response.data;
  }
  catch (e) {
    throw e;
  }
}

async function sleep(time = 500) {
  return new Promise(resolve => {
    setTimeout(() => resolve(), time);
  })
}

export { get, patch, sleep };
