import common = require("./bottombar.common");
import { PropertyChangeData } from "ui/core/dependency-observable";
import { EventData } from "data/observable";

//export declare module nativescriptbottombar {
export class BottomBarItem extends common.BottomBarItem {
    private _title;
    private _icon;
    private _color;
    private _notification;
    private _index;
    private _parent;
    constructor(index: any, title: any, icon: any, color: any, notification?: any, parent?: any);
    index: number;
    title: string;
    icon: string;
    color: string;
    notification: any;
    parent: BottomBar;
}
export interface SelectedIndexChangedEventData extends EventData {
  oldIndex: number;
  newIndex: number;
}
export const enum TITLE_STATE {
  SHOW_WHEN_ACTIVE = 0,
  ALWAYS_SHOW = 1,
  ALWAYS_HIDE = 2,
}
export class BottomBar extends common.BottomBar {
  private _android;
  _listener: any;
  readonly android: any;
  readonly _nativeView: any;
  readonly currentIndex: number;
  _createUI(): void;
  _onItemsPropertyChangedSetNativeValue(data: PropertyChangeData): void;
  _onSelectedIndexPropertyChangedSetNativeValue(data: PropertyChangeData): void;
  _titleStatePropertyChangedSetNativeValue(data: PropertyChangeData): void;
  _hidePropertyChangedSetNativeValue(data: PropertyChangeData): void;
  private setTitleStateNative(newTitleState);
}

//}
