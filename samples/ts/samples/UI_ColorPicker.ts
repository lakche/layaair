/// <reference path="../../../bin/ts/LayaAir.d.ts" />
module laya {
    import Stage = laya.display.Stage;
    import ColorPicker = laya.ui.ColorPicker;
    import Browser = laya.utils.Browser;
    import Handler = laya.utils.Handler;
    import WebGL = laya.webgl.WebGL;

    export class UI_ColorPicker {
        private skin: string = "res/ui/colorPicker.png";

        constructor() {
            // 不支持WebGL时自动切换至Canvas
            Laya.init(Browser.clientWidth, Browser.clientHeight, WebGL);

            Laya.stage.alignV = Stage.ALIGN_MIDDLE;
            Laya.stage.alignH = Stage.ALIGN_CENTER;

            Laya.stage.scaleMode = Stage.SCALE_SHOWALL;
            Laya.stage.bgColor = "#232628";

            Laya.loader.load(this.skin, Handler.create(this, this.onColorPickerSkinLoaded));
        }

        private onColorPickerSkinLoaded(): void {
            var colorPicker: ColorPicker = new ColorPicker();
            colorPicker.selectedColor = "#ff0033";
            colorPicker.skin = this.skin;

            colorPicker.pos(100, 100);
            colorPicker.changeHandler = new Handler(this, this.onChangeColor, [colorPicker]);
            Laya.stage.addChild(colorPicker);

            this.onChangeColor(colorPicker);
        }

        private onChangeColor(colorPicker: ColorPicker): void {
            console.log(colorPicker.selectedColor);
        }
    }
}
new laya.UI_ColorPicker();