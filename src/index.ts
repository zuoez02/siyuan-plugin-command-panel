import 'reflect-metadata';
// @ts-ignore
import type { Shortcut } from '@/core/shortcut';
import CommandPanel__SvelteComponent_ from './command-panel.svelte';
import { _ } from '@/util';
import { ICommandManager } from './types';
import { TYPES } from './config';
import api from './api';
// @ts-ignore
import { finish } from 'wait-finish';

const { Plugin } = require('siyuan');

module.exports = class CommandPanelPlugin extends Plugin {
    shortcut: Shortcut;

    onload(): void {
        const container = api.container;
        const cm = container.get<ICommandManager>(TYPES.CommandManager);
        finish('CommandPanel', cm);
        finish('Core', { ...api, commandManager: cm });
        cm.registerCommand({
            command: 'Show command panel',
            description: _('show_command_panel'),
            shortcut: 'ctrl+shift+o,command+shift+o',
            callback: () => {
                this.showPanel();
            },
            plugin: 'CommandPanel',
            pluginName: 'CommandPanel',
        });
    }

    showPanel() {
        api.Dialog.destroyAll();
        new api.Dialog({ content: '<div id="command-panel"></div>' });
        setImmediate(() => {
            new CommandPanel__SvelteComponent_({
                target: document.getElementById('command-panel'),
            });
        });
    }

    onunload() {
        const cm = api.container.get<ICommandManager>(TYPES.CommandManager);
        cm.unregisterCommand({
            plugin: 'CommandPanel',
            pluginName: 'CommandPanel',
            command: 'Show command panel',
            description: _('show_command_panel'),
            shortcut: 'ctrl+shift+o,command+shift+o',
            callback: () => {
                this.showPanel();
            },
        });
    }
};
