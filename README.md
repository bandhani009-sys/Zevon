# 🖤 ZEVON - Premium Luxury Fashion E-Commerce Platform

> **DEFINE YOU. OWN TOMORROW.**

ZEVON is a cutting-edge luxury fashion e-commerce platform designed for a premium, Gen-Z focused unisex clothing brand. Built with modern technology and inspired by the aesthetic of brands like Rick Owens, Zara Studio, COS, Fear of God, and Saint Laurent.

---

## 🎨 Brand Identity

### Tagline
**DEFINE YOU. OWN TOMORROW.**

### Brand Meaning
- **Z** = Bold / Gen-Z Attitude
- **V** = Victory / Aspiration  
- **O** = Infinity / Future

### Brand Personality
- Confident
- Mysterious
- Modern
- Ambitious
- Timeless
- Minimal Luxury
- Urban Elite
- Fashion-Forward

### Color Palette
```
🖤 Matte Black (#000000)
🤍 Ivory Beige (#F5F1E8)
☁️ Soft Cream (#FFFDF7)
✨ Muted Gold (#B8956A)
🩶 Charcoal Gray (#36454F)
```

---

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with SSR
- **React 18** - UI library
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Premium animations
- **Zustand** - State management

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB

### Authentication
- **JWT** - Token-based auth
- **Firebase Auth** - OAuth integration
- **bcryptjs** - Password hashing

### Payment Integration
- **Razorpay** - Indian payment gateway
- **Stripe** - Global payments
- **UPI, Cards, Apple Pay, Google Pay, COD**

### Cloud Services
- **Cloudinary** - Image/video management
- **Firebase** - Authentication & hosting

---

## 📦 Project Structure

```
ZEVON/
├── server/
│   ├── models/
│   │   ├── Customer.js
│   │   ├── Product.js
│   │   ├── Order.js
│   │   └── Coupon.js
│   ├── routes/          (TODO)
│   ├── middleware/      (TODO)
│   ├── controllers/     (TODO)
│   ├── utils/          (TODO)
│   └── index.js
│
├── client/             (TODO - Next.js app)
│   ├── app/
│   ├── components/
│   ├── styles/
│   └── package.json
│
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

---

## ✨ Features

### Customer Features
✅ Browse unisex luxury clothing
✅ Advanced filtering & search
✅ Full product details with imagery
✅ Wishlist & shopping cart
✅ Secure checkout
✅ Multiple payment options
✅ Order tracking
✅ Product reviews & ratings
✅ User profile management

### Admin Features
✅ Product management (CRUD)
✅ Inventory management
✅ Pricing & discount control
✅ Coupon code creation
✅ Order management
✅ Sales analytics
✅ Customer management

### Additional Features
✅ AI outfit recommendations
✅ Trending products dashboard
✅ Flash sales & limited drops
✅ Fashion editorial blog
✅ Social media integration
✅ Push notifications
✅ Responsive mobile design

---

## 📦 Product Categories

- 👕 Oversized T-Shirts
- 🧥 Hoodies & Sweatshirts
- 👖 Cargo Pants & Trousers
- 🧤 Streetwear Jackets
- 👘 Co-ord Sets
- ✨ Minimal Essentials
- 🖤 Premium Basics
- 💍 Accessories
- ⭐ Limited Edition Drops
- 👗 Unisex Luxury Wear

---

## 🔐 Security Features

✅ JWT authentication
✅ OAuth 2.0 (Google, Apple)
✅ Bcrypt password hashing
✅ CORS protection
✅ Helmet.js security headers
✅ Rate limiting
✅ Input validation & sanitization
✅ Secure payment processing

---

## 💳 Payment Options

1. **Razorpay** - Primary Indian gateway
2. **Stripe** - Global credit/debit cards
3. **UPI** - Digital wallet transfers
4. **Apple Pay** - iOS mobile payments
5. **Google Pay** - Android mobile payments
6. **Cash on Delivery** - COD option

---

## 🎨 Design Philosophy

ZEVON is designed to feel like:
- A luxury editorial magazine
- A cinematic fashion campaign
- A premium designer brand platform
- Minimal but powerful
- Modern Gen-Z luxury aesthetic

### Design Principles
✨ Soft shadows & premium spacing
✨ Smooth blur effects (glassmorphism)
✨ Cinematic image layouts
✨ Fashion-editorial typography
✨ Muted luxury color tones
✨ Large, breathing whitespace
✨ Modern hover interactions

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- MongoDB Atlas account
- Firebase project
- Cloudinary account
- Razorpay & Stripe accounts

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/bandhani009-sys/Zevon.git
   cd Zevon
   ```

2. **Setup Backend**
   ```bash
   npm install
   cp .env.example .env
   # Fill in your environment variables
   npm run dev
   ```

3. **Setup Frontend** (Coming Soon)
   ```bash
   cd client
   npm install
   npm run dev
   ```

4. **Access the application**
   - Frontend: http://localhost:3000 (Coming Soon)
   - Backend: http://localhost:5000
   - Health Check: http://localhost:5000/health

---

## 📚 API Endpoints (Coming Soon)

### Authentication
```
POST   /api/v1/auth/signup
POST   /api/v1/auth/login
POST   /api/v1/auth/logout
POST   /api/v1/auth/refresh-token
```

### Products
```
GET    /api/v1/products
GET    /api/v1/products/:id
GET    /api/v1/products/category/:category
```

### Orders
```
POST   /api/v1/orders
GET    /api/v1/orders
GET    /api/v1/orders/:id
```

### Payments
```
POST   /api/v1/payments/razorpay/create
POST   /api/v1/payments/stripe/create
```

---

## 🗄️ Database Models

### Customer
- Full user profile with addresses
- Authentication fields
- Order & wishlist history
- Shopping cart management

### Product
- Complete product details
- 10 luxury streetwear categories
- Size & color variants
- Inventory tracking
- Reviews & ratings

### Order
- Order items with pricing
- Multiple payment methods
- Shipping & tracking
- Return/refund management

### Coupon
- Percentage & fixed discounts
- Usage limits & validity
- Category/product restrictions

---

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 📞 Support

For support, email support@zevon.com or open an issue on GitHub.

---

**DEFINE YOU. OWN TOMORROW.** ✨

Built with 🖤 by ZEVON Team
