# sl-react-ui

These are UI React components for Seespace Labs web app projects. They are not intended to be a general-purpose UI library, but rather a set of components that can be used to build a consistent look and feel across my projects.

Most of the components are unremarkable, but there are a few that are worth mentioning.

* Canvas - a nice component wrapper for the HTML canvas elements that handles some annoying problems with resizing and scaling.
* WaveformVisualizer - a component that visualizes audio waveforms with ability to annotate and add other visual cues to it.
* TextConsole - a component that shows lines dynamically added to it, with some handling to keep the scroll position at the bottom.

Do you want to use any of them in your projects? Go for it!

## Design Conventions

* No dependencies other than React and ReactDOM.
* Ephemeral state is managed by the component itself.
* Other state is managed by the parent component (outside of the component library).
* CSS is defined in CSS modules with component scope. No global CSS, other than explicit imports.
* "Big, stupid, and friendly" aesthetics. Can look a little too simple on desktop, but good on mobile/tablet.
* This is library is just doing the Seespace Labs look and feel. No attempt to be a general-purpose UI library.

## Testing Approach

If there is any logic that is complex enough to warrant unit testing, it should be moved out of the component and into a separate module. The component should be a thin wrapper around the module. The module should be unit tested.

For testing the behavior of the UI, just open index.html in a browser and click through manually. I don't see much value in snapshot testing or other automated UI testing approaches. E.g., visual regression testing is going to create a bunch of images for me to look at and compare. I might as well just look at the UI and compare it to what I expect.

## Licensing

My code and other files in this repository are licensed under the MIT open source license.

But if you see a LICENSE file in a sub-directory of the repository, that license will apply to all files found in that directory.

Also, avoid using fonts or other resources hosted from shared.wisp.studio. The website has CORS rules that prevent resources to be served from pages that don't match either "localhost:3000" or "wisp.studio". You can circumvent this, e.g., downloading the file and re-hosting it. But some files at that website have licenses that I purchased which aren't transferable to you.

### Contributing

The project isn't open to contributions at this point. But that could change. Contact me if you'd like to collaborate.

### Contacting

You can reach me on LinkedIn. I'll accept connections if you will just mention some shared interest in your connection request.

https://www.linkedin.com/in/erikhermansen/
