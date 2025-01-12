# К 2025-01-19

## Теория

Рекомендую канал [Александр Ламков — Friendly Frontend | YouTube](https://www.youtube.com/@AleksanderLamkov/). Автор снимает крутейшие видосы по фронденд-разработке, обясняя понятным языком различные аспекты.

### Анимации CSS

В сети оч много инфы по теме, так что не вижу смыслаписать это все самому:
- видео по теме: [19. Анимации в CSS. Правило @keyframes. Свойство animation. Настройка анимаций | Александр Ламков — Friendly Frontend | YouTube](https://youtu.be/3a_iaHqazHo?si=QIDEE37PxpX5y0Z4).
- статья по теме: [CSS-анимации | Дока](https://doka.guide/css/animation/).

## Занятие

Сегодня на занятии мы практиковались в использовании анимации CSS. На примере создания простейшего макета Солнечной системы. 

### Сделали

#### Приготовления

Сначала мы создали стандартную файловую структуру для сайта:

Папка `solar_system/` - папка проекта, в ней:
- папка `html/` - для html-файлов сайта, в ней:
    - файл `index.html` - основная страница сайта;
- папка `css/` - для файлов стилей сайта, в ней:
    - файл `main.css` - основные стили сайта;
- папка `img/` - для изображений сайта, в ней:
    - картинки из архива, который я скидывал в чат в ТГ.

Далее в `index.html` была создана стандартная структура html-документа и подключен файл стилей `main.css`. 

`html/index.html`:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/main.css">
    <title>Document</title>
</head>
<body>

</body>
</html>
```

Далее в файле стилей при помощи универсального селектора были сброшены отступы и изменена схема расчета размеров на `border-box` для всех элементов страницы.

Также в блоке для селектора `:root` были определены две переменные для периода обращения планеты и радиуса орбиты планеты - соответственно.

Также для элемента по селектору `body` были указаны такие размеры, чтобы он занял весь экран.

`css/main.css`:
```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --base-year: 5s;
    --base-radius: 150px;
}

body {
    width: 100%;
    height: 100vh;
}
```

#### Звездное небо

Внутри элемента `body` был добавлен тэг `div` с классом `stars`. Этот тэг будет являться контейнером для всей остальной солнечной системы.

```html
<div class="stars"></div>
```

В файле стилей добавили блок с селектором `.start` для стилизации звездного неба.

В этом блоке прописали свойство `position` со значением `relative` - позже пригодится. Чтобы звездное небо занимало все пространство, было добавлено свойство `height`.

Для изображения черного космоса для фона был добавлен соответствующий цвет, а для звезд - изображение. Чтобы рисунок со звездами занял все пространство, было добавлено свойство `background-size`.

```css
.stars {
    position: relative;
    height: 100%;
    background-size: cover;
    background-color: #000;
    background-image: url(../img/stars.png);
}
```

Эффект мерцания звезд было решено делать при помощи дополнительного изображения с прозрачным фоном и черными пятнами. Предполагалось, что пятна будут двигаться по экрану, перегораживая временно часть звезд.

Для такой анимации (названной `move-start`) были добавлены ключевые кадры, меняющие позицию фона со значения `0 0` на значение `5000px 5000px`. Такое большое значение было выбрано с запасом, чтобы оно подходило для очень больших мониторов.

```css
@keyframes move-stars {
    from {
        background-position: 0 0;
    }

    to {
        background-position: 5000px 5000px;
    }
}
```

Само же изображение перекрытия было добавлено с помощью селектора псевдоэлемента `::after` для селектора `.start`.

Псевдоэлементы был преобразован в блочный и растянут по ширине и высоте на все доступное пространство. На фон ему было добавлено изображение `twinkling.png`.

Также данному псевдоэлементу были применены свойства анимации (название, длительность, количество итераций и временная функция).

```css
.stars::after {
    animation-name: move-stars;
    animation-duration: 120s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    width: 100%;
    height: 100%;
    content: "";
    display: block;
    background-image: url(../img/twinkling.png);

}
```

#### Солнце

Для добавления Солнца использовался тэг `img` с классом `sun` и источником `../img/sun.png`. Элементы был добавлен внутрь тэга звездного неба.

```html
<img src="../img/sun.png" alt="sun" class="sun">
```

Из стилей к селектору `.sun` были применены только изменение отображения на блочное и центрирование при помощи абсолютного позиционирования относительно блока `div.start` (именно для этого ему добавлялось `position: relative;`).

```css
.sun {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform:
        translateY(-50%)
        translateX(-50%);
}
```

#### Орбита планеты

В роли орбиты планеты было решено вставить сразу после Солнца блок `div` с классами `orbit` - для орбит каждой из планет; и `earth-orbit` - для орбиты планеты Земля. В роли планеты использовался тэг `img` с классами `planet` - для каждой из планет; и `earth` - для планеты Земля. Тэг Земпи был помещен внутрь тэга орбиты.

```html
<div class="orbit earth-orbit">
    <img src="../img/earth.png" alt="earth" class="planet earth">
</div>
```

Для создания анимации обращения планеты вокруг Солнца было решено поворачивать элемент орбиты вокруг своей оси. Для этого были созданы ключевые кадры `rotate-planet`.

```css
@keyframes rotate-planet {
    from {
        transform: rotate(0);
    }

    to {
        transform: rotate(360deg);
    }
}
```

Элемент орбиты был центрирован при помощи абсолютного позиционирования относительного объекта-родителя и свойства трансформации.

Чтобы орбита имела конкретные размеры, ей были заданы параметры ширины и высоты, равные удвоенному значению переменной-радиуса.

Чтобы планета на орбите занимала позицию слева по центру, орбита была превращена во флекс-контейнер, и ей были добавлены соответствующие свойства.

И наконец, были добавлены свойства анимации: название, продолжительность (равна значению переменной-периода), временная функция и количество итераций.

```css
.orbit {
    animation-name: rotate-planet;
    animation-duration: var(--base-year);
    animation-timing-function: linear;
    animation-iteration-count: infinite;

    position: absolute;
    top: 50%;
    left: 50%;
    transform:
        translateY(-50%)
        translateX(-50%);

    width: calc(2 * var(--base-radius));
    height: calc(2 * var(--base-radius));

    display: flex;
    justify-content: start;
    align-items: center;
}
```

#### Результат

В результате все анимации успешно работают, однако есть проблема: Земля обращается не вокруг Солнца, а вокруг другой точки.

Но время урока закончилось, и было решено, что я сегодня же напишу, как это дело пофиксить.

## Домашка

### Download changes

Перед непосредственным выполнением домашней работы необходимо синхронизировать локальный и удаленный репозитории. Для этого скачиваем все изменения из удаленного репозитория с помощью команды:

```bash
git pull
```

Если на этом или последующих этапе возникает вопрос, ошибка или нестандартное поведение программы, пишите мне в личку, прикладывая скрин проблемы/ошибки, постараюсь помочь.

### Вносим исправления

Такая плоблема возникла из-за того, что у нас и в центрировании, и в анимации использовалось свойство `transform`, из-за чего оно перезаписывалось во время анимации, и центрирование пропадало.

Рассмотрим с вами один из водможных способов пофиксить это дело.

#### Текущая ситуация

Итак, на данный момент ваши файлы должны выглядеть так:

`html/index.html`:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/main.css">
    <title>Document</title>
</head>
<body>
    <div class="stars">
        <img src="../img/sun.png" alt="sun" class="sun">

        <div class="orbit earth-orbit">
            <img src="../img/earth.png" alt="earth" class="earth">
        </div>
    </div>
</body>
</html>
```

`css/main.css`:
```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --base-year: 20s;
    --base-radius: 150px;
}

body {
    width: 100%;
    height: 100vh;
}

.stars {
    position: relative;
    height: 100%;
    background-size: cover;
    background-color: #000;
    background-image: url(../img/stars.png);
}

@keyframes move-stars {
    from {
        background-position: 0 0;
    }

    to {
        background-position: 5000px 5000px;
    }
}

.stars::after {
    animation-name: move-stars;
    animation-duration: 120s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    width: 100%;
    height: 100%;
    content: "";
    display: block;
    background-image: url(../img/twinkling.png);
}

.sun {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform:
        translateY(-50%)
        translateX(-50%);
}

@keyframes rotate-planet {
    from {
        transform: rotate(0);
    }

    to {
        transform: rotate(360deg);
    }
}

.orbit {
    animation-name: rotate-planet;
    animation-duration: var(--base-year);
    animation-timing-function: linear;
    animation-iteration-count: infinite;

    position: absolute;
    top: 50%;
    left: 50%;
    transform:
        translateY(-50%)
        translateX(-50%);

    width: calc(2 * var(--base-radius));
    height: calc(2 * var(--base-radius));

    display: flex;
    justify-content: start;
    align-items: center;
}
```

#### Элемент - обёртка для орбиты

Сразу после солнца добавим тэг `div` с классом `orbit-wrapper`. Внутрь него уже поместим нашу орбиту с Землей.

```html
<div class="orbit-wrapper">
    <div class="orbit earth-orbit">
        <img src="../img/earth.png" alt="earth" class="earth">
    </div>
</div>
```

В дальнейшем будем новые орбиты тоже помещать в такие же элементы.

В файле стилей для селектора по классу этого элемента (`.orbit-wrapper`) добавьте свойства для его центрирования.

```css
.orbit-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform:
        translateY(-50%)
        translateX(-50%);
}
```

Теперь эти свойства можно убрать из блока стилизации по селектору `.orbit`.

```css
.orbit {
    animation-name: rotate-planet;
    animation-duration: var(--base-year);
    animation-timing-function: linear;
    animation-iteration-count: infinite;

    width: calc(2 * var(--base-radius));
    height: calc(2 * var(--base-radius));

    display: flex;
    justify-content: start;
    align-items: center;
}
```

Таким образом, элемент-обертка орбиты будет отвечать за центрирование орбиты, а уже все остальное будет делать сама орбита.

#### Смещение планеты

На данный момент расстояние от центра вращающейся планеты до центра Солнца меньше, чем желаемый радиус орбиты на величину, равную радиусу этой планеты. Чтоб это исправить, можно дополнительно сместить планетув сторону от Солнца на половину ее радиуса.

Для этого в файле стилей создаем новый блок стилизации по селектору `.planet` и указываем соответствующее свойство трансформации.

```css
.planet {
    transform: translateX(-50%);
}
```

#### Результат

Теперь Земля обращается вокруг Солнца - как и было задумано.

Проверьте, чтобы ваш код соответствовал моему:

`html/index.html`:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/main.css">
    <title>Document</title>
</head>
<body>
    <div class="stars">
        <img src="../img/sun.png" alt="sun" class="sun">

        <div class="orbit-wrapper">
            <div class="orbit earth-orbit">
                <img src="../img/earth.png" alt="earth" class="planet earth">
            </div>
        </div>
    </div>
</body>
</html>
```

`css/main.css`:
```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --base-year: 5s;
    --base-radius: 150px;
}

body {
    width: 100%;
    height: 100vh;
}

.stars {
    position: relative;
    height: 100%;
    background-size: cover;
    background-color: #000;
    background-image: url(../img/stars.png);
}

@keyframes move-stars {
    from {
        background-position: 0 0;
    }

    to {
        background-position: 5000px 5000px;
    }
}

.stars::after {
    animation-name: move-stars;
    animation-duration: 120s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    width: 100%;
    height: 100%;
    content: "";
    display: block;
    background-image: url(../img/twinkling.png);
}

.sun {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform:
        translateY(-50%)
        translateX(-50%);
}

.orbit-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform:
        translateY(-50%)
        translateX(-50%);
}

