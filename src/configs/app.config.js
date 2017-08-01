configuration.$inject = ['$mdThemingProvider'];

export default function configuration($mdThemingProvider) {
    /**
     * Color Palettes definition
     **/
	const unoSquareBlue = {
        '50': '#69e1f5',
		'100': '#52dcf3',
		'200': '#3ad7f2',
		'300': '#22d3f0',
		'400': '#10cae9',
        '500': 'rgb(14, 181, 209)',
		'600': '#0ca0b9',
		'700': '#0b8ca1',
		'800': '#097789',
		'900': '#086271',
		'A100': '#81e6f7',
		'A200': '#99ebf8',
		'A400': '#b1effa',
		'A700': '#064d59'
    };
	const unoSquareGrey = {
		'50': '#404040',
		'100': '#333333',
		'200': '#262626',
		'300': '#1a1a1a',
		'400': '#0d0d0d',
		'500': 'rgba(0, 0, 0, 0.7)',
		'600': '#000000',
		'700': '#000000',
		'800': '#000000',
		'900': '#000000',
		'A100': '#4d4d4d',
		'A200': '#595959',
		'A400': '#666666',
		'A700': '#000000'
    };
	$mdThemingProvider.definePalette('unoSquareBlue', unoSquareBlue);
	$mdThemingProvider.definePalette('unoSquareGrey', unoSquareGrey);

    /**
     * Setting color palettes to be used in each color intention of a theme
     *      - amd predefined palette or customized palette
     **/
	$mdThemingProvider.theme('default')
		.primaryPalette('unoSquareBlue')
		.accentPalette('pink')
		.warnPalette('orange');
	$mdThemingProvider.theme('sideBarTheme')
		.primaryPalette('lime')
		.accentPalette('unoSquareGrey');
};