import { StarIcon, WebProgrammingIcon } from "hugeicons-react"
import MainPageController from "../../service/controller/page/main-page-controller"
import { RepoGithubModel } from "../../service/model/github"
import { observer } from "mobx-react-lite"

type Props = {
    controller: MainPageController
    data: RepoGithubModel
}

const RepoItem = observer(({
    data,
}: Props) => {
    return (
        <div className="border-t border-green-500 max-w-full">
            <div
                className="flex justify-between items-center text-left text-xl font-normal text-gray-600 py-4 transition duration-500 hover:text-cyan-700"

            >
                <div className="flex flex-row justify-center items-center w-full">

                    <div
                        className="aspect-square w-10 h-10 bg-green-500 rounded-full flex items-center justify-center"
                    >
                        <WebProgrammingIcon className="text-white w-4 h-4 lg:w-6 lg:h-6" />
                    </div>

                    <div className="flex flex-col ml-3">
                        <h5 className={`text-green-500`}>
                            {data.name ?? ''}
                        </h5>

                        <a
                            href={data.html_url ?? ''}
                            className="text-green-500 text-xs"
                            target="_blank"
                        >
                            {data.full_name ?? ''}
                        </a>

                        <p className="text-white text-xs">
                            {data.description ?? ''}
                        </p>
                    </div>

                    <div className="flex-grow"></div>

                    <div className="flex flex-row mb-5 ml-10 items-center justify-center">
                        <p className="text-green-500 text-lg mr-2">
                            {data.stargazers_count}
                        </p>

                        <div
                            className="aspect-square w-5 h-5 bg-green-500 rounded-full flex items-center justify-center"
                        >
                            <StarIcon className="text-white w-3 h-3" />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
})

export default RepoItem