const ui = (function () {
    return {
        get: function () {
            return {
                is: document.querySelector(".ma").value,
                text: document.querySelector(".text-1").value,
                number: document.querySelector(".text-2").value,
            }
        },
        clear: function () {
            const fields = document.querySelectorAll(".text-1" + "," + ".text-2");

            const arr = Array.prototype.slice.call(fields);

            for (var i = 0; i < arr.length; i++) {
                arr[i].value = "";
            }
        },
        // saw: function (take) {
        //     document.querySelector(".list-2").textContent = take.point;
        //     document.querySelector(".li-2").textContent = take.totalInc;
        //     document.querySelector(".li-4").textContent = take.totalExp;
        // },

        list: function (item, is) {
            let html, list;
            if (is === "inc") {
                list = ".plus"
                html = `<div class="point">
                <div class="po1" id="po"></div>
                <div class="po2">+tsalin</div>
                <div class="po3">+2.22500</div>
            </div> `;
            } else {
                list = ".minus"
                html = `<div class="point-2">
                <div class="nt1" id="po"></div>
                <div class="nt2">tetgewer</div>
                <div class="nt3">+2.22500</div>
            </div>`;
            }
            html = html.replace("po", item.id);
            html = html.replace("+tsalin", item.text);
            html = html.replace("+2.22500", item.number);

            document.querySelector(list).insertAdjacentHTML("beforeend", html);
        }
    }
})();

const dis = (function () {

    const Orlogo = function (id, text, number) {
        this.id = id;
        this.text = text;
        this.number = number;
    };

    const Zarlaga = function (id, text, number) {
        this.id = id;
        this.text = text;
        this.number = number;
    };

    // const total = function (is) {
    //     let sum = 0;
    //     data.items[is].forEach(function (el) {
    //         sum = sum + el.number
    //     })
    //     data.items[is] = sum;

    // }

    var data = {
        items:
        {
            inc: [],
            exp: []
        },

        totals: {
            inc: 0,
            exp: 0
        },
        point: 0,

    };

    return {
        // tootsooloh: function () {
        //     total("inc");
        //     total("exp");

        //     data.point = data.totals.inc - data.totals.exp;


        // // },
        // take: function () {
        //     return {
        //         point: data.point,
        //         totalInc: data.totals.inc,
        //         totalExp: data.totals.exp
        //     }
        // },
        addItem: function (is, te, num) {
            let item, id;

            if (data.items[is].length === 0)
                id = 1;
            else {
                id = data.items[is][data.items[is].length - 1].id + 1;
            }

            if (is === "inc") {
                item = new Orlogo(id, te, num);
            } else {
                item = new Zarlaga(id, te, num);
            }

            data.items[is].push(item);

            return item;
        }
    }
})();


const connect = (function (ui, dis) {
    const creItem = function () {
        const inp = ui.get();
        if (inp.text !== "" && inp.value !== "") {
            const item = dis.addItem(inp.is, inp.text, inp.number);
            console.log(item)
            console.log(inp);

            ui.list(item, inp.is);
            ui.clear();

            // dis.tootsooloh();

            // const taken = dis.take();

            // ui.saw(taken);

            // console.log(taken);
        }
    };

    document.querySelector(".enter").addEventListener("click", function () {
        creItem();
    })

    document.addEventListener("keypress", function (event) {
        if (event.keyCode === 13) {
            creItem();
        }
    });


})(ui, dis);



