import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    /* Reset CSS */
    html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }

    body {
        font-family: "Outfit", sans-serif;
    }

    :root{

        /* Primary colors */
        --primary-color: #3fb063;
        --primary-secondary: #EB5757;

        /* Color-grey */
        --color-grey-0: #F8F9FA;
        --color-grey-1: #f4f4f4; 
        --color-grey-2: #343B41;
        --color-grey-3: #212529;
        --color-grey-4: #121214;

        /* Feedback */
        --error: #E60000;
        --warning: #FFCD07;
        --success: #168821;
        --information: #155BCB;

        /* Font-weight */
        --font-weight-1: 700;
        --font-weight-2: 600; 
        --font-weight-3: 500; 
        --font-weight-4: 400;

        /* Font size */
        --font-size-1: 2.5rem;
        --font-size-2: 2rem;
        --font-size-3: 1.5rem;
        --font-size-4: 1rem;
        --font-size-5: 0.75rem; 
    }
`;

export default GlobalStyle;
