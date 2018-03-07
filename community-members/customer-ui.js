// ==UserScript==
// @copyright    Copyright IBM Corp. 2017
//
// @name         loads customer specifc css
// @version      0.1
// @description  *** PROTOTYPE CODE *** 
//
// @namespace  http://ibm.com
//
// @author       vodo
//
// @include      *://apps.collabservintegration.com/homepage/*
//
// @exclude
//
// @run-at       document-end
//
// ==/UserScript==

if (typeof (dojo) != "undefined") {
    dojo.place(
        //        "<link rel=\"stylesheet\" type=\"text/css\" href=\"/files/muse-static/samples/profiles/profilesCustomization.css\"></link>",
        "<link rel=\"stylesheet\" type=\"text/css\" href=\"/customer-ui.css\"></link>",
        dojo.doc.head,
        "last"
);
}