@keyframes rotate-planet {
    from {
        transform: rotate(0);
    }

    to {
        transform: rotate(360deg);
    }
}

.orbit {
    animation-name: rotate-planet;
    animation-duration: var(--base-year);
    animation-timing-function: linear;
    animation-iteration-count: infinite;

    width: calc(2 * var(--base-radius));
    height: calc(2 * var(--base-radius));

    display: flex;
    justify-content: start;
    align-items: center;
}

.planet {
    transform: translateX(-50%);
}
```

### Пример: как добавить новую планету

Мы писали код таким образом, чтобы в дальнейшем было очень просто добавить новую планету.

Давайте попробуем добавить Марс. Для этого сначала нужно продублировать разметку обертки орбиты Земли, орбиты Земли и Земли, после чего поменять все упоминания `earth` на те, которые относятся к Марсу.

```html
<div class="orbit-wrapper">
    <div class="orbit mars-orbit">
        <img src="../img/mars.png" alt="mars" class="planet mars">
    </div>
</div>
```

#### Радиус

Если вы теперь попробуете посмотреть результат, то увидите только Марс без Земли. Это происходит потому, что у нас пока что радиус орбит и период обращения вокруг Солнца совпадают для обеих планет.

Перед тем, как менять радиус орбиты Марса, изменим немного расчет размеров орбиты в блоке стилей по селектору `.orbit`. Пусть теперь размеры расчитываются на основе значения переменной `--radius`, а не `--base-radius`. Чтобы при этом ничего не поломалось, в блоке стилей по селектору `:root` определите еще одну переменную: `--radius`, при этом ее значение по умолчанию должно равняться значению перменной `--base-radius`.

```css
:root {
    --base-year: 5s;
    --base-radius: 150px;
    --radius: var(--base-radius);
}
/* ... */
.orbit {
    animation-name: rotate-planet;
    animation-duration: var(--base-year);
    animation-timing-function: linear;
    animation-iteration-count: infinite;

    width: calc(2 * var(--radius));
    height: calc(2 * var(--radius));

    display: flex;
    justify-content: start;
    align-items: center;
}
```

Чтобы изменить радиус орбиты Марса достаточно переопределить для нее значение переменной `--radius`, например, при помощи функции `calc()` и значения переменной `--base-radius`.

```css
.mars-orbit {
    --radius: calc(70px + var(--base-radius));
}
```

#### Период обращения

Если вы теперь попробуете посмотреть результат, то увидите что Марс обращается вокруг Солнца за то же время, что и Земля, а это не соответствует действительности.

Перед тем, как менять период обращения Марса, изменим немного расчет длительности анимации орбиты в блоке стилей по селектору `.orbit`. Пусть теперь длительность расчитывается на основе значения переменной `--year`, а не `--base-year`. Чтобы при этом ничего не поломалось, в блоке стилей по селектору `:root` определите еще одну переменную: `--year`, при этом ее значение по умолчанию должно равняться значению перменной `--base-year`.

```css
:root {
    --base-year: 5s;
    --base-radius: 150px;

    --year: var(--base-year);
    --radius: var(--base-radius);
}
/* ... */
.orbit {
    animation-name: rotate-planet;
    animation-duration: var(--year);
    animation-timing-function: linear;
    animation-iteration-count: infinite;

    width: calc(2 * var(--radius));
    height: calc(2 * var(--radius));

    display: flex;
    justify-content: start;
    align-items: center;
}
```

Чтобы изменить длительность анимации орбиты Марса достаточно переопределить для нее значение переменной `--year`, например, при помощи функции `calc()` и значения переменной `--base-year`.

```css
.mars-orbit {
    --radius: calc(70px + var(--base-radius));
    --year: calc(1.88 * var(--base-year));
}
```

Откуда я взял множитель `1.88`? Все просто - именно во столько раз дольше Марс делает полный оборот вокруг Солнца по сравнению с Землей.

#### Результат

Таким образом мы добавили еще одну планету - Марс.

`html/index.html`:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/main.css">
    <title>Document</title>
</head>
<body>
    <div class="stars">
        <img src="../img/sun.png" alt="sun" class="sun">

        <div class="orbit-wrapper">
            <div class="orbit earth-orbit">
                <img src="../img/earth.png" alt="earth" class="planet earth">
            </div>
        </div>

        <div class="orbit-wrapper">
            <div class="orbit mars-orbit">
                <img src="../img/mars.png" alt="mars" class="planet mars">
            </div>
        </div>
    </div>
</body>
</html>
```

