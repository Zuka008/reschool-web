// 1
class AppConfig {
    constructor() {
        if (AppConfig.instance) {
            return AppConfig.instance;
        }

        this.theme = "light";
        AppConfig.instance = this;
    }

    setTheme(theme) {
        this.theme = theme;
    }
}

const config1 = new AppConfig();
const config2 = new AppConfig();
config1.setTheme("Dark-Green");

console.log(config1.theme);
console.log(config2.theme); 

// 2
function ShapeFactory(type) {
  if (type === "circle") {
    return { name: "Circle", sides: 0 };    
  }
  if (type === "triangle") {
    return { name: "Triangle", sides: 3 };
  }
  if (type === "square") {
    return { name: "Square", sides: 4 };
  }

}

const obieqti1 = ShapeFactory("triangle");
const obieqti2 = ShapeFactory("square");
const obieqti3 = ShapeFactory("circle");

console.log(obieqti1);
console.log(obieqti2); 
console.log(obieqti3); 
