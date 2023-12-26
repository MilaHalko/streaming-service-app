export function nameIsValid(name) {
    const minLength = 3;
    const isAlphanumeric = /^[a-zA-Z0-9_]+$/.test(name);

    if (name.length < minLength) {
        alert("Nickname must be at least 3 characters long");
        return false;
    }
    if (!isAlphanumeric) {
        alert("Nickname must contain only letters, numbers and underscores");
        return false;
    }
    return true;
}


export function passwordIsValid(password) {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);

    if (password.length < minLength) {
        alert("Password must be at least 8 characters long");
        return false;
    }
    if (!hasUpperCase) {
        alert("Password must contain at least one uppercase letter");
        return false;
    }
    if (!hasLowerCase) {
        alert("Password must contain at least one lowercase letter");
        return false;
    }
    if (!hasDigit) {
        alert("Password must contain at least one digit");
        return false;
    }
    return true;
}

export function passwordIsConfirmed(password, confirmPassword) {
    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return false;
    }
    return true;
}

