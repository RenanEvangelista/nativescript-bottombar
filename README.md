[![npm](https://img.shields.io/npm/v/nativescript-bottombar.svg)](https://www.npmjs.com/package/nativescript-bottombar)
[![npm](https://img.shields.io/npm/dt/nativescript-bottombar.svg?label=npm%20downloads)](https://www.npmjs.com/package/nativescript-bottombar)

# NativeScript Bottom Navigation

NativeScript plugin for AHBottomNavigation.
https://github.com/aurelhubert/ahbottomnavigation

Only for Android, why? Because TabViews are available in iOS for a BottomBar :smile:

## Demo

<img src="https://raw.githubusercontent.com/aurelhubert/ahbottomnavigation/master/demo1.gif" width="208" height="368" /> <img src="https://raw.githubusercontent.com/aurelhubert/ahbottomnavigation/master/demo2.gif" width="208" height="368" /> <img src="https://raw.githubusercontent.com/aurelhubert/ahbottomnavigation/master/demo3.gif" width="208" height="368" /> <img src="https://raw.githubusercontent.com/aurelhubert/ahbottomnavigation/master/demo4.gif" width="208" height="368" />

## Install (Under active developpment)
```bash
tns plugin add nativescript-bottombar
```

# Usage



## Vanilla NativeScript



### XML

IMPORTANT: Make sure you include ``xmlns:btn:"nativescript-bottombar"`` on the Page element

```xml
...
xmlns:btn="nativescript-bottombar"
...

<btn:BottomBar tabSelected="tabSelected">
  <btn:BottomBar.items>
    <btn:BottomBarItem title="Cake" icon="ic_cake_white_24dp" color="#4CAF50" />
    <btn:BottomBarItem title="Favorites" icon="ic_favorite_white_24dp" color="#2196F3" />
    <btn:BottomBarItem title="Settings" icon="ic_settings_white_24dp" color="#FF4081" />
  </btn:BottomBar.items>
</btn:BottomBar>
```

### TypeScript 

```typescript
export function tabSelected(args) {
    console.log(args.eventName + ' ' + args.oldIndex + ' ' + args.newIndex)
}
```
## Angular NativeScript


### XML
   
```xml
<GridLayout rows="*, auto">
    <Label row="0" text="test"></Label>
    <GridLayout row="1">
        <Label text="bottomnavigation component"></Label>
        <BottomNavigation [items]="items" (tabSelected)="tabSelected($event)">
        </BottomNavigation>
    </GridLayout>
</GridLayout>
```
### Component

```typescript
import { Component } from "@angular/core";
import {registerElement} from 'nativescript-angular/element-registry';
import {SelectedIndexChangedEventData} from 'nativescript-bottombar';
registerElement("BottomBar", () => require("nativescript-bottombar").BottomBar);
registerElement("BottomBarItem", () => require("nativescript-bottombar").BottomBar);
@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent {
    items: Array<any> = [
        {
            title: "Calendar", // Your title
            icon: "ic_collaborator", // Your path to icon (App_Ressources > drawables, should be 24dp)
            color: "#4CAF50" // Hexa color of the BottomBar when item active
        },
        {
            title: "Profile",
            icon: "ic_collaborator",
            color: "#4CAF50"
        },
        {
            title: "Message",
            icon: "ic_collaborator",
            color: "#4CAF50"
        }
    ];

    tabSelected (args: SelectedIndexChangedEventData) {
        console.log(args.oldIndex);
        console.log(args.newIndex);
    }
}
```
