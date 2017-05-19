import { Component, ElementRef, ViewChild } from "@angular/core";
import { registerElement } from 'nativescript-angular';
import { BottomBar, BottomBarItem, TITLE_STATE, SelectedIndexChangedEventData, Notification } from 'nativescript-bottombar';

registerElement('BottomBar', () => BottomBar);

@Component({
    selector: "nsapp",
    templateUrl: "app.component.html",
})

export class AppComponent {
    public hidden: boolean;
    public colored: boolean;
    public titleState: TITLE_STATE;
    public _bar: BottomBar;
    public inactiveColor: string;
    public accentColor: string;

    public items: Array<BottomBarItem> = [
        new BottomBarItem(0, "Home", "ic_home_black_24dp", "black"),
        new BottomBarItem(1, "Calendar", "ic_calendar", "#1083BF", new Notification("green", "blue", "")),
        new BottomBarItem(2, "Profile", "ic_collaborator", "pink", new Notification("pink", "yellow", "")),
        new BottomBarItem(3, "Message", "ic_paperplane", "green", new Notification("white", "red", "1"))
    ];
    constructor() {
        this.hidden = false;
        this.colored = true;
        this.titleState = TITLE_STATE.SHOW_WHEN_ACTIVE;
        this.inactiveColor = "white";
        this.accentColor = "blue";
    }

    tabSelected(args: SelectedIndexChangedEventData) {
        console.log(args.newIndex);
        if (args.newIndex !== args.oldIndex) {
            this._bar.setNotification("", args.newIndex);
        }
    }

    tabLoaded(event) {
        this._bar = <BottomBar>event.object
        console.log('tabLoaded');
    }
    selectItem() {
        this._bar.selectItem(0);
    }

    getCurrentIndex() {
        console.log(this._bar.selectedIndex);
    }

    toggleHide() {
        this.hidden = !this.hidden;
    }

    toggleColored() {
        this.colored = !this.colored;
    }
}