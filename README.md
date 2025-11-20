# Система бронювання готелю - React.js

Навчальний проєкт для демонстрації роботи з React.js, React Router, Zustand та in-memory store.

## Технології

- React 18
- TypeScript
- React Router v6
- Zustand (state management)
- Bootstrap 5

## Встановлення

```bash
npm install
```

## Запуск

```bash
npm run dev
```

Додаток буде доступний за адресою: http://localhost:3000

## Структура проєкту

```
/src
  /components      - React компоненти
    AdminPanel.tsx
    BookingForm.tsx
    InvoiceView.tsx
    Navigation.tsx
  /pages          - сторінки додатку
    AdminPage.tsx
    BookingPage.tsx
    HomePage.tsx
    InvoicePage.tsx
  /store          - Zustand store (in-memory)
    hotelStore.ts
  /types          - TypeScript типи
    index.ts
  /styles         - CSS стилі
    App.css
  App.tsx         - головний компонент
  index.tsx       - точка входу
```

## Функціонал

1. **Головна сторінка** (`/`) - інформація про систему
2. **Бронювання** (`/booking`) - створення заявки
3. **Адмін-панель** (`/admin`) - перегляд заявок, вибір номерів, створення рахунків
4. **Рахунок** (`/invoice/:id`) - перегляд деталей рахунку

## Особливості

- ✅ Всі дані зберігаються в оперативній пам'яті (in-memory)
- ✅ Автоматичний підбір найкращого номера
- ✅ Розрахунок вартості проживання
- ✅ Адаптивний дизайн з Bootstrap 5
- ✅ TypeScript для type safety
- ✅ Zustand для state management

## Бізнес-логіка

### Процес бронювання:

1. Клієнт заповнює форму на сторінці `/booking`
2. Заявка зберігається в in-memory store
3. Адміністратор переглядає заявки на `/admin`
4. Система автоматично знаходить найкращий номер
5. Адміністратор підтверджує вибір
6. Створюється рахунок з розрахованою вартістю
7. Рахунок доступний на `/invoice/:id`

### Алгоритм підбору номера:

- Фільтрація за класом номера
- Фільтрація за кількістю гостей (capacity >= guests)
- Вибір найдешевшого варіанту

## Автор

Лабораторна робота - React.js з in-memory store
Система бронювання готелю
