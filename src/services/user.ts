import axios from '@/utils/axios'; // Assurez-vous d'importer l'instance d'Axios depuis le bon emplacement

export const api = {
    async fetchData(ressources: string) {
        try {
            const response = await axios.get(`/${ressources}`);
            console.log(response.data);
            return response;
        } catch (error) {
            console.error('Une erreur s\'est produite :', error);
        }
    },
    async update(data: any, ressources: string) {
        try {
            const response = await axios.put(`${ressources}/${data.id}`, data);
            console.log(response.data);
            return response;
        } catch (error) {
            console.error('Une erreur s\'est produite :', error);
        }
    },
    async remove(id: number | undefined, ressources: string) {
        try {
            const response = await axios.delete(`${ressources}/${id}`);
            console.log(response.data);
            return response;
        } catch (error) {
            console.error('Une erreur s\'est produite :', error);
        }
    },
    async create(data: any, ressources: string) {
        try {
            const response = await axios.post(`${ressources}`, data);
            console.log(response.data);
            return response;
        } catch (error) {
            console.error('Une erreur s\'est produite :', error);
        }
    }
}
