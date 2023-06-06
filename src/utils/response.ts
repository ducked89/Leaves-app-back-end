export class Response<T> {
  success: boolean;
  error?: any;
  data?: T;
}
