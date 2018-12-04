    fetch("http://localhost:8088/food")
    // This makes a request to a specific domain,
    // port address, and resource on the Web.
    .then(foods => foods.json())
    // This line of code accepts the response from your request,
    // parses the body of the response as JSON and returns it to
    // any subsequent then() method.
    .then(parsedFoods => {
    // This line of code accepts the parsed JSON as the argument
    // to a function, and then uses console.table() to display
    // the results.
    console.table(parsedFoods);

        const vid = function(style, fid) {
            return `<fieldset class="${style}">
                    <label for "id">ID</label>
                    <input type="num" name="id" value="${fid}">
                </fieldset>`;
        };
        const vname = function(style, fname) {
            return `<fieldset class="${style}">
                    <label for "name">Name</label>
                    <input type="text" name="name" value="${fname}">
                </fieldset>`;
        };

        const vtype = function(style, ftype) {
            return `<fieldset class="${style}">
                    <label for "type">Type</label>
                    <input type="text" name="type" value="${ftype}">
                </fieldset>`;
        };

        const vethnicity = function(style, fethnicity) {
            return `<fieldset class="${style}">
                    <label for "ethnicity">Ethnicity</label>
                    <input type="text" name="ethnicity" value="${fethnicity}">
                </fieldset>`;
        };

        const foodFactory = function(id, name, type, ethnicity) {
            return `<article>
                ${vid("idstyling", id)}
                ${vname("namestyling", name)}
                ${vtype("typestyling", type)}
                ${vethnicity("ethnicitystyling", ethnicity)}
            </article>`;
        };
        const addFoodToDom = function() {
            addFood = document.createElement("section");
            addFood.innerHTML = foodAsHTML;
            document.querySelector("div").appendChild(addFood);
        };

        const container = document.querySelector("#container");

            parsedFoods.forEach(food => {
            foodAsHTML = foodFactory(food.id, food.name, food.type, food.ethnicity);
            console.log(foodAsHTML);
            addFoodToDom(foodAsHTML);
            });
    });