`css/main.css`:
```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --base-year: 5s;
    --base-radius: 150px;

    --year: var(--base-year);
    --radius: var(--base-radius);
}

body {
    width: 100%;
    height: 100vh;
}

.stars {
    position: relative;
    height: 100%;
    background-size: cover;
    background-color: #000;
    background-image: url(../img/stars.png);
}

@keyframes move-stars {
    from {
        background-position: 0 0;
    }

    to {
        background-position: 5000px 5000px;
    }
}

.stars::after {
    animation-name: move-stars;
    animation-duration: 120s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    width: 100%;
    height: 100%;
    content: "";
    display: block;
    background-image: url(../img/twinkling.png);
}

.sun {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform:
        translateY(-50%)
        translateX(-50%);
}

.orbit-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform:
        translateY(-50%)
        translateX(-50%);
}

@keyframes rotate-planet {
    from {
        transform: rotate(0);
    }

    to {
        transform: rotate(360deg);
    }
}

.orbit {
    animation-name: rotate-planet;
    animation-duration: var(--year);
    animation-timing-function: linear;
    animation-iteration-count: infinite;

    width: calc(2 * var(--radius));
    height: calc(2 * var(--radius));

    display: flex;
    justify-content: start;
    align-items: center;
}

.planet {
    transform: translateX(-50%);
}

.mars-orbit {
    --radius: calc(70px + var(--base-radius));
    --year: calc(1.88 * var(--base-year));
}
```

### Добавляем оставшиеся планеты

### Pass task
Когда выполнили все задания, добавляете измененные файлы проекта в индекс гита, создаете коммит, отправляете на GitHub:
```bash
# Добавляем измененные файлы в индекс гита (. - добавить все)
git add .

# Создаем коммит на основании изщменений, добавленных в индекс гита, задаем сообщение коммита
git commit -m "Finally done my homework to 2025-01-19"

# Загружаем изменения в удаленный репозиторий на гитхабе
git push
```
После этого скидываете мне в личку ссылку на ваш гитхаб-репозиторий. Если скинете до пятницы 6 часов вечера, то в течение суток гарантированно получите обратную связь с разбором ошибок и предложениями по улучшению.

### Recomendations
- группируйте CSS-селекторы разных объектов вместе, если задаете им одинаковые правила,
- делайте и сдавайте дз как можно раньше, чтобы я успел проверить и дать фидбэк.

#### Всем удачи!