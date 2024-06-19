---
title: An Overview
description: A Detailled Description of SupaStarter Native
---

## Goals

SupaStarter Native aims to give React Native developers a starting point for experiments. Use it as a learning tool or for prototyping. It includes a complete auth flow (with email change and password reset), user profiles with Avatar and image upload, internationalisation, error logging and analytics. It uses free tools (or in the case of error reporting and analytics services with generous free tiers).

## The Stack

- [Expo](https://expo.dev)
- [NativeWind](https://www.nativewind.dev) (v4)
- [React Native Reusables](https://github.com/mrzachnugent/react-native-reusables) (ShadCN components for React Native)
- [React Hook Form](https://react-hook-form.com)
- [Tanstack Query](https://tanstack.com/query/latest)
- [Valibot](https://valibot.dev)
- [Zustand](https://zustand-demo.pmnd.rs)
- [Lingui](http://lingui.dev)
- [Bugsnag](https://www.bugsnag.com)
- [Mixpanel](http://mixpanel.com)

## What's Not Included

- OAuth. The difficulty in setting OAuth (Apple and Google sign in) lies mainly in setting up a project with Apple or Google and getting all the settings in order, not the actual code, so I usually only worry about it when a project gets serious.
- Monorepo. I am not terribly interested in React on the desktop at the moment, so I have no plans for a monorepo. If that is important to you, you might wanna check out [create-t3-turbo](https://github.com/t3-oss/create-t3-turbo).

## How This Project Got Started

When I was starting React Native development, I had a hard time choosing the right tools and having a stable setup. After much experimentation I converged to the following base. My hope is it will make the life easier for other programmers wanting to experiment with React Native.
