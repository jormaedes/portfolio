import {create} from "zustand";

interface LangStore {
    lang: 'pt' | 'en';
    toggleLang: () => void;
}

const useLangStore = create<LangStore>((set) => ({
    lang: "pt",
    toggleLang: () => set((state) => ({ lang: state.lang === "pt" ? "en" : "pt" })),
}));

export default useLangStore;