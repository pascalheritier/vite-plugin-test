import {BaseModel} from "framework-model"

export class PluginableModel extends BaseModel {

    constructor() {
        super();
        this.Text = 'My text displayed in a plugin view, with text from a plugin model';
        // this.BaseText = 'Overridden text'; // uncomment to override base class text
    } 
    
    Text: string;
}