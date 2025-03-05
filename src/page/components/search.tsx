import { observer } from "mobx-react-lite"
import MainPageController from "../../service/controller/page/main-page-controller"
import { Search02Icon } from "hugeicons-react"

type Props = {
    controller: MainPageController
}

const SearchEngine = observer(({ controller }: Props) => {
    return (
        <div className="mx-5 lg:mx-0">

            <div className="flex flex-row space-x-2 p-1 lg:p-2 rounded-full border-3 border-green-500">
                <input
                    type="text"
                    placeholder="Search here..."
                    className="ml-5 w-full border-0 focus:border-0 focus:ring-0 focus:outline-none text-white text-md lg:text-lg"
                    onChange={(e) => controller.actionMethod('search-data', e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            controller.actionMethod('search');
                        }
                    }}
                />

                <button
                    className="aspect-square w-10 h-10 lg:w-14 lg:h-14 bg-green-500 rounded-full flex items-center justify-center"
                    onClick={() => controller.actionMethod('search')}
                >
                    <Search02Icon className="text-white w-4 h-4 lg:w-6 lg:h-6" />
                </button>
            </div>

        </div>
    )
})

export default SearchEngine