Reveal.initialize({
    // width
    width: 1200,
    // Display controls in the bottom right corner
    controls: true,
    // Display a presentation progress bar
    progress: true,
    // If true; each slide will be pushed to the browser history
    history: true,
    // Loops the presentation, defaults to false
    loop: false,
    // Flags if mouse wheel navigation should be enabled
    mouseWheel: true,
    // Apply a 3D roll to links on hover
    rollingLinks: true,
    // Transition style
    transition: Reveal.getQueryHash().transition || 'default',
    // Optional libraries used to extend on reveal.js
    dependencies: [
        {src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad();}}
    ]
});
