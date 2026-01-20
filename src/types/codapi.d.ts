declare global {
  namespace JSX {
    interface IntrinsicElements {
      'codapi-snippet': {
        sandbox?: string;
        engine?: string;
        editor?: string;
        selector?: string;
        template?: string;
        files?: string;
        'depends-on'?: string;
        'init-delay'?: string;
        actions?: string;
        'output-mode'?: string;
        'output-tail'?: string;
        status?: string;
        'status-running'?: string;
        'status-failed'?: string;
        'status-done'?: string;
      };
    }
  }
}

export {};
