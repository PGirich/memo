# Пример разметки MarkDown

## Форматирование текста

выделение **жирным**
выделение _курсивом_
выделение **_жирным и курсивом_**

## разметка html

новый абзац <br> перенос строки

## линии

<hr>

## цитаты

будет цитата

> это цитата - весь абзац <br>
> все еще цитата

конец цитаты

## списки

### нумерация

1. первый
1. ленивая нумерация
1. очень ленивая

### ненумеровнные списки

- первый

* второй как новый список
* третий часть списка

- идет как новый список

[v] true - не все редакторы понимают чекбоксы <br>
[ ] false

## ссылки

<http://ya.ru>

### ссылки сносками

[сноска]: http://ya.ru 'Это ссылка на Яндекс'

[сноска] работает и подсказка есть

## картинки

![Изображение](https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/1920px-Markdown-mark.svg.png 'Логотип Markdown')

## вставка кода

условный оператор `if(bool){break};`  
много строк:

```javascript
const numbers = [1, 2, 3, 4]
numbers.forEach((num) => {
  const square = num * num
  console.log('Квадрат числа равен: ' + square)
})
```

## таблицы

|  №  | Наименование | Кол-во |
| :-: | :----------- | -----: |
|  1  | Перец        |     20 |
|  2  | Картофан     |   2345 |

## экранирование

слэш \\  
скобка \}
