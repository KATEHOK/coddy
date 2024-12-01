# Домашка к 2024-12-08

Сегодня на занятии мы продолжили рассмотрение CSS-стилизации.

## Теория

### [JS Bin](https://jsbin.com/)

Это простой онлайнредактор кода для HTML, CSS и JavaScript. Далее по курсу я буду использовать его для демонстрации работы JS-кода или CSS-свойств.

### [`cursor`](https://developer.mozilla.org/ru/docs/Web/CSS/cursor)

Устанавливает форму курсора, когда он находится в пределах элемента. Вид курсора зависит от операционной системы и установленных параметров.

Прежде чем воспользоваться возможностью переделать вид курсора, решите, а будет ли он использоваться к месту. Многих пользователей подобные изменения могут ввести в заблуждение, когда, например, вместо традиционной руки, появляющейся при наведении на ссылку, возникает нечто другое. В большинстве случаев, лучше оставить все как есть.

Синтаксис:
```css
cursor: [url('путь к курсору'),] | [ auto | crosshair | default | e-resize | help | move | n-resize | ne-resize | nw-resize | pointer | progress | s-resize | se-resize | sw-resize | text | w-resize | wait | inherit ]
```

Основные значения
- `auto` — Указатель устанавливается автоматически, в зависимости от контекста.
- `default` — Указатель по умолчанию (обычно стрелка).
- `none` — Указатель не отображается.
- `inherit` — Указатель наследуется от родительского элемента.

Указатели для взаимодействия
- `pointer` — Указатель в виде руки (обычно используется для ссылок).
- `help` — Указатель с вопросительным знаком (подсказка).
- `wait` — Указатель в виде часов (ожидание).
- `progress` — Указатель с индикатором загрузки.
- `context-menu` — Указатель для вызова контекстного меню.
- `move` — Указатель для перемещения.

Текстовые указатели
- `text` — Указатель в виде текстового курсора (I-образная форма).
- `vertical-text` — Указатель для вертикального текста.

Ресайзеры и прокрутка
- `col-resize` — Изменение ширины столбца.
- `row-resize` — Изменение высоты строки.
- `n-resize` — Изменение размера вверх.
- `e-resize` — Изменение размера вправо.
- `s-resize` — Изменение размера вниз.
- `w-resize` — Изменение размера влево.
- `ne-resize` — Изменение размера вверх и вправо.
- `nw-resize` — Изменение размера вверх и влево.
- `se-resize` — Изменение размера вниз и вправо.
- `sw-resize` — Изменение размера вниз и влево.
- `ew-resize` — Изменение размера по горизонтали.
- `ns-resize` — Изменение размера по вертикали.
- `nesw-resize` — Изменение размера по диагонали (северо-восток — юго-запад).
- `nwse-resize` — Изменение размера по диагонали (северо-запад — юго-восток).
- `all-scroll` — Указатель для перемещения в любом направлении.

Дополнительные указатели:
- `crosshair` — Указатель в виде перекрестия.
- `cell` — Указатель в виде креста, символизирующего ячейку таблицы.
- `alias` — Указатель для обозначения ярлыка или ссылки.
- `copy` — Указатель для копирования.
- `no-drop` — Указатель, сигнализирующий, что объект нельзя перетащить.
- `not-allowed` — Указатель, сигнализирующий запрет действия.
- `grab` — Указатель в виде открытой руки (для захвата объекта).
- `grabbing` — Указатель в виде зажатой руки (при перетаскивании).
- `zoom-in` — Указатель для увеличения.
- `zoom-out` — Указатель для уменьшения.

Пользовательские указатели
- `url('путь к курсору')` — Использование изображения из заданного пути в качестве курсора.

Пример:
```html
<body>
    <div class="block pointer">Pointer</div>
    <div class="block text">Text</div>
    <div class="block wait">Wait</div>
    <div class="block help">Help</div>
    <div class="block move">Move</div>
    <div class="block grab">Grab</div>
    <div class="block crosshair">Crosshair</div>
    <div class="block not-allowed">Not Allowed</div>
    <div class="block zoom-in">Zoom In</div>
</body>
```
```css
body {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    gap: 10px;
    padding: 20px;
    font-family: Arial, sans-serif;
}

.block {
    box-sizing: border-box;
    width: 100px;
    padding: 30px 0;
    border: 2px solid #ccc;
    cursor: default;
    text-align: center;
}

.block:hover {
    background-color: #d9eaff;
}

.pointer { cursor: pointer; }
.text { cursor: text; }
.wait { cursor: wait; }
.help { cursor: help; }
.move { cursor: move; }
.grab { cursor: grab; }
.grab:active { cursor: grabbing; }
.crosshair { cursor: crosshair; }
.not-allowed { cursor: not-allowed; }
.zoom-in { cursor: zoom-in; }
```

