import { ArrowUp01Icon } from "hugeicons-react";

import MainPageController from "../../service/controller/page/main-page-controller";
import { UserGithubModel } from "../../service/model/github";
import RepoItem from "./repo";
import { observer } from "mobx-react-lite";

type Props = {
    controller: MainPageController
    data: UserGithubModel
    isActive: boolean,
    toggleAccordion: any
}

const ItemData = observer(({
    controller,
    data,
    isActive,
    toggleAccordion
}: Props) => {

    const hitData = () => {
        toggleAccordion(`${data.id ?? ''}`)
        controller.actionMethod('select-user', data)
    }

    return (
        <div className="border-b border-green-500 w-full">
            <button
                className="flex justify-between items-center w-full text-left text-xl font-normal text-gray-600 py-4 transition duration-500 hover:text-cyan-700"
                onClick={() => hitData()}
            >
                <div className="flex flex-row justify-center items-center">

                    <img
                        src={data.avatar_url ?? ''}
                        alt={data.login ?? ''}
                        className="aspect-square w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center mr-5"
                    />

                    <div className="flex flex-col">
                        <h5 className={` ${isActive ? 'font-semibold text-green-500' : 'font-normal text-white'}`}>
                            {data.login ?? ''}
                        </h5>

                        <a
                            href={data.html_url ?? ''}
                            className="text-green-500 text-xs"
                            target="_blank"
                        >
                            {data.html_url ?? ''}
                        </a>
                    </div>

                </div>
                <ArrowUp01Icon
                    className={`w-5 h-5 transition-transform duration-500 ${isActive ? 'rotate-180 text-green-500' : 'text-green-500'}`}
                />

            </button>
            <div
                className={`overflow-hidden transition-max-height duration-500 ${isActive ? 'min-h-40' : 'max-h-0'} w-screen`}
            >
                <div className="p-4">
                    {
                        controller.listRepo.map((e) => (
                            <RepoItem
                                controller={controller}
                                data={e}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
})

export default ItemData