import axios from "axios";
import {
    RepoGithubModel,
    UserGithubModel,
    UserGithubResponse
} from "../../model/github";

class GithubDataController {

    getListUser = async (
        userKey: string
    ): Promise<UserGithubModel[]> => {
        let listData: UserGithubModel[] = []

        try {
            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: `https://api.github.com/search/users?q=${userKey}&per_page=5`,
            };

            let response = await axios<UserGithubResponse>(config)
            listData = response?.data?.items ?? []

            return listData
        } catch (error: any) {
            console.log(error);
            return listData
        }
    }

    getListRepository = async (
        userKey: string
    ): Promise<RepoGithubModel[]> => {
        let listData: RepoGithubModel[] = []

        try {
            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: `https://api.github.com/users/${userKey}/repos?per_page=5`,
            };

            let response = await axios<RepoGithubModel[]>(config)
            listData = response?.data ?? []

            return listData
        } catch (error: any) {
            console.log(error);
            return listData
        }
    }

}

export default GithubDataController