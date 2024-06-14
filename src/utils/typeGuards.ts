// src/utils/typeGuards.ts
import { ValidationError } from 'express-validator';

export function isValidationError(err: any): err is ValidationError {
  return (
    err &&
    typeof err.param === 'string' &&
    typeof err.msg === 'string' &&
    'value' in err
  );
}
