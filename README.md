# CommandPanel
> 命令面板

## Usage

使用快捷键呼出控制面板: Ctrl+Shift+O/Command+Shift+O

## 注册命令

其他插件在命令插件存在时可以配合使用
```javsacript
// install `wait-finish` package from npm
const { wait } = require('wait-finish');

class A extends Plugin {
    onload() {
        wait('CommandPanel').then((commandPanel) => {
            commandPanel.registerCommand({
                command: 'Generate ACG Pic on top',  // 命令含义
                shortcut: 'ctrl+alt+e,command+option+e',    // 快捷键（可选）
                description: '题头图使用随机ACG图片',  // 显示在命令下的描述
                callback: () => this.getAcgPic(),    // 回调函数
                plugin: 'MoreBackground',            // 插件名称
                pluginName: 'MoreBackground',        // 插件显示名称
            })
        });
    }
}

```# siyuan-plugin-command-panel
# siyuan-plugin-command-panel
