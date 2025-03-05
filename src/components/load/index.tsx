import { CSSProperties } from "react";
import { HashLoader } from "react-spinners";

export const LoadData = () => {
    const override: CSSProperties = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
    };
    
    const color = '#008F44';

    return (
        <div
            className="fixed inset-0 flex items-center justify-center"
            style={{ transform: "translate(-50%, -50%)", top: "50%", left: "50%" }}
        >
            <HashLoader
                color={color}
                loading={true}
                cssOverride={override}
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
                className="text-green-500"
            />
        </div>
    );
};

export const LoadDialog = (props: { isOpen: boolean }) => {
    const { isOpen } = props;

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
            <div className="bg-transparent rounded-lg p-6">
                <LoadData />
            </div>
        </div>
    );
};