import { Injectable, inject } from '@angular/core';
import {
  CanActivateFn,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { AccountService } from '../../shared/services/account.service';

@Injectable({
  providedIn: 'root',
})
export class AuthguardService {
  static canActivate: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) => {
    const authService = inject(AccountService);
    const router = inject(Router);

    if (authService.authenticationStatus()) {
      return true;
    } else {
      router.navigate(['/signin']);
      return false;
    }
  };
}
