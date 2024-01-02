import 'zone.js';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then((ref) => {
    // Ensure Angular destroys itself on hot reloads.
    // Otherwise, log the boot error
  })
  .catch((err) => console.error(err));

// Filtros
// Tags main , cluster, http-nio-8080-exec-1 -> lo que despues de la fecha y Log level
// Level INFO ERROR

//Tabla
//- Indicador digonal el Log level
//- Date / DateTime
//- Title -> Despues de Log Level, antes de gion -
//- Tags -> Mismos de arriba
//- Message -> Despues de guion -

console.log('Called');
