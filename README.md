# Jinni.com Ratings Exporter
Allows you to export your ratings to use with any other movie database.
You have to be logged in to jinni.com, and be in your ratings page: http://www.jinni.com/user/YOUR_USER_NAME/ratings/ .


### HOW TO USE (browser extension/user-script)
Install following extension into browser: <a href="http://p.brm.sk/jinni-exporter/jinni-exporter-extension.user.js">Jinni-Exporter-Extension.user.js</a>

- Firefox - simply click on the link
- Chrome - download the file, open extension manager (Menu/Tools/Extensions), then drag the file in there
- Opera doesnt work <a style="display: none;" href="http://www.opera.com/docs/userjs/using/#writingscripts">- how to</a>
- IE - nobody uses that


### Let me know what you think
I might be adding imdb importer soon.
Write to <a href="idpsycho@gmail.com">idpsycho@gmail.com</a> or <a href="http://p.brm.sk/jinni-exporter/">donate</a>.


### Screenshot - this is how it looks and works
<img src="http://p.brm.sk/jinni-exporter/jinni-exporter.png">


### Why is it so slow?
There is a chain of reasons for that.

1. We can't get the year of the movie from the ratings page, so we have to load every movie page and extract it from there. (good thing is that jinni also has links to imdb, that makes it easy to import those ratings into imdb)
2. Every page takes from around 1 second to load (and that's without images and tens of script files, jinni is very slow)
3. It is not even possible to load the pages parallely. When I request many pages at once, sometimes it simply returns the first one requested to all the requests.

So in the end it becomes: # of ratings * second. So for my 600 ratings, it takes 10 minutes.
