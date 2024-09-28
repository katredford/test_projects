import { useEffect, useState } from 'react';
import { setToLS, getFromLS } from '../utils/storage';
import _ from 'lodash';

interface Theme {
    [key: string]: { font: string };
}

interface ThemesData {
    data: {
        light: Theme;
        [key: string]: Theme;
    };
}

export const useTheme = () => {
    const themes: ThemesData = getFromLS('all-themes');
    const [theme, setTheme] = useState<Theme>(themes.data.light);
    const [themeLoaded, setThemeLoaded] = useState<boolean>(false);

    const setMode = (mode: Theme) => {
        setToLS('theme', mode);
        setTheme(mode);
    };

    const getFonts = (): string[] => {
        const allFonts = _.values(_.mapValues(themes.data, 'font'));
        return allFonts;
    };

    useEffect(() => {
        const localTheme = getFromLS('theme') as Theme | null;
        localTheme ? setTheme(localTheme) : setTheme(themes.data.light);
        setThemeLoaded(true);
    }, [themes]);

    return { theme, themeLoaded, setMode, getFonts };
};
