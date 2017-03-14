$(document).ready(function () {
$('#ewFeed1').rssfeed('http://feeds.ziffdavisenterprise.com/RSS/tech.xml', {
limit:4,
date:true,
content:true,
header:true,
titletag: 'h4',
snippet:true
};

$('#ewFeed2').rssfeed('http://feeds.nytimes.com/nyt/rss/Technology', {
limit:3,
date:true,
content:true,
header:true,
titletag: 'h4',
snippet:true
};

$('#ewFeed3').rssfeed('http://feeds.reuters.com/reuters/technologyNews', {
limit:4,
date:true,
content:true,
header:true,
titletag: 'h4',
snippet:true
};

$('#ewFeed4').rssfeed('http://rss.cnn.com/rss/cnn_tech.rss', {
limit:4,
date:true,
content:true,
header:true,
titletag: 'h4',
snippet:true
};

$('#ewFeed5').rssfeed('http://www.oss-watch.ac.uk/rss/osswatchnews.rss', {
limit:4,
date:true,
content:true,
header:false,
titletag: 'h5',
snippet:true
};

$('#ewFeed6').rssfeed('http://www.oss-watch.ac.uk/rss/osswatchnews.rss', {
limit:4,
date:true,
content:true,
header:false,
titletag: 'h5',
snippet:true
};

$('#ewFeed7').rssfeed('http://feeds.ziffdavisenterprise.com/RSS/eweekdeveloper.xml', {
limit:4,
date:true,
content:true,
header:false,
titletag: 'h5',
snippet:true
};

$('#ewFeed8').rssfeed('http://www.javaworld.com/community/blogs/rss', {
limit:3,
date:true,
content:true,
header:false,
titletag: 'h5',
snippet:true
});
$('#ewFeed1').css({'width': '200px'});
});
$('#ewFeed2').css({'width': '200px'});
});
$('#ewFeed3').css({'width': '200px'});
});
$('#ewFeed4').css({'width': '200px'});
});
$('#ewFeed5').css({'width': '200px'});
});
$('#ewFeed6').css({'width': '200px'});
});
$('#ewFeed7').css({'width': '200px'});
});
$('#ewFeed8').css({'width': '200px'});
});

