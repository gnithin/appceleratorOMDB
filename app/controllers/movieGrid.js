// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

var the_image = args.image || '';
var item_width = args.width || '95%';
var item_height = args.height || '95%';

$.thumb.image = 'http://mobilemarketingwatch.com/wp-content/uploads/2016/01/Is-Google-Searching-for-the-Next-Big-Thing1.jpg';
$.thumb.defaultImage = '/images/Default.png';

$.thumb.width = item_width;
$.thumb.height = item_height;	