---
title: Blog Post 8
pubDate: 2024-06-29
index: 7
description: "I made a button click play an animation!"
author: KC
image:
    url: "https://i.pinimg.com/564x/b8/14/d8/b814d8a8ae25d6c00000fe39b18e4009.jpg"
    alt: "Vintage drawing of an explosion"
tags: ["astro", "learning in public", "successes", "visual content"]
---
Because my dark theme toggle says "BIG EXPLOSION", I wanted there to be an explosion!

1. I learned how to use `display:` with event trackers to make my transparent gif appear, `z-index` to let it overlap with the button, and `positioning` and `length` values to place it correctly outside normal document flow!

2. It's much more difficult to make a gif disappear after it plays once in JS. 
- I learned about very limited support for gif `<image>` in JS and tried to import gif libraries from github;
- I learned about `setTimeout()`, used it to hide a gif after waiting for the duration of its length, and even grabbed [these awesome sprites on Itch.io](https://ansimuz.itch.io/explosion-animations-pack) to create my own gif with precise duration, but the timing was never right. I learned about `setTimeout()` and why its time controls are not reliable and don't work the way I thought they do;
- I confirmed my concern that to play a gif from 00:00 on each consecutive click you can only really delete and rebuild the element every time;
- I read that some people strongly suggest using video over gifs in development and that some video formats can have transparency!
- I learned about sprite animation using JS `Canvas API`, did a [fun tutorial about it on Dev.to](https://dev.to/martyhimmel/animating-sprite-sheets-with-javascript-ag3), and successfully created my `<canvas>` animation. This is my first time animating with sprite sheets! Because I can design visual elements myself, I'm excited to use what I've learned about displaying different types of visuals in the future.

3. I'm not very good at JS - because of that, trying to call the function that draws my animation, I encountered issues like it only playing once or getting faster on each consecutive click and crashing my browser.
- I became somewhat comfortable using `.addEventListener()` and `.onclick()` and read why some people recommend one over the other;
- I debugged using `<alert>`, systematically identified the issues, and fixed a recursion memory leak on my own!

4. **What's next:** I'd like to separate theme toggle and explosion animation features in `ThemeSwitch.astro` into components if possible, but I'm not sure what would that look like.

Basically, I spent three days to make a simple joke animation play on my first website and it was really fun!

<p display="inline-block">
<image src="../../images/ezgif-5-d2cafdb86f.gif" height="100"></image>
<image src="../../images/ezgif-5-d2cafdb86f.gif" height="100"></image>
<image src="../../images/ezgif-5-d2cafdb86f.gif" height="100"></image>
</p>

# ALWAYS COMMIT TO THE BIT!