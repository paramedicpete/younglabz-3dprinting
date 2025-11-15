# 💳 Stripe Payment Integration Setup Guide

Your Young LABZ e-commerce site now has **full Stripe payment integration**! Follow these steps to get it working.

## 🔑 Step 1: Get Your Stripe API Keys

1. **Log in to your Stripe account** at [https://dashboard.stripe.com](https://dashboard.stripe.com)

2. **Get your API keys:**
   - Click on **Developers** in the left menu
   - Click on **API keys**
   - You'll see two keys:
     - **Publishable key** (starts with `pk_test_...`)
     - **Secret key** (starts with `sk_test_...`)

3. **Copy both keys** - you'll need them in the next step

## ⚙️ Step 2: Add Keys to Your Project

1. **Open the `.env.local` file** in your project root

2. **Replace the placeholder text** with your actual keys:

```bash
# Replace these with your actual Stripe keys
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_actual_key_here
STRIPE_SECRET_KEY=sk_test_your_actual_secret_key_here

# Your domain
NEXT_PUBLIC_DOMAIN=https://3dprinting.younglabz.com
```

3. **Save the file**

4. **Restart your development server:**
   - Stop the server (Ctrl+C in terminal)
   - Run `npm run dev` again

## 🧪 Step 3: Test the Payment Flow

### Test with Stripe Test Cards:

**Successful Payment:**
- Card: `4242 4242 4242 4242`
- Expiry: Any future date (e.g., `12/34`)
- CVC: Any 3 digits (e.g., `123`)
- ZIP: Any 5 digits (e.g., `12345`)

**Declined Payment:**
- Card: `4000 0000 0000 0002`
- (Same expiry, CVC, ZIP as above)

### Testing Steps:

1. Add products to cart
2. Click "Proceed to Checkout"
3. You'll be redirected to Stripe's secure checkout page
4. Enter test card details above
5. Complete the purchase
6. You'll be redirected to the success page
7. Check your Stripe Dashboard to see the test payment

## 🚀 Step 4: Going Live

### When ready to accept real payments:

1. **Complete Stripe account verification:**
   - In Stripe Dashboard, click "Activate your account"
   - Provide business information
   - Add bank account for payouts

2. **Switch to Live API keys:**
   - In Stripe Dashboard → Developers → API keys
   - Toggle from "Test mode" to "Live mode"
   - Copy your **live keys** (start with `pk_live_...` and `sk_live_...`)
   - Update `.env.local` with live keys

3. **Update your domain in `.env.local`:**
   ```bash
   NEXT_PUBLIC_DOMAIN=https://3dprinting.younglabz.com
   ```

4. **Deploy to production!**

## 🎨 What's Included

✅ **Secure Stripe Checkout** - Industry-standard payment processing
✅ **Shopping Cart Integration** - Seamless flow from cart to checkout
✅ **Tax Calculation** - Automatic 8% tax (configurable)
✅ **Shipping Costs** - $9.99 flat rate (configurable)
✅ **Order Confirmation** - Beautiful success page
✅ **Address Collection** - Stripe collects shipping address
✅ **Phone Collection** - Customer contact info captured
✅ **Email Receipts** - Stripe sends automatic receipts

## 🔧 Customization Options

### Change Tax Rate:
Edit `src/app/cart/page.tsx`:
```typescript
const tax = subtotal * 0.08; // Change 0.08 to your tax rate
```

### Change Shipping Cost:
Edit `src/app/cart/page.tsx`:
```typescript
const shipping = 9.99; // Change to your shipping cost
```

### Change Allowed Countries:
Edit `src/app/api/checkout/route.ts`:
```typescript
shipping_address_collection: {
  allowed_countries: ['US', 'CA', 'GB', 'AU'], // Add/remove countries
}
```

### Add Product Images to Stripe Checkout:
Your products already include images! The `image` field from your products is automatically sent to Stripe.

## 📊 Monitor Your Sales

View all transactions in your Stripe Dashboard:
- **Payments** - See all successful transactions
- **Customers** - View customer details
- **Reports** - Analytics and insights
- **Balance** - Track your earnings

## 🆘 Troubleshooting

**"Stripe failed to load" error:**
- Make sure `.env.local` has your publishable key
- Restart the dev server after adding keys

**Checkout button does nothing:**
- Check browser console for errors
- Verify both API keys are set correctly

**Test mode payments not appearing:**
- Make sure you're using test keys (`pk_test_...`)
- Check you're in test mode in Stripe Dashboard

## 🔒 Security Notes

- ✅ Secret key is only used server-side (API routes)
- ✅ Publishable key is safe to use client-side
- ✅ Never commit `.env.local` to git (already in `.gitignore`)
- ✅ All payment processing happens on Stripe's secure servers
- ✅ No credit card data ever touches your server

## 📧 Support

Need help? Contact Stripe support at [https://support.stripe.com](https://support.stripe.com)

---

**You're all set!** Your e-commerce site is ready to accept payments. 🎉
