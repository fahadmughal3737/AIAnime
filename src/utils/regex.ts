
export const regex = {
    EMAILREGEX: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    ONENUMBERREGEX: /^(?=.*[0-9]).+$/,
    EIGHTCHARACTERSREGEX: /^.{8,}$/,
    SPECIALCHARACTERREGEX: /^(?=.*[!@#$%^&*]).+$/,
    UPPERCASELETTERREGEX: /^(?=.*[A-Z]).+$/, //at least one uppercase letter
    LOWERCASELETTERREGEX: /^(?=.*[a-z]).+$/, //at least one lowercase letter
}
export const ValidationCheck = (Regex: RegExp, checkString: string) => {
    if (Regex.test(checkString)) {
        return true;
    }
    else {
        return false;
    }
}

export const allValidations = [
    `Minimum eight characters`,
    `At least one lowercase letter`,
    `At least one uppercase letter`,
    `At least one number`,
    `At least 1 special character:
    ! & # $ % & *`
]
