# К 2025-03-30

## Теория

Рекомендую канал [Александр Ламков — Friendly Frontend | YouTube](https://www.youtube.com/@AleksanderLamkov/). Автор снимает крутейшие видосы по фронденд-разработке, объясняя понятным языком различные аспекты.

### Формы (продолжение)

Видео по теме:
- [13. Формы в HTML. Теги textarea, select, option, optgroup](https://youtu.be/FMjuLXNTPfU?si=r8DZRfnsjDFkj3W9)
- [14. Формы в HTML. Атрибуты required, disabled, readonly, placeholder, inputmode, type и autocomplete](https://youtu.be/Lq4tky_6fN0?si=vbPgIyax7jJIGkXJ)

Подробно расписывать инфу не вижу смысла, так что смотрим видосы и конечно же читаем статьи.

Тэги:
- [`textarea`](https://doka.guide/html/textarea/) - парный тэг, многострочное поле ввода;
- [`select`](https://doka.guide/html/select/) - парный тэг, выпадающий список, доступен атрибут `multiple`;
- [`option`](https://doka.guide/html/option/) - парный тэг, элемент выпадающего списка, доступен атрибут `selected`;
- [`optgroup`](https://doka.guide/html/optgroup/) - парный тэг, группировка элементов выпадающего списка.

Атрибуты:
- [`multiple`](https://doka.guide/html/multiple/) - можно выбрать несколько имейлов или файлов в `input`, либо несколько вариантов в выпадающем списке `select`;
- [`selected`](https://htmlbook.ru/html/option/selected) - выбор радиокнопки, чекбокса или элемента в выпадающем списке по умолчанию;
- [`required`](https://doka.guide/html/required/) - поле формы становится обязательным к заполнению;
- [`disabled`](https://doka.guide/html/disabled/) - отключение интерактивных элементов форм, применяется к тэгам:
    + `button`;
    + `fieldset`;
    + `optgroup`;
    + `option`;
    + `select`;
    + `textarea`;
    + `input`;
- [`readonly`](https://doka.guide/html/readonly/) - поля формы доступны только для чтения, применяется к тэгам:
    + `textarea`;
    + `input`;
- [`placeholder`](https://doka.guide/html/placeholder/) - подсказка пользователю, что именно нужно ввести в поле ввода, применяется к тэгам:
    + `textarea`;
    + `input`;
- [`inputmode`](https://doka.guide/html/inputmode/) - говорит браузеру на устройствах с экранной клавиатурой какой набор символов показать при вводе данных, применяется к тэгам:
    + `textarea`;
    + `input`;
- [`autocomplete`](https://doka.guide/html/autocomplete/) - разрешает или запрещает браузеру автоматически заполнять поле формы;
- [`autofocus`](https://htmlbook.ru/html/input/autofocus) - автоматически устанавливает фокус в поле формы;
- [`form`](https://webref.ru/html/input/form) - связывает поле ввода с конкретной формой по значению ее идентификатора;
- [`minlength` и `maxlength`](https://doka.guide/html/minlength-maxlength/) - устанавливают минимальное и максимальное количество символов, которые можно ввести в поля `input` или `textarea`;
- [`size`](https://doka.guide/html/size/) - ширина поля `input` в символах или количество видимых опций выпадающего списка `select`;
- [`pattern`](https://doka.guide/html/pattern/) - регулярное выражение, которому должно соответствовать введённое в `input` значение;
- [`oninvalid`](https://basicweb.ru/html/event_oninvalid.php) - вызов JS-скрипта, если отправляемый элемент формы не прошел валидацию (`required` или `pattern`);
- [`spellcheck`](https://webref.ru/html/attr/spellcheck) - включает или выключает проверку правописания в поле;
- [`novalidate`](https://doka.guide/html/novalidate/) - отключает нативную валидацию формы со стороны браузера;
- [`rows`](https://doka-guide.vercel.app/html/textarea/#rows) - начальная высота поля ввода в строках;
- [`cols`](https://doka-guide.vercel.app/html/textarea/#cols) - начальная ширина поля ввода в символах;
- [`wrap`](https://doka-guide.vercel.app/html/textarea/#wrap) - определяет, будут ли добавлены символы переноса строк текста (согласно значению `cols`) при отправке формы.

Тип данных, вводимых в поле формы браузер определяет по определенным значениям атрибута `name` (или `id`). Подробнее читайте [здесь](https://doka.guide/html/autocomplete/).

## Занятие

Сегодня на занятии мы продолжили знакомство с формами и сделали еше одну секцию сайта rolex-shop.

Если кто-то не успел что-то доделать, можете воспользоваться [моим вариантом](./rolex-shop/).

## Домашка

### Download changes

Перед непосредственным выполнением домашней работы необходимо синхронизировать локальный и удаленный репозитории. Для этого скачиваем все изменения из удаленного репозитория с помощью команды:

```bash
git pull
```

Если на этом или последующих этапе возникает вопрос, ошибка или нестандартное поведение программы, пишите мне в личку, прикладывая скрин проблемы/ошибки, постараюсь помочь.

### Повторная

Нового задания на этот раз нет, так как никто не выполнил полностью предыдущее дз.

Так что необходимо выполнить [задание по созданию страниц авторизации и регистрации](./home-work_to_2025-03-23.md#авторизациярегистрация) на предыдущее занятие.

### Pass task
Когда выполнили все задания, добавляете измененные файлы проекта в индекс гита, создаете коммит, отправляете на GitHub:
```bash
# Добавляем измененные файлы в индекс гита (. - добавить все)
git add .

# Создаем коммит на основании изменений, добавленных в индекс гита, задаем сообщение коммита
git commit -m "Finally done my homework to 2025-03-30"

# Загружаем изменения в удаленный репозиторий на гитхабе
git push
```
После этого скидываете мне в личку ссылку на ваш гитхаб-репозиторий. Если скинете до пятницы 6 часов вечера, то в течение суток гарантированно получите обратную связь с разбором ошибок и предложениями по улучшению.

**Делайте и сдавайте дз как можно раньше, чтобы я успел проверить и дать фидбэк.**

**Всем удачи!**