Namastey-React

-Start - npx parcel index.html

#parcel
-Dev Build
-Local Server
-HMR = Hot Modle Replacement
-File watching Algorithm - written in C++
-Caching Optimization
-Image Optimization
-Minification
-Bundling
-Compress
-consistent Hashing(read about it)
-Code Splitting
-Differential Bundling(when app is hosted and open in any browsers old or new browser it has different bundle for different browsers)
-Error Handling
-HTTPs
-Tree Shaking remove unused code
-Different dev and prod bundles

Basic Design

/\*\*

- \*Header
- -Logo
- -Nav Items
- \*Body
- -Search
- -RestaurantContainer
-      -REstautrantCard
-        -Img
-        -Name of Res, Star rating, cuisine, delivery tim
- \*Footer
- -Copyright
- -Links
- -Address
- -Contact
  \*/

Two types of imports

-Default Export/Import

export default Component;
import Component from 'path';

-Named Export/Import
export const Component;
import {Component} from 'path';

# React Hooks

    (Normal JS utility functions)
    -useState() - Suoer powerful react variables
    -useEffect()
