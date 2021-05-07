import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './components/calculator/calculator.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: `/calculator`, pathMatch: 'full' },
  { path: 'calculator', component: CalculatorComponent },
  { path: '**', redirectTo: `/calculator` },
];
export const routing: any = RouterModule.forRoot(appRoutes, { useHash: true, enableTracing: true });
