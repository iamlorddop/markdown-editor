interface ILocale {
	code: string;
	name: string;
}

export const locales: ILocale[] = [
	{ code: 'ru', name: 'Русский' },
	{ code: 'en', name: 'English' },
	{ code: 'de', name: 'Deutsch' },
	{ code: 'fr', name: 'Français' },
	{ code: 'es', name: 'Español' },
	{ code: 'it', name: 'Italiano' },
];

export const defaultLocale = locales[0].code;
