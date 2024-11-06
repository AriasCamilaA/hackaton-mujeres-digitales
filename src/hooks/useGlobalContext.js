import { useContext } from "react";
import GlobalContext from "../context/globalContext";

export const useGlobalContextHook = () => {
    const context = useContext(GlobalContext);

    if (!context) {
        throw new Error("useGlobalContextHook debe ser utilizado dentro de GlobalContextProvider");
    }

    const { data, setData } = context;

    const get = (key) => data[key] ?? undefined;
    const set = (key, value) => setData((prev) => ({ ...prev, [key]: value }));
    const remove = (key) => {
        const { [key]: _, ...rest } = data;
        setData(rest);
    };
    const clear = () => setData({});

    return { get, set, remove, value: data, clear };
};
