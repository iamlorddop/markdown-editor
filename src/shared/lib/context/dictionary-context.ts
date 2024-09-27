import { createContext } from 'react';

import { DictionaryType } from '@/shared/i18n';

export interface DictionaryContextProps {
	dictionary: DictionaryType;
	lang: string;
}

export const DictionaryContext = createContext<DictionaryContextProps>({} as DictionaryContextProps);
