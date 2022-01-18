export const required = (value: any) =>
  value || typeof value === 'number' ? undefined : `required`;

export const requiredLabel = (label: string) => (value: any) =>
  value || typeof value === 'number' ? undefined : `No ${label} was entered.`;

export const maxLength = (max: any, type?) => (value: any) =>
  value && value.length > max
    ? `Must be ${max} ${type === 'number' ? 'digits' : 'characters'} or less`
    : undefined;

export const minLength = (min: any, type?) => (value: any) =>
  value && value.length < min
    ? `Must be ${min} ${type === 'number' ? 'digits' : 'characters'} or more`
    : undefined;

export const number = (value: any) =>
  value && isNaN(Number(value)) ? `Must be a number` : undefined;

export const minValue = (min: any) => (value: any) =>
  value && value < min ? `Must be at least ${min} ` : undefined;

export const maxValue = (max: any) => (value: any) =>
  value && value > max ? `Must be ${max} or less. ` : undefined;

export const email = (value: any) =>
  value &&
  // eslint-disable-next-line no-control-regex
  !/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i.test(
    value
  )
    ? `Please enter valid email address`
    : undefined;

export const alphaNumeric = (value: any) =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? `Only alphanumeric characters`
    : undefined;

export const phoneNumber = (value: any) =>
  value && !/^([0-9])+$/.test(value)
    ? `Please enter valid phone number`
    : undefined;

export const maxEmailLength = (value: string) => maxLength(254)(value);

export const minEmailLength = (value: string) => minLength(5)(value);
