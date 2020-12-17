import { StyleSheet } from 'react-native';

export type AmplifyThemeType = Record<string, any>;

export const primary = '#024E99';
export const primary2 = '#02ADED';
export const primary3 = '#FFBB00';
export const primary4 = '#C70136';
export const secondary = '#CACECE';
export const secondary2 = '#E5E7E9';
export const linkUnderlayColor = '#FFF';
export const textInputColor = '#000000';
export const textInputBorderColor = '#C4C4C4';
export const placeholderColor = '#C7C7CD';
export const primaryButtonColor = '#152939';
export const disabledButtonColor = '#ff990080';



const LocalAmplifyTheme = StyleSheet.create({
	primary: { color: primary},
	primary2: {color: primary2},
	primary3: {color: primary3},
	primary4: {color: primary4},
	secondary: {color: secondary},
	secondary2: {color: secondary2},
    container: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-around',
		paddingTop: 20,
		width: '100%',
	},
	section: {
		flex: 1,
		width: '100%',
		justifyContent: 'space-between',
		paddingHorizontal: 20,
	},
	sectionScroll: {
		flex: 1,
		width: '100%',
		paddingHorizontal: 20,
	},
	sectionHeader: {
		width: '100%',
		marginBottom: 32,
		paddingTop: 20,
	},
	sectionHeaderText: {
		color: primary,
		fontSize: 24,
		fontWeight: '500',
	},
	sectionFooter: {
		width: '100%',
		padding: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 15,
		marginBottom: 30,
	},
	sectionFooterLink: {
		fontSize: 14,
		color: primaryButtonColor,
		alignItems: 'baseline',
		textAlign: 'center',
	},
	sectionFooterLinkDisabled: {
		fontSize: 14,
		color: disabledButtonColor,
		alignItems: 'baseline',
		textAlign: 'center',
	},
	navBar: {
		marginTop: 16,
		padding: 15,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	navButton: {
		marginLeft: 12,
		borderRadius: 3,
	},
	cell: {
		flex: 1,
		width: '50%',
	},
	errorRow: {
		flexDirection: 'row',
		justifyContent: 'center',
	},
	errorRowIcon: {
		height: 25,
		width: 25,
	},
	errorRowText: {
		marginLeft: 10,
	},
	photo: {
		width: '100%',
	},
	album: {
		width: '100%',
	},
	signInButton: {
        color: primary,
		borderColor: '#fff',
		borderRadius: 30,
		opacity: .15
	},
	button: {
		backgroundColor: primary,
		alignItems: 'center',
		padding: 16,
		borderRadius: 10
	},
	buttonDisabled: {
		backgroundColor: disabledButtonColor,
		alignItems: 'center',
		padding: 16,
	},
	buttonText: {
		color: '#fff',
		fontSize: 14,
		fontWeight: '200',
	},
	formField: {
		marginBottom: 22,
	},
	input: {
		padding: 16,
		borderWidth: 2,
		borderRadius: 3,
		borderColor: textInputBorderColor,
		color: textInputColor,
	},
	inputLabel: {
		marginBottom: 8,
	},
	phoneContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
	phoneInput: {
		flex: 2,
		padding: 16,
		borderWidth: 1,
		borderRadius: 3,
		borderColor: textInputBorderColor,
		color: textInputColor,
	},
	picker: {
		flex: 1,
		height: 44,
	},
	pickerItem: {
		height: 44,
	},
	signedOutMessage: {
		textAlign: 'center',
		padding: 20,
    },
	formContainer: {},
	formSection: {},

	sectionBody: {},
	sectionFooterPrimaryContent: {},
	sectionFooterSecondaryContent: {},

	photoPickerButton: {},
	photoPlaceholder: {},
	
	signInButtonIcon:{},
	signInButtonContent: {
        display: 'flex',
        padding: '18px 0',
	    overflow: 'hidden',
	    textAlign: 'center',
    },
	amazonSignInButton: {
		color: secondary,
		shadowColor: '#C4C4C4'
	},
	facebookSignInButton: {},
	googleSignInButton: {},
	oAuthSignInButton: {},

	formRow: {},
	strike: {},
	strikeContent: {},
	actionRow: {},
	a: {},

	hint: {},
	radio: {},
	label: {},
	toast: {},

	nav: {},
	navRight: {},
	navItem: {}
});

export {LocalAmplifyTheme};