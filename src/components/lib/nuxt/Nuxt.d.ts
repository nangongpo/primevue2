declare module Nuxt {
  interface ModuleOptions {
    theme?: string;
    ripple?: boolean;
    components?: string[];
    directives?: string[];
  }

  export default function(moduleOptions: ModuleOptions): void;
}

export default Nuxt
