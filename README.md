# Jinni.com Ratings Exporter
Allows you to export your ratings to use with any other movie database.
You have to be logged in to jinni.com, and be in your ratings page: http://www.jinni.com/user/YOUR_USER_NAME/ratings/


## HOW TO (as a bookmarklet)
Drag this link into your bookmarks: <a href="javascript: function load(src, fn) { var x=document.createElement('script'); x.type='text/javascript'; x.src=src; if (fn) { x.onreadystate=fn; x.onload=fn; } document.head.appendChild( x ); }; load('http://p.brm.sk/jinni-exporter/jinni-exporter.js', function() { } );">Jinni-Exporter</a>
(tested in Chrome and Firefox. However in Opera it doesnt work, dunno why)
You have to call this for every page of your ratings (it should automatically go to the next page to make it super-easy).


## HOW TO (as a script)
Copy the whole script from <a href="http://p.brm.sk/jinni-exporter/jinni-exporter.js">here</a>.
When on your ratings page, open the browser console and run the script from there.
You have to run this for every page of your ratings (it should automatically go to the next page to make it super-easy).


## HOW TO (as a User-script)
Install following extension: <a href="http://p.brm.sk/jinni-exporter/jinni-exporter-extension.user.js">Jinni-Exporter-Extension.js</a>
(in Chrome, you have to download the file, then open extension manager, then drag the file in there. for other browsers, use google)


## Let me know what you think
I might be adding imdb importer soon.
Write to <a href="idpsycho@gmail.com">idpsycho@gmail.com</a> or donate.

<form action="https://www.paypal.com/cgi-bin/webscr" method="post">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----
">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>


## Screenshot sample
<img src="http://p.brm.sk/jinni-exporter/jinni-exporter.png">
