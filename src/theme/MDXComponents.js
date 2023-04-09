import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import {
    Ha as A,
    Hb as B,
    Hc as C,
    Hd as D,
    He as E,
    HA as F,
    HB as G,
    HC as H,
    HD as I,
    HE as J,
    FA as K,
    FC as L,
    AA as M,
    AB as N,
    AC as O,
    AD as P,
    AE as Q,
    CA as R,
    CB as S,
    CC as T,
    CD as U,
    CE as V,
    Center as W
} from "@site/src/components/setColor.js";

export default {
    // Re-use the default mapping
    ...MDXComponents,
    // Map the "<Highlight>" tag to our Highlight component
    // `Highlight` will receive all props that were passed to `<Highlight>` in MDX
    A,
    B,
    C,
    D,
    E,
    F,
    G,
    H,
    I,
    J,
    K,
    L,
    M,
    N,
    O,
    P,
    Q,
    R,
    S,
    T,
    U,
    V,
    W
};