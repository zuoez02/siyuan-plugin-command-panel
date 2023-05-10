import * as serverApi from './api/server-api';
import * as clientApi from './api/client-api';
import { Menu, MenuItem, MenuSeparator } from './internal/classes/menu';
import { Dialog } from './internal/classes/dialog';
import { Notification } from './internal/classes/notification';
import { container } from './container';

export { clientApi, serverApi, Menu, MenuItem, MenuSeparator, Notification, Dialog, container };

export default {
    clientApi,
    serverApi,
    Menu,
    MenuItem,
    MenuSeparator,
    Notification,
    Dialog,
    container,
};
