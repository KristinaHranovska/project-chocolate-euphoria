import { colorVariables } from './selectStyles';

const {
    primaryModalColor,
    primaryMainColor,
    primaryInputColor,
    primaryPlaceholderColor,
    primaryBlackColor,
    scrollbarColor
} = colorVariables;

const customStyles = {
    control: (provided, state) => ({
        ...provided,
        width: '100%',
        borderRadius: '8px',
        backgroundColor: primaryModalColor,
        outline: 'transparent',
        color: primaryMainColor,
        appearance: 'none',

        paddingLeft: 8,
        paddingTop: 4,
        paddingBottom: 4,

        border: state.isFocused
            ? `1px solid ${primaryMainColor}`
            : `1px solid ${primaryInputColor}`,
        boxShadow: state.isFocused ? `0 0 5px rgba(0, 0, 0, 0.3)` : 'none',
        '&:hover': {
            border: `1px solid ${primaryMainColor}`,
        },
    }),
    placeholder: (provided) => ({
        ...provided,
        color: `${primaryPlaceholderColor}`,
    }),
    singleValue: (provided) => ({
        ...provided,
        color: `${primaryBlackColor}`,
    }),
    menu: (provided) => ({
        ...provided,
        backgroundColor: `${primaryModalColor}`,
    }),
    menuList: (provided) => ({
        ...provided,
        maxHeight: 180,
        '&::-webkit-scrollbar': {
            width: 4,
        },
        '&::-webkit-scrollbar-track': {
            backgroundColor: scrollbarColor,
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: primaryMainColor,
            borderRadius: 6,
        },
    }),
    option: (provided, state) => ({
        ...provided,
        paddingLeft: 18,
        paddingTop: 13,
        paddingBottom: 13,
        cursor: 'pointer',
        backgroundColor: state.isSelected
            ? `${primaryMainColor}`
            : 'transparent',
        color: state.isSelected
            ? `${primaryBlackColor}`
            : `${primaryBlackColor}`,
        '&:hover': {
            backgroundColor: state.isSelected
                ? `${primaryMainColor}`
                : `${primaryMainColor}`,
            color: `${primaryBlackColor}`,
        },
    }),
};

export default customStyles;