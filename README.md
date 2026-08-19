# ModBench

ModBench is a lightweight, browser-based tool for creating, configuring, and exporting custom Minecraft modpacks.

Powered by the Modrinth API, it runs entirely in your browser with no installation or backend required.

## Features

- **Browse & Search:** Search thousands of mods and modpacks directly from Modrinth.
- **Dependency Management:** Automatically fetches and includes required mod dependencies and loader libraries.
- **Multi-Loader Support:** Compatible with Fabric, Forge, Quilt, and NeoForge across multiple Minecraft versions.
- **Modpack Customization:** Select specific file versions, organize mods by category, or import existing modpacks.
- **Simple Exports:** Generates `.mrpack` files ready for instant import into Prism Launcher, ATLauncher, or the Modrinth App.
- **Favorites:** Save favorite mods locally in your browser.

## How to Use

1. Open [ModBench](https://wikgamemaking.github.io/ModBench/).
2. Search for mods in the **Browse** tab and click **+ Add**.
3. Review your pack and select versions in **Create** / **Export**.
4. Click **Download .mrpack** and import the file directly into your launcher.

## Tech Stack

- HTML5 / CSS / Vanilla JavaScript
- [Modrinth API v2](https://docs.modrinth.com/api-spec/)
- [JSZip](https://stuk.github.io/jszip/) (client-side `.mrpack` zip generation)

## Disclaimer

ModBench is an open tool and is not affiliated with Modrinth or Mojang AB.
