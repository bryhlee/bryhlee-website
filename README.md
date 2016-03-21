# Personal Webite Docs

## How smoothscroll internal links work

```
$('a[href^="#"]').on('click',function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 300, 'swing', function () {
        window.location.hash = target;
    });
});

```
The above code is loaded when the `dialogController` is loaded in Angularjs. This is done so that the controller only runs animation for internal links when the dialog is loaded, since the dialog is the only section of the DOM that has internal links.

First, a JQuery object is selected from any `<a>` with the `href="#"` attribute. The full `href` must actually be the name of the `id` of the location, for example, `href="#about"`.

Then, we apply a JQuery event listener to it, using `.on('click', function (e) {...});`.

`e.preventDefault();` prevents the click event on the `a` tag from actually redirecting the page to the internal link. Why? The default event for `a href` on `click` is to redirect the page, since that's what `a href` does. We disable this redirection from happening, since for internal links, we want the page to smoothly scroll to different parts of the page, not do redirection. In other words, we are handling the ourselves.

`var target = this.hash` takes the `a` tag's `href` value and assigns it to `target`. Apparently, that's what the `.hash` method does for `this`, which is, in this case, the `a` tag.

Now, the next few lines are just JQuery and JavaScript, which can be found in the docs for their actual implementation.

Thank you to http://www.paulund.co.uk/smooth-scroll-to-internal-links-with-jquery for the code.