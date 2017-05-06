import { ErrorHandler } from '@angular/core';

export default class AppErrorHandler extends ErrorHandler {
  constructor() {
    // We rethrow exceptions, so operations like 'bootstrap' will result in an error
    // when an error happens. If we do not rethrow, bootstrap will always succeed.
    super(true);
  }

  handleError(error) {
    console.log('error', error);
    super.handleError(error);
  }
}