const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateProfileInput(data) {
    let errors = {};


    data.handle = !isEmpty(data.handle) ? data.handle : '';
    data.status = !isEmpty(data.status) ? data.status : '';
    data.skills = !isEmpty(data.skills) ? data.skills : '';


if(!Validator.isLength(data.handle,{min: 2, max: 40})) {
    errors.handle = 'Handle needs to be 2 to 4 characters'
}

 if (Validator.isEmpty(data.handle)) {
        errors.handle = 'Profile handle required'
    }

    if (Validator.isEmpty(data.status)) {
        errors.status = 'Status field required'
    }

    if (Validator.isEmpty(data.skills)) {
        errors.skills = 'skills field is requires'
    }


    if(!isEmpty(data.website)) {
        if (!Validator.isURL(date.website)) {
            errors.website =  'Not a valid url'
        }
    }

    if (!isEmpty(data.youtube)) {
        if (!Validator.isURL(date.youtube)) {
            errors.youtube = 'Not a valid url'
        }
    }


    if (!isEmpty(data.twitter)) {
        if (!Validator.isURL(date.twitter)) {
            errors.twitter = 'Not a valid url'
        }
    }


    if (!isEmpty(data.facebook)) {
        if (!Validator.isURL(date.facebook)) {
            errors.facebook = 'Not a valid url'
        }
    }


    if (!isEmpty(data.linkedin)) {
        if (!Validator.isURL(date.linkedin)) {
            errors.linkedin = 'Not a valid url'
        }
    }

    if (!isEmpty(data.instagram)) {
        if (!Validator.isURL(date.instagram)) {
            errors.instagram = 'Not a valid url'
        }
    }







    return {
        errors,
        isValid: isEmpty(errors)
    };

};