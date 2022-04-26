import axios from 'axios';

export async function getAssets() {
  try {
    const { data } = await axios.get('http://localhost:3001/assets');

    return data;
  } catch (error) {
    return error;
  }
}

export async function createAsset(asset) {
  try {
    const { data } = await axios.post('http://localhost:3001/assets', asset);

    return data;
  } catch (error) {
    return error;
  }
}

export async function updateAsset(asset) {
  try {
    const { data } = await axios.put(`http://localhost:3001/assets/${asset.id}`, asset);

    return data;
  } catch (error) {
    return error;
  }
}

export async function deleteAsset(assetId) {
  try {
    const { data } = await axios.delete(`http://localhost:3001/assets/${assetId}`);

    return data;
  } catch (error) {
    return error;
  }
}
