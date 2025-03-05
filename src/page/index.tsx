import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import MainPageController from "../service/controller/page/main-page-controller";
import Navbar from "../components/navbar";
import ScreenPage from "./components/screen";
import { LoadDialog } from "../components/load";

const controller = new MainPageController();

const MainPage = observer(() => {
    useEffect(() => {
        controller.getData()
    }, [])

    return (
        <>
            <div className="min-h-screen min-w-full container bg-black">

                <Navbar controller={controller} />
                <ScreenPage controller={controller} />

            </div>
            
            <LoadDialog isOpen={controller.loadData} />
        </>
    )
})


export default MainPage