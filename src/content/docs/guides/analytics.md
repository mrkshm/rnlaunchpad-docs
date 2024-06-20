---
title: Analytics
description: Set up analytics
---

## Set Up Mixpanel

Out of the box, tracking events will simply be logged to the console. If you want to set up Mixpanel, follow these steps:

1. Create an account and project at [Mixpanel](https://mixpanel.com).
2. Copy the Project Token (in Project Settings -> Overview).
3. In your .env file, replace `fakeMixpanelToken` with the real one.
4. In your .env file, set EXPO_PUBLIC_ENABLE_ANALYTICS to true: `EXPO_PUBLIC_ENABLE_ANALYTICS=true`.
5. After restarting the server, tracking events will no longer be logged to the console but reported to Mixpanel.

## How to track events

Tracking is set up in `/hooks/use-analytics.ts`. You use it in a component like so: ` const { trackEvent } = useAnalytics();``trackEvent("Tracking some important event") `
