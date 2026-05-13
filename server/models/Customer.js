import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'First name is required'],
      trim: true,
      minlength: [2, 'First name must be at least 2 characters']
    },
    lastName: {
      type: String,
      required: [true, 'Last name is required'],
      trim: true,
      minlength: [2, 'Last name must be at least 2 characters']
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      match: [/^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/, 'Please provide a valid email']
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      match: [/^[0-9]{10}$/, 'Please provide a valid 10-digit phone number']
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [6, 'Password must be at least 6 characters'],
      select: false
    },
    profileImage: {
      type: String,
      default: null
    },
    gender: {
      type: String,
      enum: ['male', 'female', 'non-binary', 'prefer-not-to-say'],
      default: 'prefer-not-to-say'
    },
    dateOfBirth: {
      type: Date,
      default: null
    },
    addresses: [{\n      _id: mongoose.Schema.Types.ObjectId,
      name: String,
      street: String,
      city: String,
      state: String,
      zipCode: String,
      country: String,
      phone: String,
      isDefault: {
        type: Boolean,
        default: false
      },
      createdAt: {
        type: Date,
        default: Date.now
      }
    }],
    orders: [{\n      type: mongoose.Schema.Types.ObjectId,
      ref: 'Order'
    }],
    wishlist: [{\n      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product'
    }],
    reviews: [{\n      type: mongoose.Schema.Types.ObjectId,
      ref: 'Review'
    }],
    cart: [{\n      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
      },
      quantity: {
        type: Number,
        required: true,
        min: 1
      },
      selectedSize: String,
      selectedColor: String,
      addedAt: {
        type: Date,
        default: Date.now
      }
    }],
    recentlyViewed: [{\n      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
      },
      viewedAt: {
        type: Date,
        default: Date.now
      }
    }],
    isEmailVerified: {
      type: Boolean,
      default: false
    },
    isPhoneVerified: {
      type: Boolean,
      default: false
    },
    isActive: {
      type: Boolean,
      default: true
    },
    isBlocked: {
      type: Boolean,
      default: false
    },
    newsletter: {
      type: Boolean,
      default: true
    },
    notifications: {
      email: { type: Boolean, default: true },
      sms: { type: Boolean, default: true },
      push: { type: Boolean, default: true }
    },
    preferences: {
      preferredCurrency: { type: String, default: 'INR' },
      preferredLanguage: { type: String, default: 'en' },
      theme: { type: String, default: 'dark' }
    },
    googleId: String,
    appleId: String,
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: {
      type: Date,
      default: Date.now
    },
    lastLogin: Date
  },
  {
    timestamps: true,
    collection: 'customers'
  }
);

customerSchema.index({ email: 1 });
customerSchema.index({ phone: 1 });
customerSchema.index({ createdAt: -1 });
customerSchema.index({ isActive: 1 });

export const Customer = mongoose.model('Customer', customerSchema);
