---
layout: default
title: Slidey CSS Drawer
---

<link rel="stylesheet" href="Slidey.css">

<nav class="slidey slidey--left slidey--styled">
    <a href="#" class="slidey__brand">Brand Name</a> <!-- Optional -->
    <a href="#">Menu Item 1</a>
    <a href="#">Menu Item 2</a>
    <a href="#">Menu Item 3</a>
    <a href="#">Menu Item 4</a>
    <a href="#">Menu Item 5</a>

    <div class="slidey__toggle"></div> <!-- Optional -->
    <div class="slidey__close"></div> <!-- Optional -->
</nav>

# Slidey

A dead-simple slide-in navigation drawer for websites, built using CSS and triggered using Javascript.

## Demo

<button id="set-to-left">Set to left</button>
<button id="set-to-right">Set to right</button>
<button id="toggle-styling">Toggle styling</button>

## Features

- Follows [BEM Syntax](https://css-tricks.com/bem-101).
- Comes with just the drawer, leaves the menu item styling to the user.
- Optional default stying CSS available using class "slidey--styled" so you can build on it.
- Designed to be used with only one instance per page.

## Usage

1. Include the CSS in head
```html
&lt;link rel="stylesheet" href="Slidey.css"&gt;
```

2. Include Javascript
```html
&lt;script src="Slidey.js"&gt;&lt;/script&gt;
```

3. Put this markup anywhere on the page
```html
&lt;nav class="slidey slidey--right slidey--styled"&gt;
&lt;a href="#" class="slidey__brand"&gt;Brand Name&lt;/a&gt; &lt;!-- Optional --&gt;
&lt;a href="#"&gt;Menu Item 1&lt;/a&gt;
&lt;a href="#"&gt;Menu Item 2&lt;/a&gt;
&lt;a href="#"&gt;Menu Item 3&lt;/a&gt;
&lt;a href="#"&gt;Menu Item 4&lt;/a&gt;
&lt;a href="#"&gt;Menu Item 5&lt;/a&gt;

&lt;div class="slidey__toggle"&gt;&lt;/div&gt; &lt;!-- Optional --&gt;
&lt;div class="slidey__close"&gt;&lt;/div&gt; &lt;!-- Optional --&gt;
&lt;/nav&gt;
```

### How to use the CSS classes

#### Mandatory Styling

- To convert any container into a slider (ideally a nav element), add the ```slidey``` class.
- Add either the ```slidey--left``` or ```slidey--right``` class to the same element. __This is mandatory__.

#### Optional Styling

- To apply the included basic style, add the ```slidey--styled``` class.
  - This adds styles for anchor tags inside the slidey element.
  - Additionally, any anchor tag with the class ```slidey__brand``` will make the text prominent and large.

- Immediately inside the slidey element, add an element with the ```slidey__toggle``` class. Clicking this toggles the drawer.
- Immediately inside the slidey element, add an element with the ```slidey__close``` class. Clicking this closes the drawer.
  - This element is positioned in the top-right corner of the drawer.

## Dependencies

- Some Javascript to toggle classes on clicks. Included in Slidey.js, modify as needed.
- Browser supporting CSS transitions for the sliding animation. Menu still works on older browsers but toggles instantly.

## Compatibility

- Unknown, guessing IE8 and above. I am coding blind, so I can't guarantee support for old browser versions just yet.
- Not using anything fancy so should be compatible with pretty much all modern browsers on all devices.

<script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
<script src="Slidey.js"></script>
<script type="text/javascript">
    $("#set-to-left").click(function() {
        $(".slidey").removeClass("slidey--right").addClass("slidey--left");
    });
    $("#set-to-right").click(function() {
        $(".slidey").removeClass("slidey--left").addClass("slidey--right");
    });
    $("#toggle-styling").click(function() {
        $(".slidey").toggleClass("slidey--styled");
    });
</script>