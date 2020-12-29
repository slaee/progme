function isInvalidElement(element) {
    if (!(element instanceof Element) && typeof element !== "string") return 1;
    else return 0;
}

function createTag(tag_name, property = {}) {
    if (isInvalidElement(tag_name))
        throw new Error(`${tag_name} is invalid element`);

    let element =
        tag_name instanceof Element
            ? tag_name
            : document.createElement(tag_name);

    for (key in property) {
        if (property[key] === undefined) continue;

        if (key === "child") {
            let child = property[key];
            if (element instanceof Node) 
                element.append(child);
        } 
        else if (key == "children" && Array.isArray(property[key])) {
            element.append(...property[key]);
        } 
        else if (key == "attr") {
            for (let attr in property[key])
                element.setAttribute(attr, property[key][attr]);
        } 
        else if (property[key].constructor.name === "Object") {
            for (let obj in property[key]) 
                element[key][obj] = property[key][obj];
        } else {
            element[key] = property[key];
        }
    }

    return element;
}

createTag.get = (selector) => {
    const el = document.querySelector(selector);
    if (!el) return null;
    return createTag(el);
};

createTag.getAll = (selector) => {
    const all = document.querySelectorAll(selector);
    const allAr = [...all];

    allAr.map((el) => {
        createTag(el);
    });

    return allAr;
};

createTag.parse =  (html) => {
    const div = createTag("div");
    div.innerHTML = html;
    if (div.childElementCount === 1) {
        return createTag(div.firstElementChild);
    } else {
        return [...div.children];
    }
};

createTag.template = (html, values) => {
    if (values) {
        for (let key in values) {
            if (!/^[a-z_][a-z0-9_\-]*$/.test(key)) continue;
            html = html.replace(new RegExp(`{{${key}}}`, "g"), values[key]);
        }
    }

    html = html.replace(/{{[a-z_][a-z0-9_\-]*}}/g, "");
    return html;
};

export default createTag;