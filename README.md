# EasyHealth

![Project Banner](https://github.com/Carine-Ashimwe/EasyHealth/blob/main/public/assets/images/easyhealth-dashboard.jpg)

## 🚀 Introduction

**EasyHealth** is a modern healthcare patient management application built with **Next.js**. It allows patients to easily register, book, and manage their appointments with doctors. The application features administrative tools for scheduling, confirming, and canceling appointments, along with **SMS notifications** for enhanced communication.

---

## 🛠️ Quick Start

Follow the steps below to set up and run the project on your local machine.

### ✅ Prerequisites

Ensure you have the following installed:

- [Git](https://git-scm.com/) (for version control)
- [Node.js](https://nodejs.org/en) (JavaScript runtime)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### 📥 Clone the Repository

```bash
git clone https://github.com/Carine-Ashimwe/EasyHealth.git
cd easyhealth
```

### 📦 Install Dependencies

Run the following command to install project dependencies:

```bash
npm install
```

### 🔧 Set Up Environment Variables

Create a `.env.local` file in the root directory and add the following environment variables:

```env
# Appwrite Configuration
NEXT_PUBLIC_ENDPOINT=https://cloud.appwrite.io/v1
PROJECT_ID=
API_KEY=
DATABASE_ID=
PATIENT_COLLECTION_ID=
APPOINTMENT_COLLECTION_ID=
NEXT_PUBLIC_BUCKET_ID=

# Admin Credentials
NEXT_PUBLIC_ADMIN_PASSKEY=123456
```

Replace the placeholder values with your actual **Appwrite** credentials. You can obtain them by signing up at [Appwrite](https://appwrite.io/).

### 🚀 Start the Development Server

Run the following command to start the project:

```bash
npm run dev
```

The application will be available at **[http://localhost:3000](http://localhost:3000)** in your browser.

---

## 🎯 Features

- 🏥 **Patient Registration** – Simple and user-friendly patient onboarding.
- 📅 **Appointment Management** – Book, reschedule, or cancel appointments.
- 📊 **Admin Dashboard** – Tools for managing patient data and schedules.
- 📲 **SMS Notifications** – Automated alerts for appointment confirmations and reminders.
- 🔒 **Secure & Scalable** – Built with modern authentication and database management.

---

Enjoy using **EasyHealth**! 🚀
