import { HttpInterceptorFn } from '@angular/common/http';

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem("token");
  if(token && ["PUT","DELETE","GET","POST"].includes(req.method)){
    const modifyreq = req.clone({setHeaders:{Authorization:`Bearer ${token}`}});
    return next(modifyreq);
  }
  return next(req); 
};
