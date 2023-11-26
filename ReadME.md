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

# Two types of routing

1.Client Side Routing
2.Server Side Routing

Life cycle of react

/

# parent constructor is called
# parent render is called

*First child constructor is called
*First Child render is called

*second Child Constructor is called
*second Child render is called

+First Child ComponentDidMount is called
+Second Child ComponentDidMount is called

# Parent ComponentDidMount is called.
