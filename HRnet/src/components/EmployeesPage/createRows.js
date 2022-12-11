export const createRows = (
    firstName,
    lastName,
    startDate,
    department,
    birthDate,
    street,
    city,
    state,
    zipCode
    ) => {
    return {
        firstName,
        lastName,
        startDate,
        department,
        birthDate,
        street,
        city,
        state,
        zipCode,
    };
};

export default createRows
