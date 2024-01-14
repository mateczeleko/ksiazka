# ksiazka
# Instrukcja Uruchomienia Projektu

## Sprawdzenie Serwera Bazy Danych MySQL

1. **Sprawdzenie Stanu Serwera MySQL**
   Upewnij się, że serwer bazy danych MySQL jest uruchomiony. Można to zrobić za pomocą narzędzi zarządzania serwerem lub sprawdzając usługi systemowe.

## Konfiguracja Pliku .env

2. **Ustawienie Pliku .env**
   Plik `.env` powinien zawierać `connection string` do bazy danych MySQL. Upewnij się, że jest on sformatowany zgodnie z poniższym wzorcem:

DATABASE_URL="mysql://root:q1w2e3r4@localhost:3306/mydb"


Zastąp `root`, `q1w2e3r4`, `localhost` i `mydb` odpowiednimi danymi dostępu do bazy danych.

## Inicjalizacja Prisma ORM

3. **Inicjalizacja Prisma ORM**
Aby zainicjalizować Prisma ORM, wykonaj w terminalu następujące polecenie:

npx prisma generate

## Uruchomienie Skryptu Seed.js

**opcjonalnie**
   Jeśli wprowadzono zmiany w modelach danych Prisma, zastosuj migracje, aby zaktualizować schemat bazy danych. Użyj polecenia:

   npx prisma migrate dev

To polecenie powinno być wykonane przed uruchomieniem skryptu `seed.js`, zwłaszcza gdy uruchamiasz projekt po raz pierwszy lub dokonano zmian w schemacie bazy danych.


4. **Uruchomienie Skryptu Seed.js**
W katalogu `prisma` znajduje się plik `seed.js`. Uruchom go, wykonując polecenie:

npx prisma db seed

## Startowanie Development Server

5. **Uruchomienie Serwera Deweloperskiego**
Aby uruchomić serwer deweloperski, wykonaj polecenie:

npm run dev

Po wykonaniu powyższych kroków, aplikacja powinna być uruchomiona i gotowa do pracy.

Uwaga!
Testowane na MacOS, gdzie wybiera się kategorię przy dodawaniu przytrzymując command. Mozliwe, ze trzeba wciskać Ctrl
