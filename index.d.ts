import common = require("./bottombar.common");
import { PropertyChangeData } from "ui/core/dependency-observable";
export declare module nativescriptbottombar {
  class BottomBarItem extends common.BottomBarItem {
    _update(): void;
  }
  class BottomBar extends common.BottomBar {
    private _android;
    _listener: any;
    readonly android: any;
    readonly _nativeView: any;
    readonly currentIndex: number;
    _createUI(): void;
    _onItemsPropertyChangedSetNativeValue(data: PropertyChangeData): void;
    _onSelectedIndexPropertyChangedSetNativeValue(data: PropertyChangeData): void;
    _titleStatePropertyChangedSetNativeValue(data: PropertyChangeData): void;
    private setTitleStateNative(newTitleState);
  }

}