[Здесь](https://jsbin.com/wupebagatu/edit?html,css,output) вы можете увидеть работу этого кода.

### [`transform`](https://htmlbook.ru/css/transform)

CSS-свойство `transform` позволяет вам поворачивать, масштабировать, наклонять или сдвигать элемент. Оно модифицирует координатное пространство для CSS визуальной форматируемой модели.

Синтаксис:
```css
transform: <функция> [<функция>]* | none;
```

Функции трансформации:
- `matrix`. Задаёт [матрицу преобразований](https://htmlbook.ru/blog/matritsa-preobrazovanii)
- `rotate`. Поворот элемента на заданный угол относительно точки трансформации, задаваемой свойством transform-origin.
```css
transform: rotate([<угол>](https://htmlbook.ru/css/value/angle));
```
- `scale`. Масштаб элемента по горизонтали и вертикали. Значение больше 1 увеличивает масштаб элемента, меньше 1 — уменьшает масштаб.
```css
transform: scale(sx[, sy]);
```
- `scaleX`. Масштабирует элемент по горизонтали.
```css
transform: scaleX(sx);
```
- `scaleY`. Масштабирует элемент по вертикали.
```css
transform: scaleY(sy);
```
- `skewX`. Наклоняет элемент на заданный угол по вертикали.
```css
transform: skewX([<угол>](https://htmlbook.ru/css/value/angle))
```
- `skewY`. Наклоняет элемент на заданный угол по горизонтали.
```css
transform: skewY([<угол>](https://htmlbook.ru/css/value/angle))
```
- `translate`. Сдвигает элемент на заданное значение по горизонтали и вертикали.
```css
transform: translate(tx[, ty])
```
- `translateX`. Сдвигает элемент по горизонтали на указанное значение. Положительное значение сдвигает вправо, отрицательное влево.
```css
transform: translateX(tx)
```
- `translateY`. Сдвигает элемент по вертикали на указанное значение. Положительное значение сдвигает вниз, отрицательное вверх.
```css
transform: translateY(ty)
```

Пример:
```html
<div class="container">matrix<div class="matrix"></div></div>
<div class="container">rotate<div class="rotate"></div></div>
<div class="container">scale<div class="scale"></div></div>
<div class="container">scaleX<div class="scaleX"></div></div>
<div class="container">scaleY<div class="scaleY"></div></div>
<div class="container">skewX<div class="skewX"></div></div>
<div class="container">skewY<div class="skewY"></div></div>
<div class="container">translate<div class="translate"></div></div>
<div class="container">translateX<div class="translateX"></div></div>
<div class="container">translateY<div class="translateY"></div></div>
```
```css
* {
  margin: 0;
  padding: 0;
}
.container {
  border: 1px solid black;
  padding: 20px;
}
.container div {
  width: 100px;
  height: 100px;
  background-color: violet;
}
.matrix {
    transform: matrix(1, 0, -0.5, 1, 0, 0);
}
.rotate {
    transform: rotate(30deg);
}
.scale {
    transform: scale(0.7);
}
.scaleX {
    transform: scaleX(5.0);
}
.scaleY {
    transform: scaleY(0.5);
}
.skewX {
    transform: skewX(-60deg);
}
.skewY {
    transform: skewY(30deg);
}
.translate {
    transform: translate(20px, 30px);
}
.translateX {
    transform: translateX(400px);
}
.translateY {
    transform: translateY(-10px);
}
```

[Здесь](https://jsbin.com/tuxohosole/edit?html,css,output) вы можете увидеть работу этого кода.

### [`transition`](https://developer.mozilla.org/ru/docs/Web/CSS/transition)

Свойство CSS `transition` - это сокращённое свойство для `transition-property`, `transition-duration`, `transition-timing-function` и `transition-delay`.

Свойство `transition` позволяет определять переходное состояние между двумя состояниями элемента. Различные состояния могут быть определены с помощью псевдоклассов, таких как `:hover` или `:active` или установлены динамически с помощью JavaScript.

Пример:
```html
<div class="block-1">1</div>
<div class="block-2">2</div>
<div class="block-3">3</div>
<div class="block-4">4</div>
```
```css
* {
    font-size: 30px;
    font-weight: bold;
}
div {
    border: 1px solid black;
    margin-bottom: 20px;
    box-sizing: border-box;
    padding: 10px;
    background-color: #fc0;
    width: 150px;  
}
div:hover {
    width: 100%;
    color: red;
    background-color: violet;
    padding: 50px;
}
.block-1 {
    transition: width 300ms ease-in-out;
}
.block-2 {
    transition: width 300ms ease-in-out,
                color 1s ease;
}
.block-3 {
    transition: width 300ms ease-in-out,
                color 500ms ease,
                background-color 400ms linear;
}
.block-4 {
    transition: width 300ms ease-in-out,
                color 500ms ease,
                background-color 400ms linear,
                padding .5s ease-out;
}
```

[Здесь](https://jsbin.com/zapudecuca/edit?html,css,output) вы можете увидеть работу этого кода.

#### [`transition-property`](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property)

Свойство CSS `transition-property` задает свойства CSS, к которым следует применить эффект перехода. Обычно оно применяется в совокупности с другими `transition-`свойствами.

#### [`transition-duration`](https://developer.mozilla.org/ru/docs/Web/CSS/transition-duration)

Свойство `transition-duration` определяет продолжительность выполнения анимации. Значение по умолчанию равняется `0s`, т.е. отсутствие анимации.

Пример:
```css
.main-nav-item {
    transition-property: transform;
    transition-duration: 300ms;
}
.main-nav-item:hover {
    transform: scale(1.1);
}
.main-nav-item:active {
    transform: scale(0.9);
}
```
```css
.main-nav {
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
}

.main-nav-item {
    transition-property: transform;
    transition-duration: 300ms;
}
```

[Здесь](https://jsbin.com/wuvadebake/1/edit?html,css,output) вы можете увидеть работу этого кода.

В данном примере изменение размера объекта при наведении или нажатии на него курсором мыши будет происходить плавно (в течение указанных 300 милисекунд). 

#### [`transition-timing-function`](https://htmlbook.ru/css/transition-timing-function)

Устанавливает, насколько быстро должно изменяться значение стилевого свойство для которого применяется эффект перехода.

Свойство `transition-timing-function` представляет собой математическую функцию, показывающую, как быстро по времени меняется указанное через `transition-property` значение свойства.

Синтаксис:
```css
Синтаксис
transition-timing-function: ease|ease-in|ease-out|ease-in-out|linear|step-start|step-end|steps|cubic-bezier;
```

Значения:
- `ease`. Анимация начинается медленно, затем ускоряется и к концу движения опять замедляется.
- `ease-in`. Анимация медленно начинается, к концу ускоряется.
- `ease-out`. Анимация начинается быстро, к концу замедляется.
- `ease-in-out`. Анимация начинается и заканчивается медленно.
- `linear`. Одинаковая скорость от начала и до конца.
- `step-start`. Как таковой анимации нет. Стилевые свойства сразу же принимают конечное значение.
- `step-end`. Как таковой анимации нет. Стилевые свойства находятся в начальном значении заданное время, затем сразу же принимают конечное значение.
- `steps`. Ступенчатая функция, имеющая заданное число шагов. `transition-timing-function: steps(<число>, start | end)`. Здесь: `<число>` — целое число больше нуля; `start` — задаёт полунепрерывную снизу функцию; `end` — задаёт полунепрерывную сверху функцию.
- `cubic-bezier`. Задаёт функцию движения в виде кривой Безье.

Пример:
```html
<div class="erase">ease</div>
<div class="erase-in">ease-in</div>
<div class="erase-out">ease-out</div>
<div class="erase-in-out">ease-in-out</div>
<div class="linear">linear</div>
<div class="step-start">step-start</div>
<div class="step-end">step-end</div>
<div class="steps">steps</div>
<div class="cubic-bezier">cubic-bezier</div>
```
```css
div {
    border: 1px solid black;
    margin-bottom: 20px;
    box-sizing: border-box;
    padding: 10px;
    background-color: #fc0;
    width: 150px;

    transition-property: width;
    transition-duration: 1s;
}
div:hover {
    width: 100%;
}
.erase {
    transition-timing-function: ease;
}
.erase-in {
    transition-timing-function: ease-in;
}
.erase-out {
    transition-timing-function: ease-out;
}
.erase-in-out {
    transition-timing-function: ease-in-out;
}
.linear {
    transition-timing-function: linear;
}
.step-start {
    transition-timing-function: step-start;
}
.step-end {
    transition-timing-function: step-end;
}
.steps {
    transition-timing-function: steps(5, end);
}
.cubic-bezier {
    transition-timing-function: cubic-bezier(0.1, -0.6, 0.2, 0);
}
```

[Здесь](https://jsbin.com/sazukaqana/edit?html,css,output) вы можете увидеть работу этого кода.

#### [`transition-delay`](https://htmlbook.ru/css/transition-delay)

Свойство `transition-delay` устанавливает время ожидания перед запуском эффекта перехода. Значение `0s` или `0ms` запускает анимацию сразу же. Отрицательное значение также включает анимацию без задержек, но может привести к изменению вида начала анимации.

Допустимо указывать несколько значений, перечисляя их через запятую. Каждое значение будет применяться к свойству, заданному в параметрах `transition-property`.

Синтаксис:
```css
transition-delay: <время> [,<время>]*;
```

Пример:
```html
<div class="block-1">0s</div>
<div class="block-2">-100ms</div>
<div class="block-3">300ms</div>
<div class="block-4">1s</div>
```
```css
div {
    border: 1px solid black;
    margin-bottom: 20px;
    box-sizing: border-box;
    padding: 10px;
    background-color: #fc0;
    width: 150px;

    transition-property: width;
    transition-duration: 1s;
    transition-timing-function: ease-in-out;
  
}
div:hover {
    width: 100%;
}
.block-1 {
    transition-delay: 0s;
}
.block-2 {
    transition-delay: -100ms;
}
.block-3 {
    transition-delay: 300ms;
}
.block-4 {
    transition-delay: 1s;
}
```

[Здесь](https://jsbin.com/gogiyimewo/edit?html,css,output) вы можете увидеть работу этого кода.

## Домашка

### Download changes

Перед непосредственным выполнением домашней работы необходимо синхронизировать локальный и удаленный репозитории. Для этого скачиваем все изменения из удаленного репозитория с помощью команды:

```bash
git pull
```

Если на этом или последующих этапе возникает вопрос, ошибка или нестандартное поведение программы, пишите мне в личку, прикладывая скрин проблемы/ошибки, постараюсь помочь.

### Тень базовых блоков

Без лишних слов - добавьте базовым блокам (которые являются дочерними для `body.body`) тень (свойство `box-shadow`). Цвет тени подберите такой, чтобы он сочетался с окружающими цветами. Смещение тени лучше оставьте нулевым, а вот размытие увеличьте (чтобы тень не была контрастной).

### `gap` - вместо `margin`-ов

В одной из предыдущих домашек ужно было использовать `margin-bottom` для базовых блоков сайта собственного блога. При этом для подвала сайта было необходимо занулить этот `margin`, ведь он является последним элементом в своем контейнере. Таким образом, приходилось прописывать несколько строчек кода, хотя этого же эффекта можно было бы добиться, используя свойство `gap`.

Итак, необходимо убрать `margin-bottom`, прописанный ранее для элементов с классом `main-container`, а также убрать `margin`, прописанный ранее для элемента `.main-container:last-child` (напомню, что такая запись означает: класс `main-container`, последний сестренский элемент). После этого надо прописать `gap: 20px;` для элемента `body` (напомню, что все элементы мы пока что стилизуем с помощью селекторов классов; то есть, `gap` нужно прописать в блоке стилизации с селектором `.body`).

В дальнейшем мы теперь всегда будем использовать свойство `gap` вместо `margin`, если в каком-либо контейнере расстояния между его дочерними элементами должны быть одинаковыми.

### Увеличение ссылок в навигации

На зпнятии 1 декабря мы с вами познакомились со свойством `transform`. Одна из его функций - `scale()` - позволяет изменять размер элемента, к которому ее применяют. В связи с этим предлагаю добавить для элементов навигации эффект увеличения при наведении на них руксора мыши, а также эффект уменьшения при нажатии на эти элементы (вспомните про псевдоклассы `:hover` и `:active`).

### Плавные изменения

Если вы последовательно выполняли все домашки, то в нашем основном проекте должно быть несколько элементов, стилизация которых меняется в зависимости от некоторых событий (вспомните про псевдоклассы `:visited`, `:hover` и `:active`). На данный момент изменения их стилизации происходят рывком, что не слишком приятно для глаза.

На занятии мы познакомились с группой свойств `transition`, позволяющих создавать плавные изменения и даже анимации. Итак, с помощью этой группы свойств вы должны реализовать плавное изменение цвета шрифта для ссылок (лбъектов с классом `.link`) и свойства `transform` элементов навигации. Чтобы эффекты были синхронизированы, используйте в качестве длительности изменения значение `100ms`, а также выберите какую-нибудь одну функцию изменения во времени (например, `ease-in-out`).

### Форматирование в html-файлах

Периодически каждому из вас говорил, но что-то мало, кто внимал мне. Форматирование в html-документах должно быть простым для прочтения, беглово взгляда на ваш код должно быть достаточно, чтобы опреденить иерархию элементов. Для этого существуют определенные соглашения, напримаер, дочерние элементы должны иметь отступ на один размер табуляции больше своих родителей, сестренские элементы должны иметь одинаковый уровень отступа.

Итак, вам необходимо выровнить код в своих html-файлах, согласно тим двум правилам. Как вариант, можете ориентироваться на оформление в моих файлах: [index.html](./project/html/profile.html), [profile.html](./project/html/profile.html), [favourite_pc_game.html](./project/html/favourite_pc_game.html).

### Форматирование и порядок правил в css-файлах

Во-первых, из тех же соображений, что были написаны в предыдущем пункте необходимо поправить форматирование в ваших css-файлах: селекторы должны начинаться с новой строки, css-правила должны иметь отступ в размере одной табуляции. Как вариант, можете ориентироваться на форматирование в моем файле [style.css](./project/style/style.css).

Во-вторых, ваши блоки стилизации в css-файле должны распологаться в логичном порядке, чтобы любой человек, открыв ваш файл, мог без труда найти стилизацию конкретного объекта, даже если в вашем файле ооочень много кода. Для этого я рекомендую придерживаться правила "от общего - к частному". Что это значит и для чего оно нужно?

#### От общего - к частному

Я уже как-то упоминал, что при одинаковом приоритете css-селекторов в случае неоднократного указания одного и того же css-правила для какого-то объекта только самое нмжнее по коду будет применено. То есть, последующее изменение правила как бы перезаписывает предыдущее.

Например, у нас с вами есть общий класс `heading` - для вообще любых заголовков, а также класс `sub-heading` - для заголовков 3 уровня.
```html
<h1 class="heading main-heading">Мой профиль</h1>
<h3 class="heading sub-heading">Katehok</h3>
<p class="txt">...</p>
```
Предположим, мы решили, что все заголовки должны иметь семейство шрифтов `'Segoe UI'` и нижний внешний отступ в `10px`. Также предположим, что для заголовков 3 уровня мы хотим указать внешний нижний отступ размером в `5px`. В таком случае нам следует записать блоки стилизации для наших заголовковв следующем порядке:
```css
.heading {
    font-family:'Segoe UI';
    margin-bottom: 10px;
}
.sub-heading {
    margin-bottom: 5px;
}
```
В таком случае правило `margin-bottom: 5px;` для объектов с классом `sub-heading` перезапишет правило `margin-bottom: 10px;`, указанное выше. Если же мы бы расположили эти блоки стилизации в противоположном порядке, то тогда для всех заголовков, в том числе и для заголовков 3 уровня, применился бы нижний отступ в 10 пикселей, что не отвечает нашей задумке.

В связи с этим вы должны определить в своем css-файле, какие блоки стилей являются более общими, а какие более частными и расположить их в порядке возрастания частности (то есть, от общих - к частным). Как уже писал выше, для примера можете ориентироваться на расположение в моем css-файле [style.css](./project/style/style.css).

### Pass task
Когда выполнили все задания, добавляете измененные файлы проекта в индекс гита, создаете коммит, отправляете на GitHub:
```bash
# Добавляем измененные файлы в индекс гита (. - добавить все)
git add .

# Создаем коммит на основании изщменений, добавленных в индекс гита, задаем сообщение коммита
git commit -m "Finally done my homework to 2024-12-08"

# Загружаем изменения в удаленный репозиторий на гитхабе
git push
```
После этого скидываете мне в личку ссылку на ваш гитхаб-репозиторий. Если скинете до пятницы 6 часов вечера, то в течение суток гарантированно получите обратную связь с разбором ошибок и предложениями по улучшению.

### Recomendations
- группируйте CSS-селекторы разных объектов вместе, если задаете им одинаковые правила,
- делайте и сдавайте дз как можно раньше, чтобы я успел проверить и дать фидбэк.

#### Всем удачи!