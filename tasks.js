// 1 - Виведіть числа від 1 до 50. Виведіть числа від 11 до 33.
// 2 - Дано масив [1, 2, 3, 4, 5]. За допомогою циклів вивести всі елементи масиву.
// 3 - За допомогою циклу виведіть суму чисел від 15 до 100.
// 4 - Дано масив [1, 2, 3, 4, 5]. За допомогою циклу for знайдіть суму елементів масиву. Запишіть її в змінну result.
// 5 - Дано об'єкт obj = {green: 'зелений', red: 'червоний', blue: 'голубий'}. За допомогою циклу for-in виведіть всі ключі і значення цього об'єкта.
// 6 - Дано об'єкт obj з ключами Орест, Микола, Максим з елементами '200', '300', '400'.
//     За допомогою циклу for-in виведіть рядки такого формату: 'Орест - зарплата 200$.'.
// 7 - Дано масив 2, 5, 9, 15, 0, 4. За допомогою циклу for і оператора if виведіть ті елементи масиву, які більше 3-х, але менші 10.
// 8 - Дано масив з числами. Числа можуть буди додатніми або від'ємними. Знайдіть суму додатніх елементів масиву.
// 9 - Дано масив з числами 1, 2, 5, 9, 4, 13, 4, 10. За допомогою циклу for і оператора if перевірити чи є в масиві цифра 4.
//     Якщо є - виведіть 'Знайдено!' і вийдіть з циклу. Якщо немає - нічого робити не потрібно.
// 10 - Дано масив чисел: [10, 20, 30, 50, 235, 3000]. Виведіть на екран ті числа, які починаються на цифру 1, 2 або 5.
// 11 - Дано масив чисел 1, 2, 3, 4, 5, 6, 7, 8, 9. За допомогою циклу for створіть рядок '-1-2-3-4-5-6-7-8-9-'.
// 12 - Створіть масив днів тижня. За допомогою циклу for виведіть всі дні тижня, а вихідні виведіть жирним.
// 13 - Створіть масив днів тижня. За допомогою циклу for виведіть всі дні тижня, а поточний день виведіть курсивом.
//      Поточний день має зберігатись в змінній day.
// 14 - Дано число n=1000. Діліть його на 2 стільки разів, доки результат ділення не буде меншимм за 50.
//      Яке число вийшло? Порахуйте кількість ітерацій, та запишіть це число в змінну num.
// 15 - Напишіть цикл, який пропонує за допомогою prompt ввести число, більше 100.
//      Якщо користувач ввів інше число – потрібно попросити його знову ввести число, і так далі,
//      також можна відмовитись від введення за допомогою клавіші ESC.
// 16 - Вивести числа від 5 до 1.
// 17 - Вивести таблицю множення на 3.
// 18 - Необхідно, щоб програма виводила таку послідовність: 7 14 21 28 35 42 49 56 63 70 77 84 91 98
// 19 - Необхідно, щоб програма виводила таку послідовність: 1 2 4 8 16 32 64 128 256 512
// 20 - Написати скрипт, який виведе квадрат N*N із зірочок.
// 21 - У нас є загадка: "Що це: синій, великий, з вусами і повністю набитий зайцями?" (Відповідь: Троллейбус).
//      Створіть програму, яка буде запитувати у користувача відгадку://
//      у користувача є 3 спроби. Після трьох відповідей програма повинна завершитися;
//      якщо користувач вводить "Троллейбус", ми виводимо в консоль "Правильно!" і виходимо із циклу;
//      якщо користувач вводить "Здаюсь", ми виводимо в консоль "Правильна відповідь: Тролейбус." і виходимо із циклу;
//      якщо користувач вводить будь-яку іншу відповідь, ми виводимо в консоль "Подумай ще." і продовжуємо цикл.
// 22 - В оркостані населення - 144 мільйони.
//      Народжуваність складає 8.8 людей на 1000 осіб населення,
//      гине в Україні або втрачає здатнійсть розмножуватися через прогулянки в рудому лісі - 15 людей на 1000 осіб населення.
//      Розрахуйте, яка чисельність населення буде через 100 років,
//      приймаючи до уваги що із кожним роком народжуваність падає вдвічі а смертність росте вдвічі.
//      Чи стане нам краще жити?
//     int population = 144 000 000;
//     int born = 8.8;
//     int death = 15;
//     int dif = born - death;
//     for(int i = 1; i <= 100; i++){
//         population += population * dif / 1000;
//     }
//     // if, else - чи краще буде жити
// 23 - За кожен місяць банк нараховує до суми вкладу 7% від суми.
//      Напишіть скрипт, де користувач введе суму вкладу та кількість місяців.
//      Банк вираховує кінцеву суму з урахуванням нарахованих відсотків за кожен місяць.
// 24 - Створіть скрипт, що виводить перші 55 елементів послідовності 1 3 5 7 9 11 13 15 17...
// 25 - В місті A проїзд в трамвай здійснюється по відривним квиткам.
//      Кожного тижня трамвайне депо замовляє в місцевій типографії рулон квитків з номерами від 000001 до 999999.
//      "Щасливим" вважається квиток, у якому сума перших трьох цифр номера рівна сумі останніх трьох цифр,
//      як, наприклад, у квитках з номерами 003102 або 567576.
//      Трамвайне депо вирішило подарувати сувенір кожному власнику щасливого квитка і тепер роздумує, як багато сувенірів потрібно.
//      За допомогою скрипта підрахуйте скільки щсливих квитків в одному рулоні?
// 26 - Електронний годинник показує час у форматі з 00:00 до 23:59.
//      Підрахуйте, скільки разів за добу випадає комбінація так,
//      щоб справа від двокрапки відображається симетрично комбінації до того, що справа від двокрапки (наприклад, 02:20, 11:11 або 15:51).
// 27 - Роздрукуйте символ * так, щоб в першому рядку був всього один символ, у другому - два, в третьому - три, і так далі до 5.
// 28 - вивести двовимірний масив:
//      arr = [[1, 2],
//            [3, 4],
//            [5, 6]];
// 29 - Напишіть код JS для друку парних чисел у заданому масиві: arr = [13,23,12,45,22,48,66,100]
// 30 - Видалити всі входження числа N в масиві: [23,56,4,78,5,63,45,210,56];
//      arr.splice(i,1); //Delete element from array
// 31 - Напишіть код JS, щоб знайти найбільше/найменше число в масиві.
// 32 - Зупиніть цикл, коли i = 7 і виведіть у консоль усі числа до 7, пропустивши 3.
// 33 - Дано два числа A та B де (A < B).
//      Виведіть на екран суму всіх чисел, розташованих у числовому проміжку від А до В.
//      Виведіть на екран усі непарні значення, розташовані у числовому проміжку від А до В.
// 34 - За допомогою циклу for виведіть парні числа від 2 до 10.
// 35 - Перепишіть код, замінивши цикл для while, без зміни поведінки циклу.
//      for (let i = 0; i < 3; i++) {
//          console.log(i);
//      }
// 36 - Заповнити масив із 10 елементів числами із ряду фібоначчі використовуючи цикл
// 37 - Заповнити матрицю NxN випадковими числами
// 38 - Задана матриця, знайти середнє арифметичне бідь-якої діагоналі матриці
// 39 - Задано одновимірний масив А цілих чисел. Збільшити на 2 кожний невід’ємний елемент масиву.
// 40 - Мама попросила Васю полити всі молоді деревця в саду. Вася знає, що коли дерева маленькі, їх потрібно дуже добре поливати. А
//      ось скільки поливати – невідомо. Але Вася – дуже
//      розумний хлопчик. Він уважно прочитав весь підручник
//      ботаніки для середньої школи і вияснив, що полив прямо
//      пропорційний кількості листочків на дереві. Для гарного
//      росту дерев достатньо виливати під дерево щоденно по
//      одному літру води для кожного листка.
//      На щастя Васі виявилось, що листки на деревах
//      ростуть ярусами, причому на верхньому ярусі два листка, на другому – чотири,
//      на наступному - шість, і так далі, на кожному наступному ярусі на два листки
//      більше в порівнянні з попереднім. А на самій верхівці росте ще один листочок.
//      Хитрий Вася послав молодшу сестричку Марійку підрахувати кількість ярусів
//      на кожному дереві, а Вас просить написати програму, яка для кожного дерева
//      вирахує кількість літрів води для його поливу.
//
// 41 - Тато Карло подарував Буратіно 1 долар на його перший день народження,
//      а заощадливий Буратіно поклав подарунок у банку. Кожного наступного року
//      тато Карло подвоював свій попередній подарунок і додавав до нього стільки
//      доларів, скільки років виповнилось Буратіно. А той, водночас, продовжував
//      складати бакси в банку. На який N-й день народження в банці буде не менш,
//      ніж S доларів?
// 42 - У далекому царстві жив Змій Горинич. У
//      нього було N голів та M хвостів. Іван-Царевич
//      вирішив знищити ворога людських душ. Для
//      цього йому його кума Баба Яга подарувала
//      чарівний меч, оскільки тільки ним можна вбити
//      Змія Горинича. Якщо відрубати одну голову, то
//      на її місці виростає нова, якщо відрубати хвіст, то замість нього виросте 2 хвости. Якщо відрубати два хвости, то виросте 1
//      голова, і тільки коли зрубати 2 голови, то не виростає нічого. Змій Горинич
//      гине тільки в тому випадку, коли йому відрубати всі голови і всі хвости.
//      Визначити мінімальну кількість ударів мечем, потрібну для знищення Змія
//      Горинича
// 43 - Візьмемо деяке натуральне число N. Будемо змінювати його наступним
//      чином: якщо число парне, то розділимо його на 2, якщо непарне, додамо 1.
//      Після декількох таких змін ми завжди отримаємо число 1. Наприклад, із числа 11 отримується число 12, потім 6, 3, 4, 2 і, нарешті, 1.
//      Таким чином, для отримання 1 з 11 потрібно виконати 6 перетворень.
//      Напишіть програму, яка зчитує натуральне число і виводить кількість
//      перетворень даного числа до отримання 1.
// 44 - У технічному університеті студенти отримують оцінки за стобальною
//      шкалою, тобто від нуля до ста. Викладач Павло Іванович пообіцяв студентам,
//      що ті, у кого семестровий рейтинг буде вище середнього у групі, отримають
//      "автомат". А староста групи Петька Петров ще й пообіцяв кожному
//      "автоматнику" по шоколадці (у Петьки тато займається постачанням шоколаду
//      у магазини, і Петька з ним домовився про спонсорську допомогу).
//      І тепер у Петі проблема – йому потрібно вияснити, скільки шоколадок він
//      повинен принести в університет. Допоможіть йому в добрій справі. Уявляєте,
//      як добре буде, якщо кожен підприємець буде допомагати успішним студентам!
//      Напишіть програму, яка буде обчислювати кількість "автоматів" у групі
//      студентів. Дуже може бути, що Ваша програма знадобиться не лише для Петі і
//      його батька, а й для підприємців усієї країни, точніше, для всіх розумних
//      людей, які підтримують успішних студентів!
// 45 - Учням першого класу призначають додаткову склянку молока та пиріжок,
//      якщо першокласник важить менше 30 кг. У перших класах школи навчається n
//      учнів. Склянка молока має об’єм 200 мл, а замовлені упаковки молока – 0,9 л.
//      Визначити кількість додаткових пакетів молока та пиріжків, необхідних щодня.
// 46 - Потрібно з клавіатури ввести ціле число від 10 до 99. Якщо
//      користувач набрав число за межами цього діапазону, то слід повторити спробу. Отже, спочатку треба вводити число, а потім
//      перевіряти умову того, що число є двозначним.
// 47 - Задано текст, слова в якому розділені пробілами і розділовими знаками.
//      Розробити програму, яка знаходить і друкує всі слова, перша і остання літери яких збігаються.
//      split("[ ,.:;-?!]+");
//
// 48 - згенерувати html код шахматної дошки та вивести на сторінку
// 49 - відсортувати масив за зростанням чи спаданням використовуючи лише цикли.
// 50 - Згенерувати дві матриці випадкових чисел розмірністю N x N.
//      Створити третю матрицю, в якій значення з одинаковими індексами матриць будуть просумовані.