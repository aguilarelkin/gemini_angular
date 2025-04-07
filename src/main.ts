import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import 'prismjs';
import 'prismjs/components/index';

// Lenguajes comunes
import 'prismjs/components/prism-markup';      // HTML
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';  // JavaScript
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-json';
// Lenguajes backend
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-kotlin';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-csharp';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-ruby';

// Lenguajes para sistemas y performance
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-go';
import 'prismjs/components/prism-rust';

// Bases de datos
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-graphql';
import 'prismjs/components/prism-bash';       // Terminal
import 'prismjs/components/prism-docker';
import 'prismjs/components/prism-yaml';

// Markdown
import 'prismjs/components/prism-markdown';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
