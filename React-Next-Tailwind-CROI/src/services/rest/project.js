import axios from 'axios';
import endPoints from './api';
/*
const addProduct = async (body) => {
  const config = {
    headers: {
      accept: '',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.post(endPoints.products.addProducts, body, config);
  return response.data;
};
*/

/*
const deleteProduct = async (id) => {
  const response = await axios.delete(endPoints.products.deleteProduct(id));
  return response.data;
};
*/

const updateProject = async (id, body) => {
    const config = {
        headers: { Authorization: `Bearer ${document.cookie}` }
    }
    const response = await axios.patch(endPoints.project.project_update(id), body, config);
    return response.data;
};

export { updateProject };