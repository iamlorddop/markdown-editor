import { useContext } from 'react';

import { DictionaryContext, DictionaryContextProps } from '@/shared/lib/context';

export const useDictionary = (): DictionaryContextProps => {
	const context = useContext(DictionaryContext);

	if (!context) {
		throw new Error('[!] useDictionary must be used within a DictionaryProvider');
	}

	return context;
};
