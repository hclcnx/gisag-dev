// ==UserScript==
//
// @name         global css customizer ...
// @version      0.1
// @description  *** PROTOTYPE CODE *** demonstrates simple hello world script to customize the Home Page
// @author       vodo22
//
// ==/UserScript==

if (typeof (dojo) != "undefined") {
    dojo.place(
        // https://apps.na.collabserv.com/files/customizer/ui/customer-ui.css?repoName=gisag-dev
        "<link rel=\"stylesheet\" type=\"text/css\" href=\"/files/customizer/ui/customer-ui.css?repoName=gisag-dev\"></link>",
        dojo.doc.head,
        "last"
);
}


