import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { enableProdMode } from '@angular/core';
import { environment } from './app/environment';
import { registerLicense } from '@syncfusion/ej2-base';
import { L10n } from '@syncfusion/ej2-base';


registerLicense('License Key');

if (environment.production) {
  enableProdMode();
} 
L10n.load({
  'en-US': 'YOUR_SYNCFUSION_LICENSE_KEY'
});
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
