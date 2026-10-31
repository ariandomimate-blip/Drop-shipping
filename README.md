# DROP//SHIFT storefront

Node/Express storefront scaffold with responsive frontend, cart, API endpoint, and supplier-cost pricing logic.

## Pricing

Retail = supplier cost × (1 + MARKUP_PERCENT / 100). With MARKUP_PERCENT=100, retail price is exactly twice the supplier cost (100% markup). The source price is not overwritten.

## Run locally

```sh
npm install
cp .env.example .env
npm start
`

Open http://localhost:3000. The included `data/products.json` is demo content only.

## Supplier integration status

The catalog adapter normalizes imported product data. No Spocket/CJ API connection or credentials are included yet. Configure official supplier API access and build/test provider-specific pagination, variant mapping, currency conversion, shipping/stock refresh, and supplier order submission before publishing live products. Never scrape private supplier portals or commit API secrets.

## Checkout status

Checkout is deliberately disabled. Connect a payment provider, validate orders server-side, configure webhook signature verification, taxes/shipping/refunds, and supplier fulfillment before accepting real payments. Payment-provider payouts require separate account verification and payout configuration; markup is not itself a bank transfer.

## Render

Render can use the included `render.yaml` blueprint, or set build command `npm install` and start command `npm start`. Set supplier/payment secrets only in Render Environment settings. Set MARKUP_PERCENT=100.
