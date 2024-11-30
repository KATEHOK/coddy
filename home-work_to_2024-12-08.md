# Домашка к 2024-12-08

Сегодня на занятии мы продолжили рассмотрение CSS-стилизации.

## Теория

### [`cursor`](https://developer.mozilla.org/ru/docs/Web/CSS/cursor)

CSS-свойство `cursor` устанавливает курсор мыши, если таковой имеется, для отображения, когда указатель мыши находится над элементом.

Внешний вид курсора помогает информировать пользователей об операциях, которые можно выполнять при взаимодействии с элементом, включая: выделение текста, активацию справки или контекстного меню, копирование содержимого, изменение размера таблиц и так далее. Вы можете указать тип курсора с помощью ключевого слова или загрузить свой значок (с дополнительными резервными изображениями и ключевым словом в качестве резервного варианта отображения).

[Значения](https://developer.mozilla.org/ru/docs/Web/CSS/cursor#%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D1%8F):
- [`<url>`](https://developer.mozilla.org/ru/docs/Web/CSS/cursor#url) (необязательный). `url()` или разделенный запятыми список `url(), url(), …,` указывающий на файл изображения. В качестве запасного варианта можно указать несколько `url()` на случай, если некоторые типы изображений курсора не поддерживаются. Резервный вариант, отличный от URL-адреса (одно или несколько ключевых слов), должен находиться в конце резервного списка.
- [`<x>`, `<y>`](https://developer.mozilla.org/ru/docs/Web/CSS/cursor#x) (необязательный). Необязательные координаты `X` и `Y`, задающие указательную точку курсора. Эти значения необходимо указывать в координатах изображения. Они располагаются относительно верхнего левого угла изображения (соответствует `0 0`) и ограничены размерами изображения курсора. Если эти значения не указаны, они могут быть прочитаны из самого файла, в противном случае по умолчанию они будут находиться в верхнем левом углу изображения.

- [`keyword`](https://developer.mozilla.org/ru/docs/Web/CSS/cursor#keyword) Ключевое слово должно быть установлено для указания типа используемого курсора или резервного курсора, который будет использоваться, если не удастся загрузить указанные значки. Доступные ключевые слова перечислены в таблице (по ссылке выше). Значения кроме `none` (что означает отсутствие курсора), являются изображением, которое будет использовано для отображения курсора. Вы можете навести указатель мыши на строки таблицы, чтобы увидеть эффект применения различных значений ключевых слов.

### [Градиент](https://developer.mozilla.org/ru/docs/Web/CSS/CSS_images/Using_CSS_gradients)

CSS-градиенты представлены типом данных `<gradient>`, специальным типом `<image>`, состоящим из последовательного перехода между двумя и более цветами.

Вы можете выбрать один из трёх типов градиентов: линейный (создаётся с помощью функции [`linear-gradient()`](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient)), круговой (создаётся с помощью [`radial-gradient()`](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/radial-gradient)) и конический (создаётся с помощью функции [`conic-gradient()`](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/conic-gradient)). Вы можете также создавать повторяющиеся градиенты с помощью функций [`repeating-linear-gradient()`](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/repeating-linear-gradient), [`repeating-radial-gradient()`](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/repeating-radial-gradient) и [`repeating-conic-gradient()`](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/repeating-conic-gradient).

Градиенты могут быть использованы везде, где может быть использован тип `<image>`, например в качестве фона. Так как градиенты генерируются динамически, они могут избавить от необходимости использовать файлы растровых изображений, которые ранее использовались для достижения похожих эффектов. В дополнение к этому, так как градиенты генерируются браузером, они выглядят лучше, чем растровые изображения в случае увеличения масштаба, и их размер может быть изменён на лету.

#### [`linear-gradient()`](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient)

Функция CSS `linear-gradient()` создает изображение, состоящее из прогрессивного перехода между двумя или более цветами вдоль прямой линии. Ее результатом является объект типа данных `<gradient>`, который является особым видом `<image>`.

Подробно про каждый параметр можете прочитать [здесь](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient#values).

#### [`radial-gradient()`](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/radial-gradient)

Функция CSS `radial-gradient()` создает изображение, состоящее из прогрессивного перехода между двумя или более цветами, которые исходят из начала координат. Его форма может быть кругом или эллипсом. Результатом функции является объект типа данных `<gradient>`, который является особым видом `<image>`.

Подробно про каждый параметр можете прочитать [здесь](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/radial-gradient#values).

#### [`conic-gradient()`](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/conic-gradient)

Функция CSS `conic-gradient()` создает изображение, состоящее из градиента с цветовыми переходами, вращающимися вокруг центральной точки (а не исходящими из центра). Примеры конических градиентов включают круговые диаграммы и цветовые круги. Результатом функции `conic-gradient()` является объект типа данных `<gradient>`, который является особым видом `<image>`.

Подробно про каждый параметр можете прочитать [здесь](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/conic-gradient#values).

### [Псевдоэлементы](https://developer.mozilla.org/ru/docs/Web/CSS/Pseudo-elements)

Псевдоэлемент в CSS — это ключевое слово, добавляемое к селектору, которое позволяет стилизовать определённую часть выбранного элемента. Например, псевдоэлемент `::first-line` может быть использован для изменения шрифта первой строки абзаца:
```css
/* Первая строка каждого элемента <p>. */
p::first-line {
    color: blue;
    text-transform: uppercase;
}
```

Общий синтаксис следующий:
```css
selector::pseudo-element {
    property: value;
}
```

[Стандартные псевдоэлементы](https://developer.mozilla.org/ru/docs/Web/CSS/Pseudo-elements#%D1%81%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D1%81%D1%82%D0%B0%D0%BD%D0%B4%D0%B0%D1%80%D1%82%D0%BD%D1%8B%D1%85_%D0%BF%D1%81%D0%B5%D0%B2%D0%B4%D0%BE%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%D0%BE%D0%B2):
- [`::after`](https://developer.mozilla.org/ru/docs/Web/CSS/::after)
- [`::before`](https://developer.mozilla.org/ru/docs/Web/CSS/::before)
- [`::cue`](https://developer.mozilla.org/ru/docs/Web/CSS/::cue)
- [`::first-letter`](https://developer.mozilla.org/ru/docs/Web/CSS/::first-letter)
- [`::first-line`](https://developer.mozilla.org/ru/docs/Web/CSS/::first-line)
- [`::selection`](https://developer.mozilla.org/ru/docs/Web/CSS/::selection)
- [`::slotted`](https://developer.mozilla.org/ru/docs/Web/CSS/::slotted)
- [`::backdrop`](https://developer.mozilla.org/ru/docs/Web/CSS/::backdrop)
- [`::placeholder`](https://developer.mozilla.org/ru/docs/Web/CSS/::placeholder)
- [`::marker`](https://developer.mozilla.org/ru/docs/Web/CSS/::marker)
- [`::spelling-error`](https://developer.mozilla.org/en-US/docs/Web/CSS/::spelling-error)
- [`::grammar-error`](https://developer.mozilla.org/ru/docs/Web/CSS/::grammar-error)

#### [`::after`](https://developer.mozilla.org/ru/docs/Web/CSS/::after)

В CSS, `::after` создаёт псевдоэлемент, который является последним потомком выбранного элемента. Часто используется для добавления косметического содержимого в элемент с помощью свойства `content`. По умолчанию является инлайновым.

#### [`::before`](https://developer.mozilla.org/ru/docs/Web/CSS/::before)

В CSS, `::before` создаёт псевдоэлемент,который является первым потомком выбранного элемента. Часто используется для добавления косметического содержимого в элемент с помощью свойства content. По умолчания является инлайновым.

#### [`::first-letter`](https://developer.mozilla.org/ru/docs/Web/CSS/::first-letter)

CSS псевдоэлемент `::first-letter` применяет стили к первой букве первой строки блочного элемента, но только если нету другого предшествующего содержимого (такого как изображения или инлайн таблицы).

#### [`::first-line`](https://developer.mozilla.org/ru/docs/Web/CSS/::first-line)

CSS псевдоэлемент `::first-line` применяет стили к первой строке блочного элемента. Обратите внимание, что длина первой строки зависит от многих факторов, включая ширину элемента, ширину документа и размер шрифта текста.

#### [`::selection`](https://developer.mozilla.org/ru/docs/Web/CSS/::selection)

Псевдоэлемент `::selection` позволяет применить стили к части документа, который был выделен пользователем (например, с помощью мыши).

#### [`::placeholder`](https://developer.mozilla.org/ru/docs/Web/CSS/::placeholder)

CSS псевдоэлемент `::placeholder` представляет собой текст `placeholder` в `<input>` или `<textarea>` элементах.

#### [`::marker`](https://developer.mozilla.org/ru/docs/Web/CSS/::marker)

Псевдоэлемент `::marker` применяет стили к маркеру элемента списка, которые обычно содержит значок или номер. Работает с любым элементом или псевдоэлементом, к которого установлен `display: list-item`, например, у такого как `<li>` или `<summary>`.

### [`transition`](https://developer.mozilla.org/ru/docs/Web/CSS/transition)

Свойство CSS `transition` - это сокращённое свойство для [`transition-property`](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property), [`transition-duration`](https://developer.mozilla.org/ru/docs/Web/CSS/transition-duration), [`transition-timing-function`](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function), и [`transition-delay`](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-delay).

Свойство `transition` позволяет определять переходное состояние между двумя состояниями элемента. Различные состояния могут быть определены с помощью псевдоклассов, таких как `:hover` или `:active` или установлены динамически с помощью JavaScript.

#### [`transition-property`](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property)

Свойство CSS `transition-property` задает свойства CSS, к которым следует применить эффект перехода.

#### [`transition-duration`](https://developer.mozilla.org/ru/docs/Web/CSS/transition-duration)

Свойство `transition-duration` определяет продолжительность выполнения анимации. Значение по умолчанию равняется `0s`, т.е. отсутствие анимации.

#### [`transition-timing-function`](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function)

Свойство CSS `transition-timing-function` устанавливает, как вычисляются промежуточные значения для свойств CSS, на которые влияет эффект перехода.

#### [`transition-delay`](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-delay)

Свойство CSS `transition-delay` определяет длительность ожидания перед запуском эффекта перехода свойства при изменении его значения.

### [`!important`](https://developer.mozilla.org/en-US/docs/Web/CSS/important)

Разделитель `!`, за которым следует ключевое слово `important`, отмечает объявление как "важное". Флаг `!important` изменяет правила выбора объявлений внутри каскада. Объявление, которое не является важным, называется обычным. Чтобы отметить объявление как важное, добавьте флаг (`!important`) после значения в объявлении. Хотя между разделителем и ключевым словом допускается пробел, флаг обычно записывается как `!important` без пробелов.

## Домашка

### Download changes

Перед непосредственным выполнением домашней работы необходимо синхронизировать локальный и удаленный репозитории. Для этого скачиваем все изменения из удаленного репозитория с помощью команды:

```bash
git pull
```

Если на этом или последующих этапе возникает вопрос, ошибка или нестандартное поведение программы, пишите мне в личку, прикладывая скрин проблемы/ошибки, постараюсь помочь.

### Все буит - не кипишуй

### Все буит - не кипишуй

### Все буит - не кипишуй

### Все буит - не кипишуй

### Все буит - не кипишуй

### Все буит - не кипишуй

### Pass task
Когда выполнили все задания, добавляете измененные файлы проекта в индекс гита, создаете коммит, отправляете на GitHub:
```bash
# Добавляем измененные файлы в индекс гита (. - добавить все)
git add .

# Создаем коммит на основании изщменений, добавленных в индекс гита, задаем сообщение коммита
git commit -m "Finally done my homework to 2024-11-30"

# Загружаем изменения в удаленный репозиторий на гитхабе
git push
```
После этого скидываете мне в личку ссылку на ваш гитхаб-репозиторий. Если скинете до пятницы 6 часов вечера, то в течение суток гарантированно получите обратную связь с разбором ошибок и предложениями по улучшению.

### Recomendations
- группируйте CSS-селекторы разных объектов вместе, если задаете им одинаковые правила,
- делайте и сдавайте дз как можно раньше, чтобы я успел проверить и дать фидбэк.

#### Всем удачи!