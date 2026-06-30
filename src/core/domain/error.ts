/**
 * Base class for all domain exceptions.
 */
export abstract class Exception extends Error {
  constructor(
    message: string,
    public code?: string
  ) {
    super(message);
    this.name = this.constructor.name;
  }
}

/**
 * Thrown when a resource is not found.
 */
export class NotFoundError extends Exception {
  constructor(resource: string, id: string | number) {
    super(`${resource} with ID ${id} not found`);
    this.code = 'NOT_FOUND';
  }
}

/**
 * Thrown when you're not authorized to make an action.
 */
export class UnauthorizedError extends Exception {
  constructor(message?: string) {
    super(message ?? `You're not authorized`);
    this.code = 'UNAUTHORIZED';
  }
}
