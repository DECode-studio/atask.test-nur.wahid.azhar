import { observer } from "mobx-react-lite"
import MainPageController from "../../service/controller/page/main-page-controller"
import SearchEngine from "./search"
import ListData from "./list"

type Props = {
    controller: MainPageController
}

const ScreenPage = observer(({ controller }: Props) => {
    return (
        <div className="h-screen flex mt-24 lg:mt-32">
            <div className="flex flex-col w-screen px-0 lg:px-48">

                <SearchEngine controller={controller} />
                <ListData controller={controller} />

            </div>
        </div>
    )
})

export default ScreenPage