// ==UserScript==
// @name           Jinni Exporter
// @include        http://www.jinni.com*
// @include        https://www.jinni.com*
// @match          http://www.jinni.com/*
// @match          https://www.jinni.com/*
// @include        http://www.imdb.com*
// @include        https://www.imdb.com*
// @match          http://www.imdb.com/*
// @match          https://www.imdb.com/*
// ==/UserScript==


function time() { return new Date().getTime(); }
function load(src, fn) { var x=document.createElement('script'); x.type='text/javascript'; x.src=src; if (fn) { x.onreadystate=fn; x.onload=fn; } document.head.appendChild( x ); };

if (!'locally')
	load('http://l/jinni-exporter/jinni-exporter.js?'+time(), function() { } );
else
	load('http://p.brm.sk/jinni-exporter/jinni-exporter.js?'+time(), function() { } );
