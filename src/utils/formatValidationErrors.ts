// src/utils/formatValidationErrors.ts
import { ValidationError } from 'express-validator';

export interface ExtractedErrors {
  [key: string]: string;
}


export const formatValidationErrors = (errors: ValidationError[]): ExtractedErrors => {
  const extractedErrors: ExtractedErrors = {};
  errors.forEach((err) => {
    if (isValidationError(err)) {
      const validationError = err as ValidationError;
      extractedErrors[validationError.msg ] = validationError.msg;
    }
  });
  return extractedErrors;
};

function isValidationError(err: any): err is ValidationError {
    return err && typeof err.param === 'string' && typeof err.msg === 'string';
  }
