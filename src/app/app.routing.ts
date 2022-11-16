import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';
import { ViewDynamicThemeComponent } from './pages/view-dynamic-theme/view-dynamic-theme.component';

const routes: Routes = [
  {
    path: 'view-dynamic-theme',
    component: ViewDynamicThemeComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false,
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
