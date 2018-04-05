// ==UserScript==
//
// @name         global css customizer ...
// @version      0.1
// @description  UI customizations via css files 
// this is for backup, if direct include of css doesn't work as expected
// @author       vodo22
//
// ==/UserScript==


if (typeof (dojo) != "undefined") {
    dojo.place(
        "<link rel=\"stylesheet\" type=\"text/css\" href=\"/files/customizer/ui2/customer-ui2.css?repoName=gisag-dev\"></link>",
        dojo.doc.head,
        "last"
);
}


