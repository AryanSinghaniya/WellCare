# WellCare - Medical Appointment System

A comprehensive full-stack medical appointment management system built with the MERN stack (MongoDB, Express.js, React, Node.js). WellCare enables patients to book appointments with doctors, while providing separate dashboards for administrators and doctors to manage appointments, profiles, and more.

## 🌟 Features

### Patient/User Features
- User registration and login with JWT authentication
- Browse doctors by specialty
- Book appointments with available time slots
- Manage appointments (view, cancel)
- Update profile information with image upload
- Payment integration (Razorpay)
- Appointment verification and confirmation

### Admin Features
- Admin dashboard with statistics
- Add new doctors to the system
- Manage all doctors (view, update availability)
- View and manage all appointments
- Cancel appointments
- Doctor availability management

### Doctor Features
- Doctor login with secure authentication
- Doctor dashboard with earnings and statistics
- View assigned appointments
- Mark appointments as completed
- Cancel appointments
- Update profile and availability
- Manage consultation fees

## 🚀 Tech Stack

### Frontend
- **React 19** - UI library
- **React Router DOM** - Navigation
- **Axios** - HTTP requests
- **Tailwind CSS 4** - Styling
- **React Toastify** - Notifications
- **Vite** - Build tool
- **Framer Motion** - Animations (Client)
- **GSAP** - Animations (Client)

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **Bcrypt** - Password hashing
- **Cloudinary** - Image storage
- **Multer** - File uploads
- **Razorpay** - Payment gateway
- **Validator** - Data validation

## 📁 Project Structure

```
WellCare-main/
├── admin/              # Admin & Doctor dashboard (React app)
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   └── assets/
│   ├── .env
│   └── package.json
├── client/             # Patient/User frontend (React app)
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   └── assets/
│   ├── .env
│   └── package.json
└── server/             # Backend API (Node.js/Express)
    ├── config/
    ├── controllers/
    ├── middleware/
    ├── models/
    ├── routes/
    ├── .env
    └── package.json
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB database
- Cloudinary account (for image uploads)
- Razorpay account (for payments)

### 1. Clone the Repository
```bash
git clone <repository-url>
cd WellCare-main
```

### 2. Server Setup

```bash
cd server
npm install
```

Create a `.env` file in the `server` directory:
```env
# MongoDB Configuration
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/wellcare

# JWT Secret Key
JWT_SECRET=your_super_secret_jwt_key_here

# Admin Credentials
ADMIN_EMAIL=admin@wellcare.com
ADMIN_PASSWORD=Admin@12345

# Cloudinary Configuration
CLOUDINARY_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key

# Payment Gateway - Razorpay
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret

# SMTP Configuration (for emails)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password

# Currency
CURRENCY=INR

# Server Port
PORT=4000
```

**Important Notes:**
- Do NOT use '@' symbol in your MongoDB user's password
- Generate a strong random string for JWT_SECRET
- Get Cloudinary credentials from https://cloudinary.com
- Get Razorpay credentials from https://razorpay.com

Start the server:
```bash
npm start
# or for development with auto-reload
npm run server
```

### 3. Client Setup

```bash
cd client
npm install
```

Create a `.env` file in the `client` directory:
```env
VITE_BACKEND_URL=http://localhost:4000
VITE_CURRENCY=₹
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
VITE_ADMIN_URL=http://localhost:5173
```

Start the client:
```bash
npm run dev
```
The client will run on `http://localhost:5174`

### 4. Admin Panel Setup

```bash
cd admin
npm install
```

Create a `.env` file in the `admin` directory:
```env
VITE_BACKEND_URL=http://localhost:4000
VITE_CURRENCY=₹
```

Start the admin panel:
```bash
npm run dev
```
The admin panel will run on `http://localhost:5173` (default Vite port)

## 🔐 Default Admin Credentials

Use the credentials you set in the server `.env` file:
- Email: `admin@wellcare.com` (or your ADMIN_EMAIL)
- Password: Your ADMIN_PASSWORD

## 📡 API Endpoints

### User Routes (`/api/user`)
- `POST /register` - Register new user
- `POST /login` - User login
- `GET /get-profile` - Get user profile (protected)
- `POST /update-profile` - Update user profile (protected)
- `POST /book-appointment` - Book appointment (protected)
- `GET /appointments` - Get user appointments (protected)
- `POST /cancel-appointment` - Cancel appointment (protected)
- `POST /payment-razorpay` - Create Razorpay order (protected)
- `POST /verifyRazorpay` - Verify Razorpay payment (protected)

### Doctor Routes (`/api/doctor`)
- `POST /login` - Doctor login
- `GET /appointments` - Get doctor appointments (protected)
- `POST /cancel-appointment` - Cancel appointment (protected)
- `POST /complete-appointment` - Mark appointment complete (protected)
- `GET /list` - Get all doctors (public)
- `POST /change-availability` - Toggle availability (protected)
- `GET /dashboard` - Get dashboard data (protected)
- `GET /profile` - Get doctor profile (protected)
- `POST /update-profile` - Update doctor profile (protected)

### Admin Routes (`/api/admin`)
- `POST /login` - Admin login
- `POST /add-doctor` - Add new doctor (protected)
- `GET /appointments` - Get all appointments (protected)
- `POST /cancel-appointment` - Cancel appointment (protected)
- `GET /all-doctors` - Get all doctors (protected)
- `POST /change-availability` - Change doctor availability (protected)
- `GET /dashboard` - Get dashboard statistics (protected)

## 🗃️ Database Models

### User Model
- name, email, password, phone, address, gender, dob, image

### Doctor Model
- name, email, password, image, speciality, degree, experience, about, fees, address, available, slots_booked, date

### Appointment Model
- userId, docId, slotDate, slotTime, userData, docData, amount, date, cancelled, payment, isCompleted

## 🔒 Authentication

The application uses JWT (JSON Web Tokens) for authentication:
- **User Authentication**: Token stored in localStorage, sent via `token` header
- **Admin Authentication**: Token sent via `atoken` header
- **Doctor Authentication**: Token sent via `dtoken` header

## 🎨 Features Highlights

1. **Slot Management**: Automatic slot booking and release system
2. **Image Upload**: Cloudinary integration for profile images
3. **Payment Integration**: Support for Razorpay
4. **Real-time Updates**: Instant UI updates after actions
5. **Responsive Design**: Mobile-friendly interface
6. **Error Handling**: Comprehensive error handling and user feedback
7. **Secure**: Password hashing, JWT tokens, protected routes

## 🚀 Deployment

### Backend (Vercel)
The server includes a `vercel.json` configuration file for deployment on Vercel.

### Frontend (Vercel/Netlify)
Both client and admin panels can be deployed on Vercel, Netlify, or any static hosting service.

Remember to update the `VITE_BACKEND_URL` in the frontend `.env` files to your production API URL.

## 📝 Development Notes

- Client runs on port 5174
- Admin panel runs on default Vite port (5173)
- Server runs on port 4000 (configurable)
- All dates are stored in `DD_MM_YYYY` format
- Currency symbol is configurable via environment variables


https://wellcare-admin.vercel.app
