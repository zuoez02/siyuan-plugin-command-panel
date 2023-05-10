import { Container } from 'inversify';
import { TYPES } from './config';
import { IEventBus, IShortcut, ICommandManager } from './types';
import { EventBus } from './core/event-bus';
import { CommandManager } from './core/command-manager';
import { Shortcut } from './core/shortcut';

const container = new Container();
container.bind<IEventBus>(TYPES.EventBus).to(EventBus);
container.bind<IShortcut>(TYPES.Shortcut).to(Shortcut).inSingletonScope();
container.bind<ICommandManager>(TYPES.CommandManager).to(CommandManager).inSingletonScope();

export { container };
