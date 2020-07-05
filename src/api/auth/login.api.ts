import api from '../../settings/axios.settings';

const loginApi = async () => {
    const response = await api.post('/api/login');
    return response;
}

export {
    loginApi
}