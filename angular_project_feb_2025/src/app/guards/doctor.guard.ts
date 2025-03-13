import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UserroleService } from '../services/userrole.service';

export const doctorGuard: CanActivateFn = (route, state) => {
  const userRoleService = inject(UserroleService); // Dependency Injection
  if (userRoleService.getUserRole() == 'doctor') {
    return true;
  } else {
    alert('Boss, This not a page for you!!!')
    return false;
  }
};
