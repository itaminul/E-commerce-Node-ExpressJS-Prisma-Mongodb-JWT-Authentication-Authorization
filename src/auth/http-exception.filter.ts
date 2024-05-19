import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status = exception.getStatus();
    const message = exception.message;

    if (status === HttpStatus.FORBIDDEN) {
      response.status(status).json({
        success: false,
        status,
        message: 'Forbidden',
      });
    } else {
      response.status(status).json({
        success: false,
        status,
        message,
      });
    }
  }
}
