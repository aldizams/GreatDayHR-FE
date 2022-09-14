import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/pinjam';

const getAllRuangan = () => {
	return axios.get(`${BASE_URL}/ruangan`);
};

const getByIdRuangan = (id) => {
	return axios.get(`${BASE_URL}/ruangan/${id}`);
};

const getAllJadwal = () => {
	return axios.get(`${BASE_URL}`);
};
const getByIdJadwal = (id) => {
	return axios.get(`${BASE_URL}/${id}`);
};
const deleteJadwal = (id) => {
	return axios.delete(`${BASE_URL}/${id}`);
};
const addJadwal = (bodyJSON) => {
	return axios.post(`${BASE_URL}`, bodyJSON);
};
export {
	getAllRuangan,
	getByIdRuangan,
	getAllJadwal,
	getByIdJadwal,
	deleteJadwal,
	addJadwal,
};
