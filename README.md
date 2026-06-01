# NestJS + NextJS Auth App

## Структура

backend/
- src/
  - modules/
    - auth/
      - dto/
      - auth.controller.ts
      - auth.service.ts
      - auth.module.ts
    - users/
      - user.entity.ts
  - app.module.ts
  - main.ts

frontend/
- app/
  - page.tsx

## Запуск PostgreSQL

Создай базу:

auth_db

Логин/пароль:

postgres / postgres

## Запуск backend

cd backend
npm install
npm run start:dev

Backend стартует на:

http://localhost:3001

## Запуск frontend

cd frontend
npm install
npm run dev

Frontend:

http://localhost:3000

## Что реализовано

- Регистрация
- Авторизация
- PostgreSQL
- NestJS
- NextJS
- TypeORM
- bcrypt