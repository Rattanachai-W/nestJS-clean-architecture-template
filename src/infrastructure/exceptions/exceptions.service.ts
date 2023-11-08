import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import {
  InterfaceException,
  InterfaceFormatExceptionMessage,
} from '../../domain/exceptions/exceptions.interface';

@Injectable()
export class ExceptionsService implements InterfaceException {
  badRequestException(data: InterfaceFormatExceptionMessage): void {
    throw new BadRequestException(data);
  }
  internalServerErrorException(data?: InterfaceFormatExceptionMessage): void {
    throw new InternalServerErrorException(data);
  }
  forbiddenException(data?: InterfaceFormatExceptionMessage): void {
    throw new ForbiddenException(data);
  }
  UnauthorizedException(data?: InterfaceFormatExceptionMessage): void {
    throw new UnauthorizedException(data);
  }
}
