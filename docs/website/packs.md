---
title: Extension Packs
slug: /website/packs
---

Extension packs let you add an entire extension gallery to SpinachMod using one JSON file. Users add the direct URL to your `pack.json` from the **+** button in the extension picker.

SpinachMod downloads the pack when the website is opened. After a successful download, it also saves a local copy so the gallery can still be displayed if the source is temporarily unavailable.

:::warning
Extensions listed in the extension picker, including extensions from packs, are loaded unsandboxed. Only add packs and extensions that you trust. See [The Sandbox](../extensions/sandbox.md) for details about unsandboxed extensions.
:::

## Format

```json title="pack.json"
{
  "information": {
    "name": "Creator's Extensions",
    "tag": "creator",
    "source": "https://extensions.creator.com/"
  },
  "extensions": [
    {
      "slug": "extension",
      "id": "creatorExtension",
      "name": "Extension",
      "description": "A cool extension",
      "nameTranslations": {
        "ru": "Расширение"
      },
      "descriptionTranslations": {
        "ru": "Крутое расширение"
      },
      "image": "extension.svg",
      "by": [
        {
          "name": "Creator",
          "link": "https://scratch.mit.edu/users/creator/"
        }
      ],
      "original": [
        {
          "name": "Original Creator",
          "link": "https://scratch.mit.edu/users/originalcreator/"
        }
      ],
      "docs": true,
      "samples": [
        "Cool Extension Example"
      ]
    }
  ]
}
```

With this example, SpinachMod loads:

- The extension from `https://extensions.creator.com/extension.js`
- The banner from `https://extensions.creator.com/extension.svg`
- The documentation from `https://extensions.creator.com/extension`
- The sample from `https://extensions.creator.com/samples/Cool%20Extension%20Example.sb3`

## Pack information

The top-level object must contain an `information` object and an `extensions` array.

| Key | Required | Description |
| --- | --- | --- |
| `name` | Yes | The gallery name displayed in the extension picker. |
| `tag` | Yes | A unique tag used for the gallery's filter button. It is converted to lowercase. |
| `source` | No | The HTTP or HTTPS base URL used to find extensions and assets. Relative URLs are resolved from the location of `pack.json`. If omitted, the folder containing `pack.json` is used. |

For example, a pack hosted at `https://example.com/gallery/pack.json` can omit `source` when its extensions and images are also stored under `https://example.com/gallery/`.

## Extension entries

Each item in `extensions` supports the following keys:

| Key | Required | Description |
| --- | --- | --- |
| `slug` | Yes | The extension's path or URL. SpinachMod adds `.js` when the value does not already end in `.js`. Relative paths use `information.source`. |
| `id` | Yes | The extension ID returned by the extension's `getInfo()` method. This must match exactly. |
| `name` | Yes | The name displayed on the extension tile. |
| `description` | No | A short explanation of the extension. |
| `image` | No | A banner image path or URL. Relative paths use `information.source`. SpinachMod's default extension banner is used when this is omitted. |
| `by` | No | People who created or contributed to this version of the extension. |
| `original` | No | Credits for the extension's original creators. Uses the same format as `by`. |
| `nameTranslations` | No | An object mapping locale codes to translated names. |
| `descriptionTranslations` | No | An object mapping locale codes to translated descriptions. |
| `docs` | No | When truthy, adds a documentation link by resolving the unmodified `slug` against `information.source`. The `.js` suffix used to load the extension is not added to this URL. |
| `samples` | No | An array of sample project names. Each name resolves to `samples/<name>.sb3` under `information.source`. |

These are all of the extension metadata keys currently read by SpinachMod's pack loader. Other keys may appear in a gallery's own metadata, but SpinachMod ignores them and they do not need to be copied into `pack.json`.

Both `by` and `original` are arrays of credit objects:

```json
{
  "name": "Example Author",
  "link": "https://example.com/"
}
```

`name` is displayed as plain text. When `link` is provided, the name becomes a link.

Translations use locale codes as keys:

```json
{
  "nameTranslations": {
    "es": "Hola",
    "fr": "Bonjour"
  },
  "descriptionTranslations": {
    "es": "Añade un bloque que dice hola.",
    "fr": "Ajoute un bloc qui dit bonjour."
  }
}
```

## Hosting your pack

Host `pack.json`, extension scripts, images, and sample projects on a public HTTP or HTTPS server. Because SpinachMod fetches these files from the user's browser, the server must allow cross-origin requests from SpinachMod. A common response header is:

```text
Access-Control-Allow-Origin: *
```

Use a stable direct URL that returns the JSON file itself, not a repository page or HTML preview. For example:

```text
https://example.com/gallery/pack.json
```

Keep that URL unchanged when updating the pack. SpinachMod checks the URL again when the website is opened, so users receive new entries and metadata without importing it again.

## Adding the pack to SpinachMod

1. Open the extension picker.
2. Select the **+** button before the gallery tags.
3. Paste the direct URL to `pack.json` under **Extension packs**.
4. Select **Add pack**.

The pack's gallery filter appears after the built-in and individually added extension sections.

You can also browse packs maintained by the SpinachMod community at [packs.nitrobolt.org](https://packs.nitrobolt.org/).
