import GGEditorCore from "./bundle";

export default class Editor extends GGEditorCore {
  constructor(options) {
    super(options);
    console.log(options, this);
  }

  componentDidMount() {
    console.log(this);
  }
}
