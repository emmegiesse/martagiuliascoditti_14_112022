export const createRow = (
    firstName,
    lastName,
    birthDate,
    startDate,
    department,
    street,
    city,
    state,
    zipCode
    ) => {
    return {
        firstName,
        lastName,
        birthDate,
        startDate,
        department,
        street,
        city,
        state,
        zipCode,
    };
};

export default createRow