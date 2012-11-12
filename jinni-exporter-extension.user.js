// ==UserScript==
// @name           Jinni Exporter
// @include        http://www.jinni.com*
// @include        https://www.jinni.com*
// @match          http://www.jinni.com/*
// @match          https://www.jinni.com/*
// ==/UserScript==


function load(src, fn) { var x=document.createElement('script'); x.type='text/javascript'; x.src=src; if (fn) { x.onreadystate=fn; x.onload=fn; } document.head.appendChild( x ); };


if ('locally')
	load('http://l/jinni-exporter/jinni-exporter.js', function() { } );
else
	load('http://p.brm.sk/jinni-exporter/jinni-exporter.js', function() { } );
