"use strict";

/*
Задание 2:
Мы создаем приложение. У нас планируется два вида пользователей, обычные и
премиум. Общие свойства этих пользователей необходимо вынести в базовый класс.

1. Создайте базовый класс User с базовой информацией (имя и фамилия, которые
должны создаваться при создании экземпляра класса).
2. Создайте классы PremiumUser и RegularUser, которые наследуются от User. Класс
PremiumUser должен иметь свойство premiumExpiration (дата истечения срока
действия премиум аккаунта, должно задаваться при создании объекта), а у
RegularUser такого свойства нет.
3. Создайте функцию getAccountInfo(user), которая принимает объект класса User
и возвращает информацию о наличии и сроке действия премиум-аккаунта. Необходимо
использовать instanceof для проверки типа переданного пользователя и дать соответствующий ответ из функции (в свободном формате).
*/

class User {
  constructor(name, surname) {
    // Предотвращаем создание экземпляров абстрактного класса User напрямую. Проверяя является ли текущий конструктор классом User
    if (this.constructor === User) {
      throw new Error("Не удается создать экземпляр абстрактного класса User");
    }
    this.name = name;
    this.surname = surname;
  }
}

class PremiumUser extends User {
  constructor(name, surname, premiumExpiration) {
    // super() вызывает конструктор родительского класса и сам он вызывается перед this
    super(name, surname);
    this.premiumExpiration = premiumExpiration;
  }
}

class RegularUser extends User {}

function getAccountInfo(user) {
  // instanceof - проверяет, является ли объект экземпляром указанного класса или его наследника.
  if (user instanceof PremiumUser) {
    console.log(
      `${user.name} ${user.surname} - премиум аккаунт срок действия: ${user.premiumExpiration}`
    );
  } else if (user instanceof RegularUser) {
    console.log(`${user.name} ${user.surname} - обычный аккаунт`);
  } else {
    console.log("Ошибка");
  }
}

const userPremium = new PremiumUser("Dina", "Petrova", "2024");

const userRegular = new RegularUser("Maxim", "Sidorov");

getAccountInfo(userPremium);

getAccountInfo(userRegular);

getAccountInfo({});

// const user = new User("Dina", "Petrova");

// getAccountInfo(user);
