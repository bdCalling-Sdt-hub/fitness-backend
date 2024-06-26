import { ZodError, ZodIssue } from 'zod';
import { IGenericErrorResponse } from '../interfaces/common';
import IGenericErrorMessage from '../interfaces/error';

export const handleZodError = (error: ZodError): IGenericErrorResponse => {
  const errors: IGenericErrorMessage[] = error.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue.path.length - 1],
      message: issue?.message,
    };
  });

  const combinedMessages = errors.map(e => e.message).join(', ');

  const statusCode = 400;
  return {
    statusCode,
    message: `Validation Error: ${combinedMessages}`,
    errorMessages: errors,
  };
};
