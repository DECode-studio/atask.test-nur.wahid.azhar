import { makeAutoObservable } from "mobx";
import { MenuModel } from "../../model/menu";
import MenuDataController from "../data/menu";
import { RepoGithubModel, UserGithubModel } from "../../model/github";
import GithubDataController from "../data/github";

class MainPageController {
    menuData = new MenuDataController()
    githubData = new GithubDataController()

    txtSearch: string = ''
    searchData: string = ''
    selectedUser: UserGithubModel = {}

    listMenu: MenuModel[] = []
    listUser: UserGithubModel[] = []
    listRepo: RepoGithubModel[] = []

    loadData = true

    constructor() {
        makeAutoObservable(this);
    }

    getData = async () => {
        this.loadData = true
        this.listMenu = await this.menuData.generateMenu()
        this.loadData = false
    }

    actionMethod = async (
        mode: string,
        data?: any
    ) => {
        if (mode == 'search-data') {
            this.txtSearch = data
        }

        if (mode == 'search') {
            this.loadData = true
            this.searchData = this.txtSearch
            this.listUser = await this.githubData.getListUser(this.searchData.toLowerCase())
            this.loadData = false
        }

        if (mode == 'select-user') {
            this.loadData = true
            this.selectedUser = data
            this.listRepo = []
            this.listRepo = await this.githubData.getListRepository(this.selectedUser.login ?? '')
            this.loadData = false
        }
    }
}

export default MainPageController