🚀 React Native SVGA Player (Android Native Module)
🔍 Overview
Yeh project React Native ke liye ek custom Android native module provide karta hai jo SVGA animations ko efficiently render karta hai. Iska maksad hai React Native app mein .svga animation files ko local assets ya remote URLs se bina kisi third-party JS conversion ke directly play karna.

✨ Key Features
🖼️ Android native SVGAImageView ko React Native ke liye expose karta hai

📁 Local assets folder ya 🌐 internet URLs se SVGA animations load karta hai

🎛️ React props ke through source, loop count, aur autoplay control karta hai

⚡ Fully customizable aur performant animation playback native layer par

🏗️ Project Structure & Setup
Android Native Side
📌 SVGAViewManager.kt — SVGA animation view create aur control karta hai

📦 MyAppPackage.kt — React Native ko custom view manager register karta hai

🏭 MainApplication.kt — Package manually add karke React Native ko module ka pata chalata hai

React Native Side
📲 SVGAPlayer.js — requireNativeComponent use karke native view ko JS component banata hai

🎬 App.js — Local aur remote SVGA animations chalane ka demo

🗂️ Assets Setup
Local .svga files ko Android ke android/app/src/main/assets folder mein rakhna hota hai taaki native module se access ho sake.

⚙️ Usage
React Native mein SVGAPlayer component import karke use karein, props jaise:

source (local ya remote)

loops (animation loop count)

autoplay (animation automatic start)

📋 Summary
Is module se aap React Native apps mein high-performance SVGA animations directly native Android se seamlessly chala sakte hain bina extra conversion ke. Yeh setup thoda manual hai par flexible aur production ready hai.