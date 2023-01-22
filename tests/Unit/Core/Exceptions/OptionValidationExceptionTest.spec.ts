import { describe, expect, it, beforeEach, jest } from '@jest/globals'
import { OptionValidationException } from "@Core/Exceptions/OptionValidationException";

describe('Core/Exceptions/OptionValidationException', () => {
  it('should use the default message when one is not supplied', () => {
    const message: string | undefined = undefined;
    const expectedMessage: string = OptionValidationException.DEFAULT_MESSAGE

    const exception = new OptionValidationException(message);

    expect(exception.message).toEqual(expectedMessage)
  })

  it('should set the message if passed thought', () => {
    const message: string | undefined = 'Test'; // @todo change for faker
    const expectedMessage: string = message

    const exception = new OptionValidationException(message);

    expect(exception.message).toEqual(expectedMessage)
  })
});