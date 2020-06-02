<div dir="rtl" style="padding:0 20% 0 20%">

# ברוכים הבאים למעבדה השנייה ב Vue.js !!! <img src="src/assets/logo.png" width="50" height="43.3" alt="Vue.js Logo">

## צורת הייבוא של Vue

את Vue אנחנו יכולים לייבא בכמה דרכים.\
במעבדה הקודמת דיברנו על ייבוא באמצעות תג script:

<div id="import" dir="ltr" style="padding-left:15%;">

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```

</div>

היום אנחנו נדבר על שימוש ב Vue-cli כך שבאמצעות npm שלמדנו בNode נוריד את Vue:

<div id="import" dir="ltr" style="padding-left:15%;">

```
npm i vue
```

</div>

אם נריץ את הפקודה `vue create PROJECT_NAME` יפתח לנו הוראות שבסופם יווצר לנו template ראשוני ובנוסף יורד לנו אוטומטית כל הספריות הבסיסיות עבור הרצה של Vue באמצעות npm.

## **_החלוקה של הקבצים ומה המשמעות בקצרה של כל קובץ_**

## <span id="task1" style="color:green;"> <-- משימה 1 --> </span>

**_נעביר את Register מקובץ html לקובץ vue שיהיה בתיקיית pages, נייבא אותו בApp.vue ונשתמש בו._**

## **_axios_**

בregister של מעבדה קודמת ואיך נשלח ונקבל ונטפל בבקשה

## <span id="task2" style="color:green;"> <-- משימה 2 --> </span>

**_להוסיף את הבקשה שפונה לשרת שלהם/ לשרת בסיס שלי_**

## **_קומפוננטה_**

איך נראית ואיך מייבאים אותה

## <span id="task3" style="color:green;"> <-- משימה 3 --> </span>

**_ליצור קומפוננטה בסיסית שמכילה רק string ולייבא אותה_**

## **_props של קומפוננטה_**

## <span id="task4" style="color:green;"> <-- משימה 4 --> </span>

**_להגדיר את כל הprops של קומפוננטת תצוגה מקדימה_**

## **_v-bind_**

איך השתמשנו שדיברנו על key ועל value בselect

## <span id="task5" style="color:green;"> <-- משימה 5 --> </span>

**_מה שהיה בתרגול קודם input של country יהפוך להיות select_**

## **_עמוד ראשי - הצגת תצוגות מקדימות_**

אחר כל איך ליצור עמוד שמשתמש בv-for (כמעט רשמתי ng-for) כדי ליצור שכפול של הקומפוננטה שיצרנו עד עכשיו אחרי שקיבלנו את המידע מaxios שאני אבנה להם את הבקשה בשרת שלי עבורה או שישתמשו בשלהם

</div>
&nbsp;

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

