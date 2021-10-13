import * as yup from 'yup';
/*
let schema = yup.object().shape({
    phone: yup.number().required().positive().integer(),
    dni: yup.number().required().positive().integer(),
});*/


export const emailValidation = async (text) => {
    let schema = yup.object().shape({
        email: yup.string().email().required(),
    });
    return await schema
        .isValid({
            email: text,
        })

}

export const nameValidation = async (text) => {
    let schema = yup.object().shape({
        name: yup.string().required(),
    });
    return await schema
        .isValid({
            name: text,
        })

}

export const lastNameValidation = async (text) => {
    let schema = yup.object().shape({
        lastName: yup.string().required(),
    });
    return await schema
        .isValid({
            lastName: text,
        })

}

export const addressValidation = async (text) => {
    let schema = yup.object().shape({
        address: yup.string().required(),
    });
    return await schema
        .isValid({
            address: text,
        })

}

export const cityValidation = async (text) => {
    let schema = yup.object().shape({
        city: yup.string().required(),
    });
    return await schema
        .isValid({
            city: text,
        })

}

export const phoneValidation = async (number) => {
    let schema = yup.object().shape({
        phone: yup.string().required(),
    });
    return await schema
        .isValid({
            phone: number,
        })

}

export const dniValidation = async (number) => {
    let schema = yup.object().shape({
        dni: yup.number().required().positive().integer(),
    });
    return await schema
        .isValid({
            dni: number,
        })

}