import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";



export default function useTheme() {
    const context = useContext(ThemeContext)
    if (context === undefined) {
        throw new Error('Context must be defined')
    }

    return context;
}
