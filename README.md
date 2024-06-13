# Inquiry Form Application

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.3.

## Project Overview
This project is an inquiry form application built with Laravel (backend) and Angular (frontend). It allows users to submit inquiries, which are then stored in a database.
## Project Setup Instructions
### Backend (Laravel)

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the backend directory: `cd backend`
3. Install dependencies: `composer install`
4. Set up the environment file: `cp .env.example .env`
5. Generate application key: `php artisan key:generate`
6. Configure your database settings in the `.env` file.
7. Run the database migrations: `php artisan migrate`
8. Start the Laravel server: `php artisan serve`

### Frontend (Angular)

1. Navigate to the frontend directory: `cd dawit-insurance`
2. Install dependencies: `npm install`
3. Start the Angular server: `ng serve`

### Running the Application

1. Make sure both Laravel and Angular servers are running.
2. Open your browser and navigate to `http://localhost:4200`.

## API Endpoints

- `GET /api/inquiry`: Retrieve all inquiries.
- `POST /api/inquiry`: Submit a new inquiry.

## Additional Information

- Ensure your Laravel server is running on `http://localhost:8000`.
- Update the API URL in the Angular service if necessary.

### Rebuilding the Application

After making these changes, rebuild and restart your Angular application:

```bash
ng serve
```

Then, open your browser and navigate to `http://localhost:4200` to see the form.

## API Endpoints

- `GET /api/inquiry`: Retrieve all inquiries.
- `POST /api/inquiry`: Submit a new inquiry.

## Additional Information

- Ensure your Laravel server is running on `http://localhost:8000`.
- Update the API URL in the Angular service if necessary.

### Summary

Ensure that:
1. `InquiryFormComponent` is declared in the `declarations` array of `AppModule`.
2. The import paths for `InquiryFormComponent` are correct.
3. The selector used in `app.component.html` matches the selector defined in `InquiryFormComponent`.

By following these steps, Angular should recognize the `<app-inquiry-form>` component, and the form should render correctly in the browser.
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

