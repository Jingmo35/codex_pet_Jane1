# codex_pet_Jane1

![Jane1 preview](preview/all-actions.png)

## English

Jane1 is a one-click installable **Codex pet theme**. It is not a standalone desktop app and does not include an `.exe`. After installation, Jane1 appears inside Codex's appearance or pet settings.

### Install

#### Windows One-Line Install

Open PowerShell and run:

```powershell
irm https://raw.githubusercontent.com/Jingmo35/codex_pet_Jane1/main/scripts/install-windows.ps1 | iex
```

Restart Codex, then choose **Jane1** in the appearance or pet settings.

#### macOS One-Line Install

Open Terminal and run:

```bash
curl -fsSL https://raw.githubusercontent.com/Jingmo35/codex_pet_Jane1/main/scripts/install-macos.sh | bash
```

Restart Codex, then choose **Jane1** in the appearance or pet settings.

#### Manual Install

Download this folder:

```text
pet/jane1/
```

Copy it to your Codex pets directory:

```text
Windows: C:\Users\<your-user-name>\.codex\pets\jane1
macOS:   ~/.codex/pets/jane1
```

The final installed folder should contain exactly:

```text
jane1/
  pet.json
  spritesheet.webp
```

### Uninstall

Windows:

```powershell
irm https://raw.githubusercontent.com/Jingmo35/codex_pet_Jane1/main/scripts/uninstall-windows.ps1 | iex
```

macOS:

```bash
curl -fsSL https://raw.githubusercontent.com/Jingmo35/codex_pet_Jane1/main/scripts/uninstall-macos.sh | bash
```

### What This Repository Contains

```text
codex_pet_Jane1/
  pet/
    jane1/
      pet.json
      spritesheet.webp
  preview/
    all-actions.png
  scripts/
    install-windows.ps1
    install-macos.sh
    uninstall-windows.ps1
    uninstall-macos.sh
```

### Pet Package Format

Codex pets use a very small package format:

- `pet.json`: metadata that tells Codex the pet id, display name, description, and spritesheet file.
- `spritesheet.webp`: the full animation atlas used by Codex.

This package currently includes Jane1 states such as idle, running, waving, jumping, sleeping/waiting, review, and failed.

### Release Download

GitHub Releases provide a zip package:

```text
jane1-codex-pet.zip
```

Extract the zip and copy the `jane1` folder into your Codex pets directory.

## 中文

Jane1 是一个可以一键安装的 **Codex 外观宠物包**。它不是独立桌面应用，也不包含 `.exe`。安装后，Jane1 会出现在 Codex 的外观或宠物设置中。

### 安装

#### Windows 一键安装

打开 PowerShell，运行：

```powershell
irm https://raw.githubusercontent.com/Jingmo35/codex_pet_Jane1/main/scripts/install-windows.ps1 | iex
```

然后重启 Codex，在外观或宠物设置里选择 **Jane1**。

#### macOS 一键安装

打开 Terminal，运行：

```bash
curl -fsSL https://raw.githubusercontent.com/Jingmo35/codex_pet_Jane1/main/scripts/install-macos.sh | bash
```

然后重启 Codex，在外观或宠物设置里选择 **Jane1**。

#### 手动安装

下载这个文件夹：

```text
pet/jane1/
```

复制到你的 Codex pets 目录：

```text
Windows: C:\Users\<你的用户名>\.codex\pets\jane1
macOS:   ~/.codex/pets/jane1
```

最终目录里应该只有这两个核心文件：

```text
jane1/
  pet.json
  spritesheet.webp
```

### 卸载

Windows：

```powershell
irm https://raw.githubusercontent.com/Jingmo35/codex_pet_Jane1/main/scripts/uninstall-windows.ps1 | iex
```

macOS：

```bash
curl -fsSL https://raw.githubusercontent.com/Jingmo35/codex_pet_Jane1/main/scripts/uninstall-macos.sh | bash
```

### 仓库内容

```text
codex_pet_Jane1/
  pet/
    jane1/
      pet.json
      spritesheet.webp
  preview/
    all-actions.png
  scripts/
    install-windows.ps1
    install-macos.sh
    uninstall-windows.ps1
    uninstall-macos.sh
```

### Codex Pet 包格式

Codex pet 的格式很简单：

- `pet.json`：告诉 Codex 宠物 id、显示名称、描述和精灵图文件名。
- `spritesheet.webp`：Codex 使用的完整动作精灵图。

当前 Jane1 包含待机、跑动、招手、跳跃、睡觉/等待、待查看、失败反馈等状态。

### Release 下载

GitHub Releases 会提供 zip 包：

```text
jane1-codex-pet.zip
```

解压后，把 `jane1` 文件夹复制到 Codex pets 目录即可。

## License

MIT License. Please make sure you have the right to publish and redistribute the Jane1 artwork before redistributing modified versions.
