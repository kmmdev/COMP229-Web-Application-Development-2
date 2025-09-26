// Global type declarations for JSX components
declare module "*.jsx" {
  import React from 'react';
  const Component: React.ComponentType<any>;
  export default Component;
}