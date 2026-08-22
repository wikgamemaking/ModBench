# <img src="icons/logo.png" width="32" valign="middle"> ModBench

[![Live Demo](https://img.shields.io/badge/Website-modbench.net-green?style=for-the-badge)](https://modbench.net)
[![Powered by](https://img.shields.io/badge/Powered%20by-555555?style=for-the-badge)](https://modrinth.com)[![Modrinth](https://img.shields.io/badge/Modrinth-00AF5C?style=for-the-badge&logo=modrinth&logoColor=white)](https://modrinth.com)

**ModBench** is a fast, lightweight, and browser-based **Minecraft modpack builder and editor**. It allows you to search mods, automatically resolve dependencies, import existing `.mrpack` files, and export custom modpacks ready for launchers—processed entirely in your browser with zero server dependencies.

---

## Key Features

- **Browse & Search:** Instantly query thousands of Minecraft mods, resource packs, and modpacks directly from the Modrinth API.
- **Import & Edit `.mrpack`:** Drag and drop any existing `.mrpack` file to inspect, edit, add, or remove mods.
- **Automatic Dependency Resolution:** Automatically fetches required sub-dependencies and libraries so your modpack works out of the box.
- **Multi-Loader & Multi-Version:** Native support for **Fabric**, **Forge**, **Quilt**, and **NeoForge** across any Minecraft version.
- **Modpack Customization:** Add custom pack names, descriptions, and icon images directly bundled into your `.mrpack`.
- **One-Click Export:** Generates `.mrpack` files instantly compatible with **Modrinth App**, **Prism Launcher**, and **ATLauncher**.
- **Local Favorites:** Save and organize favorite mods locally in your browser.

---

## How to Use

1. **Open the Tool:** Go to [modbench.net](https://modbench.net).
2. **Build or Import:** 
   - **Start fresh:** Search for mods in the **Browse** tab and click **+ Add**.
   - **Edit existing:** Go to **Create / Export** and drop an existing `.mrpack` file.
3. **Configure Settings:** Set your target Minecraft version, loader, and custom pack icon.
4. **Export:** Click **Download .mrpack** and drop the file directly into Prism Launcher or Modrinth App.

---

## Tech Stack

- **Frontend:** Vanilla JavaScript (ES6+), HTML5, CSS3
- **API:** [Modrinth API v2](https://docs.modrinth.com/api/)
- **Zip Generation:** [JSZip](https://stuk.github.io/jszip/) (client-side `.mrpack` processing)

---

## License & Disclaimer

ModBench is an open-source tool and is not affiliated with Modrinth or Mojang AB. Minecraft is a trademark of Mojang AB.
