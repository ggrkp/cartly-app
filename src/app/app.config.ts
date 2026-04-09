import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { CategoryBasedSearchHandler } from './service/search-handlers/CategoryBasedSearchHandler';
import { KeywordBasedSearchHandler } from './service/search-handlers/KeywordBasedSearchHandler';
import { NoFilterSearchHandler } from './service/search-handlers/NoFilterSearchHandler';
import { PRODUCT_SEARCH_HANDLERS } from './service/search-handlers/product-search-handlers.token';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    { provide: PRODUCT_SEARCH_HANDLERS, useClass: KeywordBasedSearchHandler, multi: true },
    { provide: PRODUCT_SEARCH_HANDLERS, useClass: CategoryBasedSearchHandler, multi: true },
    { provide: PRODUCT_SEARCH_HANDLERS, useClass: NoFilterSearchHandler, multi: true },
  ],
};
