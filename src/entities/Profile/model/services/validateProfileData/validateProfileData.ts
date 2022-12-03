import { Profile, ValidateProfileError } from '../../types/profile';

export const validateProfileData = (profile?: Profile) => {
  if (!profile) {
    return [ValidateProfileError.NO_DATA];
  }

  const {
    firstname, lastname, age, country,
  } = profile;

  const errors: ValidateProfileError[] = [];

  if (!firstname || !lastname) {
    errors.push(ValidateProfileError.INCORRECT_USER_DATA);
  }

  if ((firstname && firstname.length < 2) || (lastname && lastname.length < 2)) {
    errors.push(ValidateProfileError.INCORRECT_NAME_LENGTH);
  }

  if (!country) {
    errors.push(ValidateProfileError.INCORRECT_COUNTRY);
  }

  if (!age || !Number.isInteger(age)) {
    errors.push(ValidateProfileError.INCORRECT_AGE);
  }

  if ((age && age < 16) || (age && age > 90)) {
    errors.push(ValidateProfileError.INCORRECT_AGE_RANGE);
  }
  return errors;
};
