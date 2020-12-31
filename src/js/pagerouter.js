import createTag from "./html-tag";

function Router(page = {}){
    for(let key in page){
        switch(typeof page[key]){
            case "string":
                let link = createTag('a', {
                    id: "page",
                    href: page[key],
                    innerText: key //the property name will be the innerText of the tag
                });
                document.body.append(link);
                
                break;
            case "function":
                console.log("im a function");
                break;
            case "object":
                console.log("Im an object");
                break;

            default:
                throw new Error(`${key} property value is not a type of page`);
        }
    }
}

Router.createPage= function(template = {}){

}

export default Router;