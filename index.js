let counter = 1;

const displayData = (num = counter + 25) => {
    while (counter < num) {
        let h1 = document.createElement("h1");
        h1.innerHTML = `Masai Student ${counter}`;
        counter++;
        document.getElementById("main").append(h1)
    }

}

const debouncing = (func, delay) => {
    return function () {
        setTimeout(() => {
            func();
        }, delay)
    }
}

let myFunc = debouncing(displayData, 500);

myFunc();

let container = document.getElementById("main")
container.addEventListener("scroll", () => {
    if (container.offsetHeight + container.scrollTop >= container.scrollHeight) {
        myFunc();
    }
})