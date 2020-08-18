## ::PassageDone
Used for post-passage-display tasks, like redoing dynamic changes (happens after the rendering and display of each passage). Roughly equivalent to the :passagedisplay event.

## ::PassageFooter
Appended to each rendered passage. Roughly equivalent to the :passagerender event.

## ::PassageHeader
Prepended to each rendered passage. Roughly equivalent to the :passagestart event.

## ::PassageReady
Used for pre-passage-display tasks, like redoing dynamic changes (happens before the rendering of each passage). Roughly equivalent to the :passagestart event.

## ::StoryAuthor
Used to populate the authorial byline area in the UI bar (element ID: story-author).

## ::StoryBanner
Used to populate the story's banner area in the UI bar (element ID: story-banner).

## ::StoryCaption
Used to populate the story's caption area in the UI bar (element ID: story-caption). May also be, and often is, used to add additional story UI elements and content to the UI bar.

## ::StoryDisplayTitle
Sets the story's display title in the browser's titlebar and the UI bar (element ID: story-title). If omitted, the story title will be used instead.

## ::StoryInit
Used for pre-story-start initialization tasks, like variable initialization (happens at the beginning of story initialization).

## ::StoryInterface
Used to replace SugarCube's default UI. Its contents are treated as raw HTML markup—i.e., none of SugarCube's special HTML processing is performed. It must contain, at least, an element with the ID passages, which will be the main passage display area. Elements, aside from the #passages element, may include a data-passage content attribute, which denotes that the element should be updated via the specified passage—the passage will be processed as normal, meaning that markup and macros will work as expected.

**Warning**: Elements that include a data-passage content attribute should not themselves contain additional elements—since such elements' contents are replaced each turn via their associated passage, any child elements would be lost.

### Examples: Minimal working example

    <div id="passages"></div>

With data-passage content attributes

    <div id="interface">
    	<div id="menu" data-passage="Menu"></div>
    	<div id="notifications" data-passage="Notifications"></div>
    	<div id="passages"></div>
    </div>

## ::StoryMenu
Used to populate the story's menu items in the UI bar (element ID: menu-story).

Note: The story menu only displays links—specifically, anything that creates an anchor element (`<a>`). While it renders content just as any other passage does, instead of displaying the rendered output as-is, it sifts through the output and builds its menu from the generated links contained therein.

### Examples:

    [[Inventory]]
    <<link "Schedule">>…<</link>>

## ::StorySubtitle

Sets the story's subtitle in the UI bar (element ID: story-subtitle).

## ::StoryTitle
Warning: The story title is _used_ to create the storage ID that is used to store all player data, both temporary and persistent. It should be plain text, containing no code, markup, or macros of any kind.

*Tip*: If you want to set a title for display that contains code, markup, or macros, see the StoryDisplayTitle special passage.

Twine 2: Unused. The story's title is part of the story project.

## ::StoryData

The StoryData passage may be used to specify basic project settings. Its contents must consist of a JSON chunk, which is, generally, pretty-printed—i.e., line-broken and indented.

The core properties used with all story formats include:

- *ifid*: (string) Required. The project's Interactive Fiction IDentifier (IFID), which is a unique code used to identify your project—similar to the ISBN code assigned to a book. If the project does not already have an IFID, you may omit the property and Tweego will automatically generate one for you with instructions on how to copy it into the chunk.
- *start*: (string) Optional. The name of the starting passage. If omitted, defaults to the Start passage.

The properties used only with Twine 2-style story formats include:

- *format*: (string) Optional. The name of the story format to compile against—e.g., *SugarCube*, *Harlowe*, *Chapbook*, Snowman.
- *format-version*: (string) Optional. The version of the story format to compile against. Story format versions follow the Semantic Versioning specification, though generally use only the *major.minor.patch* form—e.g., *2.30.0*. From the installed story formats matching the name specified in *format*, Tweego will attempt to use the greatest version that matches the specified *major* version—i.e., if *format-version* is *2.0.0* and you have the versions 1.0.0, 2.0.0, 2.5.0, and 3.0.0 installed, then *Tweego* will choose *2.5.0*.

---

    *Note*: The above is not an exhaustive list of all Twine 2-style story format properties. There are others available that are only useful when actually interoperating with Twine 2—e.g, tag-colors and zoom. See the twee-3-specification.md for more information.

---

    *Tip*: To compile against a specific version of a story format, use the format command line option (-f NAME, --format=NAME) to specify the version by its ID. If you don't know the ID, use the list-formats command line option (--list-formats) to find it.

---

    *Warning*: JSON chunks are not JavaScript object literals, though they look much alike. Property names must always be double quoted and you must not include a trailing comma after the last property.

### Example

        :: StoryData
        {
        	"ifid": "D674C58C-DEFA-4F70-B7A2-27742230C0FC",
        	"format": "SugarCube",
        	"format-version": "2.30.0",
        	"start": "My Starting Passage"
        }

## ::StoryTitle

The contents of the StoryTitle passage will be used as the name/title of the story.
