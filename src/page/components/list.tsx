import { useState } from "react";
import { observer } from "mobx-react-lite";

import ItemData from "./item";
import MainPageController from "../../service/controller/page/main-page-controller";

type Props = {
    controller: MainPageController
}

const ListData = observer(({ controller }: Props) => {
    const [activeIndex, setActiveIndex] = useState<string | null>(null);

    const toggleAccordion = (id: string) => {
        setActiveIndex(activeIndex === id ? null : id);
    };

    return (
        <div className="mt-5 lg:mt-10 mx-5 lg:mx-0">
            <div className="mb-6">
                <h2 className="text-xl lg:text-2xl text-start font-bold text-green-500 leading-[3.25rem] mb-5 lg:text-left">
                    {
                        controller.searchData == ''
                            ? 'Search data'
                            : `Showing users for "${controller.searchData}"`
                    }
                </h2>
            </div>

            <div className="accordion-group" data-accordion="default-accordion">

                {
                    controller.listUser.map((e) => (
                        <ItemData
                            key={e.id}
                            controller={controller}
                            data={e}
                            isActive={activeIndex === `${e.id}`}
                            toggleAccordion={toggleAccordion}
                        />
                    ))
                }

            </div>
        </div>
    )
})

export default ListData