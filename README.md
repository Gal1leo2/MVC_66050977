https://github.com/Gal1leo2/MVC_66050977
ทำข้อ1 ครับ
------------------------------------------------------
เขียนใน svelte
โดยใน src/routes/home/+page.svelte 
เป็นส่วนของ View ซึ่งใช้แสดงผล อัพเดตข้อมูล User Interaction รวมถึง Styling
รอรับค่า id (รับหลายค่าได้ จากปุ่ม add id)
------------------------------------------------------
ส่วนใน BACK_MVC เป็นส่วนของ Controller และ Model โดยในcontrollers\dataController.js
เป็นส่วนของ Controller โดยเมือรับค่า ID จาก view(frontend) ผ่าน api ก็จะมีการ models\dataModel.js เป็นส่วนของ Model มีการ 

Data Interaction (อ่านค่า CSV) มีการ Processing each row เพื่อ match กับ ID และ มีการทำ Business Logic ข้างใน คือการคำนวณว่าวัวผลิตนมได้เท่าไหร่ , มี 

Callback Mechanism




csv คือ BACK_MVC/generated_data.csv

TECH STACK 
FRONTEND(VIEW): Svelte
BACKEND(CONTROLLER , MODEL) :Express.js
# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
